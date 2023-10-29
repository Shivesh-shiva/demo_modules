import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to DevOps Insiders!</h1>
        <p>
          This is a platform where we share insights and latest trends in DevOps.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more about DevOps
        </a>
      </header>
    </div>
  );
}

export default App;
