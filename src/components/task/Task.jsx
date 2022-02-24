import { FaTimes } from 'react-icons/fa'
import './Task.css'

const Task = ({ task, deleteTask, toggleReminder }) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`}  onDoubleClick={() => toggleReminder(task.id) }>
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