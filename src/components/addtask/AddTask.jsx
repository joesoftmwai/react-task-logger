import React, { useState } from 'react'

const AddTask = ({  addTask }) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        if(text && day) {
            addTask({text, day, reminder});
        }
      
        clearForm();
    }

    const clearForm = () => {
        setText('');
        setDay('');
        setReminder(false);
    }

  return (
    <form className='add-from'  onSubmit={onSubmit}>
        <div className='form-control'>
            <label htmlFor='add-task'>Task</label>
            <input 
                type="text" 
                value={text}
                onChange={(e) => setText(e.target.value) }
                id="add-task" placeholder='Add task' required />
        </div>

        <div className='form-control'>
            <label htmlFor='add-day-time'>Day & Time</label>
            <input 
                type="text" 
                value={day}
                onChange={(e) => setDay(e.target.value) } 
                id="add-day-time" placeholder='Add day & time' required/>
        </div>

        <div className='form-control form-control-check'>
            <label htmlFor='set-reminder'>Reminder</label>
            <input 
                type="checkbox" 
                value={reminder}
                checked={reminder}
                onChange={(e) => setReminder(e.currentTarget.checked) } 
                id="set-reminder" />
        </div>

        <input type="submit" className='btn btn-block' value="Save Task" />
    </form>
  )
}

export default AddTask