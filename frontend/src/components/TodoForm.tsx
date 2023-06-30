import { ReactComponent as AddIcon } from "../assets/icons/addIcon.svg"

const TodoForm = () => {
    return(
        <div className="flex justify-between">
            <div>
                <h1> Today's Task </h1>
                <span> Wedneday, 11 May </span>
            </div>
            <button className="flex items-center">
                <AddIcon />
                <span>
                    New Todo
                </span>
            </button>
        </div>
    )
}

export default TodoForm;