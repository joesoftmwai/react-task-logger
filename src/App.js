import Header from './components/header/Header';
import './App.css';
import Tasks from './components/tasks/Tasks';
import { useState } from 'react';

function App() {

  let name = 'Joesoft';

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
  );

  const deleteTask = (id) => {
    console.log('del', id);
    setTasks(tasks.filter(task => task.id !== id))
  } 

  return (
    <div className="container">
      <Header title={'mwai'} />
      
      <Tasks tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
