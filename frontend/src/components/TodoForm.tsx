import { useState, useContext } from "react"
import { ReactComponent as AddIcon } from "../assets/icons/addIcon.svg"
import { TaskContext } from "../pages/Home"

const TodoForm = () => {
    const {taskData, setTaskData} = useContext(TaskContext)
    const [todoText, setTodoText] = useState("")
    const handleChange = (e: any) => {
        setTodoText(e.target.value)
    }
    const handleClick = async () => {
        if (!todoText) {
            return
        }
        try {
            console.log('get userr data')
            const user = localStorage.getItem("userData");
            const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/tasks`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": JSON.parse(user as string).token
                },
                body: JSON.stringify({todoText})
            });
            console.log(res)
            const task = await res.json()
            console.log(task)
            setTodoText("")
            setTaskData([...taskData, task])
        } catch (err) {
            console.log("Error", err);
        } 
    }

    return(
        <div className="flex flex-col items-center gap-1 md:flex-row md:justify-between">
            <div>
                <span>{ new Date().toLocaleString() + "" }</span>
            </div>

            <input name="todoText" value={todoText} onChange={handleChange} placeholder="Enter you new text" className="w-full h-10"/>
            <button onClick={handleClick} className="flex items-center">
                <AddIcon />
                <span>
                    Add Todo
                </span>
            </button>
        </div>
    )
}

export default TodoForm;