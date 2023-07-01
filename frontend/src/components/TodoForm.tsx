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
            const user = localStorage.getItem("userData");
            const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/tasks`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": JSON.parse(user as string).token
                },
                body: JSON.stringify({todoText})
            });
            const task = await res.json()
            setTaskData([...taskData, task])
        } catch (err) {
            console.log("Error", err);
        } 
    }
    return(
        <div className="flex justify-between">
            <div>
                <h1> Today's Task </h1>
                <span> Wedneday, 11 May </span>
            </div>

            <input name="todoText" value={todoText} onChange={handleChange} placeholder="Enter you new text"/>
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