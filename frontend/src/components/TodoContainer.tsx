import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

const TodoContainer = () => {
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        const dataFetch = async () => {
            const data = await(await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/tasks`)).json();
            setTasks(data)
        }
        dataFetch();
    },[tasks])

    return (
        <>
            {tasks.map((todo: {}, index) => {
                return (<TodoItem key={index} todo={todo}/>)
            })}
        </>
    )
}

export default TodoContainer;