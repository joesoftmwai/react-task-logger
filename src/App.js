import Header from './components/header/Header';
import './App.css';
import Tasks from './components/tasks/Tasks';

function App() {

  let name = 'Joesoft'

  return (
    <div className="container">
      <Header title={'mwai'} />
      
      <Tasks />
    </div>
  );
}

export default App;
