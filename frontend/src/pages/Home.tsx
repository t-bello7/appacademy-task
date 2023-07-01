import {createContext, useState} from "react"
import Header from "../components/Header"
import TodoContainer from "../components/TodoContainer"
import TodoForm from "../components/TodoForm"

type TaskContextType = {
    taskData: {
        isComplete: boolean,
        id:  number,
        todoText: string,
        isArchived: boolean
    }[],
    setTaskData: React.Dispatch<React.SetStateAction<{
        isComplete: boolean,
        id:  number,
        todoText: string,
        isArchived: boolean
    }[]>>
}
const TaskContext = createContext<TaskContextType>({
    taskData: [],
    setTaskData: () => {},
});
const Home = () => {
    const [taskData, setTaskData] = useState<{
        isComplete: boolean,
        id:  number,
        todoText: string,
        isArchived: boolean
    }[]>([])
    const taskValue = { taskData, setTaskData}
    return(
        <div className="w-[90%] h-screen container mx-auto">
            <div className="rounded-lg px-6 py-8 mt-[10vh] shadow-xl bg-white">
                <Header />
                
                <TaskContext.Provider value={taskValue}>
                        <TodoForm />
                        <TodoContainer />
                </TaskContext.Provider>
  
            </div>
        </div>
    )
}
export { TaskContext }
export default Home