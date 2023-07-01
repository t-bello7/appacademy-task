import {  useNavigation } from "react-router";
import { useEffect, useContext } from "react";
import { TaskContext } from "../pages/Home";
import TodoItem from "./TodoItem";


const TodoContainer = () => {
    const {taskData, setTaskData} = useContext(TaskContext)
    useEffect(() => {
        const user = localStorage.getItem("userData");
        const dataFetch = async () => {
            const data = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/tasks`, {
                headers:{
                    "x-access-token": JSON.parse(user as string).token
                }
            });
            const dataJson = await data.json();
            console.log(dataJson)
            if(dataJson) {
                setTaskData(dataJson)
            }
        }
        dataFetch();
    },[])
    const navigation = useNavigation();
    return (
        <>
         {navigation.state === "loading" && <h1>Loading</h1>}
            {taskData.map((todo: {}, index: any) => {
                return (<TodoItem key={index} todo={todo}/>)
            })}
        </>
    )
}

export default TodoContainer;