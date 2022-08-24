import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { changeFilter } from '../redux/todosSlice'

const Sections = () => {
    const dispatch = useDispatch()

    return (
        <div className='non-bootstrap-container'>
            <div className='card'>
                <div className='card-header'>
                    <button className="btn btn-warning" onClick={() => dispatch(changeFilter('active'))}>Active</button>
                    <button className="btn btn-success" onClick={() => dispatch(changeFilter('completed'))}>Completed</button>
                </div>
            </div>
        </div>
    )
}

export default Sections