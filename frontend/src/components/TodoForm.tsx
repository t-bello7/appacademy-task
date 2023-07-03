import { useState, useContext } from "react"
// import { ReactComponent as AddIcon } from "../assets/icons/addIcon.svg"
import { TaskContext } from "../pages/Home"
import CustomButton from "../components/Button"

const TodoForm = () => {
    const {taskData, setTaskData} = useContext(TaskContext)
    const [todoText, setTodoText] = useState("")
    const handleChange = (e: any) => {
        setTodoText(e.target.value)
    }
    const handleClick = async (e: any) => {
        e.preventDefault()
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
                body: JSON.stringify({"todoText": todoText})
            });
            const task = await res.json()
            if(task.todoText){
                setTodoText("")
                setTaskData([...taskData, task])
            }
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
            <CustomButton text={"Add Todo"} onClick={handleClick} />
        </div>
    )
}

export default TodoForm;