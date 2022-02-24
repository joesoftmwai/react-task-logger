import Header from './components/header/Header';
import './App.css';

function App() {

  let name = 'Joesoft'

  return (
    <div className="container">
      <Header title={'mwai'} />
      <h1>You will never walk alone</h1>
      <h2>{name}</h2>
    </div>
  );
}

export default App;
