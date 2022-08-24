import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCompleted, deleteFromActives, clearActives, clearCompleted, getActives } from '../redux/todosSlice'

let filtered = [];

const Tasks = () => {
    const dispatch = useDispatch()
    const actives = useSelector((state) => state.todo.actives)
    const completed = useSelector((state) => state.todo.completed)
    const activeFilter = useSelector((state) => state.todo.activeFilter)

    filtered = actives;
    if(activeFilter === "active"){
        filtered = actives
    } else {
        filtered = completed
    }

    const handleDelete = (id) => {
        if(window.confirm("Are you sure?")){
            dispatch(deleteFromActives(id))
        }
    }

    const handleClearAllActives = () => {
        if(actives.length == 0){
            return;
        } else {
            if(window.confirm("Are you sure, do you want to clear all actives?")) {
                dispatch(clearActives())}
        }
    }

    return (
        <>
            <div className='non-bootstrap-container tasks'>
                {
                    <ul>
                        {   
                            filtered.map((item, index) => (
                                <li key={item.id} className={activeFilter !== "completed" ? "" : "space-between"}>
                                    <div className='task-title'>
                                        <span>{index + 1}. </span>
                                        <span>{item.taskTitle}</span>
                                    </div>
                                    <span className='task-detail'>{item.taskDetail}</span>
                                    <div className={activeFilter !== "completed" ? "buttons": "buttons space-between"}>
                                        <button className={activeFilter !== "completed" ? "btn btn-primary": "none"}  onClick={() => dispatch(addToCompleted(item))}><i className="fa-solid fa-check"></i></button>
                                        <button className={activeFilter !== "completed" ? "btn btn-danger": "none"}  onClick={() => handleDelete(item.id)}><i className="fa-solid fa-trash-can"></i></button>
                                    </div>
                                </li>
                            ))
                            
                        }
                    </ul>
                }
            </div>
            <div className='non-bootstrap-container card card-header clear-all'>
                <div className={activeFilter !== "completed" ? "task-left" : "visibility"}>
                    <p>{actives.length} task{actives.length > 1 ? "s" : ""} left</p>
                </div>
                <div className='clear-buttons'>
                    <button className='btn btn-danger' onClick={() => handleClearAllActives()}>Clear Actives</button>
                    <button className='btn btn-danger' onClick={() => dispatch(clearCompleted())}>Clear Completed</button>
                </div>
            </div>
        </>
    )
}

export default Tasks