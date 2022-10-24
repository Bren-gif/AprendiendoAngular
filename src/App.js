import logo from './logo.svg';
import './App.css';


function HolaMundo(nombre){
  return nombre;
}

function App() {
  var nombre = "Brenda Ledesma";
  var presentacion = <h2>Hola , soy {nombre}</h2>


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola Bienvenidos a React.
        </p>
        {presentacion}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
