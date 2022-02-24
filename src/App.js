import Header from './components/header/Header';
import './App.css';
import Tasks from './components/tasks/Tasks';
import { useState } from 'react';
import { FaCannabis } from 'react-icons/fa'
import AddTask from './components/addtask/AddTask';

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
            reminder: false
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

  const toggleReminder = (id) => {
    console.log('reminder', id);
    setTasks(tasks.map((task) =>
     task.id === id ? { ...task, reminder: !task.reminder} : task ))
  }

  const addTask = (task) => {
    console.log('task', task);
   
  }

  return (
    <div className="container">
      <Header title={'mwai'} />
      
      { tasks.length ?  

        <Tasks tasks={tasks} deleteTask={deleteTask} toggleReminder={toggleReminder}  /> :

        <div style={{color: 'red', textAlign:'center'}} >
          <i> <FaCannabis/> No tasks found</i>
        </div>

      }

      <AddTask  addTask = {addTask} />

    </div>
  );
}

export default App;
