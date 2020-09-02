import React from 'react';
import { RecoilRoot } from 'recoil';
import './App.css';
import { Cp1 } from './Cp1';
import { Cp2 } from './Cp2';
import logo from './logo.svg';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <header className="App-header">
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
          <Cp1 />
          <Cp2 />
        </header>
      </div>
    </RecoilRoot>
  );
}

export default App;
