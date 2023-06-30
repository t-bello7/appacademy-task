import {  useNavigation } from "react-router";
import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

const TodoContainer = () => {
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        const user = localStorage.getItem("userData");
        const dataFetch = async () => {
            const data = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/tasks`, {
                headers:{
                    "x-access-token": JSON.parse(user as string).token
                }
            });
            const userData = await data.json();
            setTasks(userData)
        }
        dataFetch();
    },[])
    const navigation = useNavigation();
    return (
        <>
         {navigation.state === "loading" && <h1>Loading</h1>}
            {tasks.map((todo: {}, index: any) => {
                return (<TodoItem key={index} todo={todo}/>)
            })}
        </>
    )
}

export default TodoContainer;