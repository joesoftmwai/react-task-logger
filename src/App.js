import Header from './components/header/Header';
import './App.css';
import Tasks from './components/tasks/Tasks';
import { useEffect, useState } from 'react';
import { FaCannabis } from 'react-icons/fa'
import AddTask from './components/addtask/AddTask';
import Footer from './components/footer/Footer';
import About from './components/about/About';


function App() {

  let name = 'Joesoft';

  const [tasks, setTasks] = useState(
    [
        // {
        //     id: 1,
        //     text: 'Doctors Appointment',
        //     date: 'Feb 5th @ 2:30pm',
        //     reminder: true
        // },
        // {
        //     id: 2,
        //     text: 'Arsenal vs wolves matdh day',
        //     date: 'Feb 24th @ 10:45pm',
        //     reminder: false
        // },
        // {
        //     id: 3,
        //     text: 'New gig from kelvin',
        //     date: 'Feb 26th @ 10:30pm',
        //     reminder: true
        // }
    ]
  );

  const [showAddTask, setAddTask] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();
    console.log(data);
    setTasks(data);
    return data;
  }

  

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`,{ 
      method: 'DELETE'
    })
    console.log('del', id);
    setTasks(tasks.filter(task => task.id !== id  ))
  } 

  const toggleReminder = (id) => {
    console.log('reminder', id);
    setTasks(tasks.map((task) =>
     task.id === id ? { ...task, reminder: !task.reminder} : task ))
  }

  const addTask = async (task) => {
    /** without server */
    //  const id = Math.floor(Math.random() *1000) + 1;
    //  setTasks([ ...tasks, {id, ...task}])
    
    /** with server */
    const res = await fetch(`http://localhost:5000/tasks`,{ 
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(task)
    });

    const data = await res.json();
    setTasks([ ...tasks, data])

   
  }

  return (
    
      <div className="container">

        <Header title={'mwai'} onAdd={() => setAddTask(!showAddTask)} showAdd={showAddTask} />

        { showAddTask && <AddTask  addTask = {addTask} />}
        
        
        { tasks.length ?  

          <Tasks tasks={tasks} deleteTask={deleteTask} toggleReminder={toggleReminder}  /> :

          <div style={{color: 'red', textAlign:'center'}} >
            <i> <FaCannabis/> No tasks found</i>
          </div>

          }
       
        <Footer />

      </div>

      

    
  );
}

export default App;
