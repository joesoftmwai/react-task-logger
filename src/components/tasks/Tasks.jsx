import { useState } from 'react'

const Tasks = () => {

    const [tasks, setTasks] = useState(
        [
            {
                id: 1,
                text: 'Doctors Appointment',
                date: 'Feb 5th @ 2:30pm',
                reminder: true
            },
            {
                id: 2,
                text: 'Arsenal vs wolves matdh day',
                date: 'Feb 24th @ 10:45pm',
                reminder: true
            },
            {
                id: 3,
                text: 'New gig from kelvin',
                date: 'Feb 26th @ 10:30pm',
                reminder: true
            }
        ]
    )

  return (
    <div>
        {
         tasks.map(_task => (
            <h5 key={task.id}> {_task.text} </h5> 
            )) 
        }
    </div>
  )
}

export default Tasks