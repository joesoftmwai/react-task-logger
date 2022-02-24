import { FaTimes } from 'react-icons/fa'
import './Task.css'

const Task = ({ task, deleteTask }) => {
  return (
    <div className='task'>
        <h3>{ task.text }   
            <FaTimes 
                style={{color:'red', cursor: 'pointer', }}
                onClick={() => deleteTask(task.id) } /> 
        </h3>
        <p>{ task.date }</p>
    </div>
  )
}

export default Task