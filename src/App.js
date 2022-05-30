import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <SideBar />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Helo React !!</code>
        </p>
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
