import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import NumberButton from './components/NumberButton';
import DisplayButton from './components/DisplayButton';
import GitHubCardApp from './components/GitHubCardApp';
import StarMatch from './components/StarMatch';

function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = (value) => setCounter(counter + value);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="App-header">
      <Hello />
      <NumberButton onClickFunction={incrementCounter} increment={1} />
      <NumberButton onClickFunction={incrementCounter} increment={5} />
      <NumberButton onClickFunction={incrementCounter} increment={10} />
      <NumberButton onClickFunction={incrementCounter} increment={100} />
      <DisplayButton message={counter}/>
      </div>
      <div className="App-header">
      <GitHubCardApp />
      </div>
      <div className="App-header">
      <StarMatch />
      </div>
    </div>
  );
}

export default App;
