import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyButton from "./components/MyButton"
import mockData from './dummy.json';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload {mockData[0].email}.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyButton />
        <MyButton />
        <MyButton />
        <h1>hello world</h1>
      </header>
    </div>
  );
}

export default App;
