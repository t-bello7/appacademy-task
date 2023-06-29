import TodoItem from "./TodoItem";

const todoData: { 
    id: string,
    todoText: string,
    isComplete: boolean,
    isArchived: boolean,
    }[]  = [
    {
        id: 'd3',
        todoText: 'Get a job',
        isComplete: false,
        isArchived: false
    },
    {
        id: 'd233',
        todoText: 'Get a job',
        isComplete: false,
        isArchived: false
    }
]

const TodoContainer = () => {
    return (
        <>
            {todoData.map((todo: {}) => {
                return (<TodoItem todo={todo}/>)
            })}
        </>
    )
}

export default TodoContainer;