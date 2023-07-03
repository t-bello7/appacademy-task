import { useState, useEffect, useContext } from 'react'
import { TaskContext } from "../pages/Home"

import { ReactComponent as EditIcon } from '../assets/icons/editIcon.svg'
import { ReactComponent as DragIcon } from '../assets/icons/dragIcon.svg'
import { ReactComponent as DeleteIcon } from '../assets/icons/deletIcon.svg'

const user = localStorage.getItem("userData");
const BASE_URL=`${import.meta.env.VITE_BACKEND_URL}/api/tasks/`

const TodoItem = ({todo}: any) => {
  const {taskData, setTaskData} = useContext(TaskContext)
  const [edit, setEdit] = useState({
    editState: false,
    editTodoText: todo.todoText
  });
  const [checked, setChecked] = useState(todo.isComplete);
  const fetchCall = async (method:any, url:any, bodyName: any, bodyValue: any) => {
    const res = await fetch(`${BASE_URL}${url}`, {
      method, 
      headers:{
          "Content-Type": "application/json",
          "x-access-token": JSON.parse(user as string).token
      },
      body: JSON.stringify({[bodyName]: bodyValue})
    })
    return res;
  }
  const checkboxhandler = async (e: any) => {
    setChecked(e.target.checked);
    try {
      const res = await fetchCall("PATCH", todo.id, "isComplete",!checked)
      const updateTask = await res.json() 
      const taskIndex = taskData.findIndex(((obj:any) => obj.id === updateTask.id))
      taskData[taskIndex] = updateTask
      setTaskData(taskData)
    } catch (err) {
      console.log(err);
    }
  } 
  const handleDeleteTask  = async () => {
      await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/tasks/${todo.id}`, {
        method: "DELETE",
        headers:{
            "Content-Type": "application/json",
            "x-access-token": JSON.parse(user as string).token
        }
      })
      const filterTaskData = taskData.filter(item => item.id != todo.id);
      setTaskData(filterTaskData);
  }
  const handleEditTask = (e: any) => {
    if (e.target.id === 'edit-icon' || e.target.id === 'todo-box'){
      setEdit({
        ...edit,
        editState: !edit.editState
      });
    }
    if (e.target.name === 'todoText'){
      setEdit({
        ...edit,
        editTodoText: e.target.value
      });
    }
  }

  const updateEditTask = async (e: any) => {
    if (e.key === 'Enter') {
      try {
        const res = await fetchCall("PATCH", todo.id, "todoText", edit.editTodoText)
        const updateTask = await res.json() 
        const taskIndex = taskData.findIndex(((obj:any) => obj.id === updateTask.id))
        taskData[taskIndex] = updateTask
        setTaskData(taskData)
        return
      } catch (err){
        console.log(err)
      }
    }
    try {
      const res = await fetchCall("PATCH", todo.id, "todoText", edit.editTodoText)
      const updateTask = await res.json() 
      const taskIndex = taskData.findIndex(((obj:any) => obj.id === updateTask.id))
      taskData[taskIndex] = updateTask
      setTaskData(taskData)
    } catch(err) {
      console.log(err);
    }

  }
  useEffect(() => {
    setChecked(todo.isComplete)
  },[])
  return (
    <div 
    key={todo.id} 
    className='px-2'>
    <li
      key={todo.id}
      className='bg-white items-center border-b-2 py-0 md:py-2 px-2 md:px-5 flex rounded-lg mb-3 ml-auto mr-auto mt-4'
    >
      <input
        type='checkbox'
        className='h-4 w-4 md:h-7 md:w-7 mt-auto mb-auto mr-2 ml-2 rounded-full text-[#4d3434] focus:ring-[#757575]'
        id={todo.id}
        checked={checked}
        onChange={checkboxhandler}
      />
      {
        edit.editState ?
        (
         <input name='todoText' value={edit.editTodoText} onChange={handleEditTask} onBlur={updateEditTask} onKeyDown={updateEditTask} className='w-full'/> 
        ) : (
        <div id='todo-box' className='w-full text-[#676767] font-light md:font-bold mr-auto p-2 md:text-sm text-[12px]' onClick={handleEditTask}>
          {todo.todoText}
        </div>
        )
      }
  
      <div className='text-[13.5px] md:text-base cursor-pointer md:space-x-12 space-x-4 justify-items-center flex '>
      <button onClick={handleEditTask} type='button'>
       <EditIcon />
      </button>
      <button onClick={handleDeleteTask} type='button'>
        <DeleteIcon />
      </button>
      <button type='button'>
        <DragIcon />
      </button>
      </div>
    </li>
  </div>)
}

export default TodoItem;