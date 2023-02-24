import logo from './logo.svg';
import './App.css';
import { Titulo } from './Titulo';
import { Formulario } from './Titulo';


function App() {
  return (
    <>
    <div className="App">
    <Titulo></Titulo>
    <Formulario></Formulario>
    
     {/*  <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
    </>
  );
}

export default App;
