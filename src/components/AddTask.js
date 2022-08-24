import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/todosSlice'
import { nanoid } from '@reduxjs/toolkit'

const AddTask = () => {
    const [taskTitle, setTaskTitle] = useState("")
    const [taskDetail, setTaskDetail] = useState("")
    const [error, setError] = useState("")

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(taskTitle === ""){
            setError("Please enter a task!")
        }  else {
            dispatch(addTodo({id: nanoid(), taskTitle, taskDetail}))
            setTaskTitle("")
            setTaskDetail("")
            setError("")
        }
    }

    return (
        <div className='non-bootstrap-container add-task-form'>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter Task' maxLength={40} value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)}/>
                <textarea  placeholder='Task Details (Optional)' maxLength={70} value={taskDetail} onChange={(e) => setTaskDetail(e.target.value)}></textarea>
                <div className='add-button-and-error'>
                <p className='error text-danger'>{error}</p>
                <button type='submit' className='btn btn-primary'>Add Task</button>
                </div>
            </form>
        </div>
    )
}

export default AddTask
