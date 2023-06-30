import { useLoaderData, useNavigation } from "react-router";
import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

const TodoContainer = () => {
    // const [tasks, setTasks] = useState([])
    // useEffect(() => {
    //     const dataFetch = async () => {
    //         const data = await(await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/tasks`)).json();
    //         setTasks(data)
    //     }
    //     dataFetch();
    // },[tasks])
    const tasks = useLoaderData();
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