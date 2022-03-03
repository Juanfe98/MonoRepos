import React from 'react';
import logo from './logo.svg';
import './App.css';
import { QueryPayload } from 'simple-node-server/server';
//Import subModule
import DarkMode from './react-dark-mode/src/DarkMode';

function App() {
  
  const handleClick = () => {
    fetch('http://localhost:3001/data')
    .then(response => response.json())
    .then((data: QueryPayload) => {
      console.log('this is data ->',data.foo);
    })
  }

  return (
    <div className="App">
      <DarkMode />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => handleClick()}>Fetch button</button>
      </header>
    </div>
  );
}

export default App;
