import React from 'react';
import { Logo as logo } from 'Assets';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Solution design and development for your business and startup.
        </p>
        <span>
          <a
            className="App-link"
            href="https://wavelop.com/en/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit our site
          </a>, 
          <a
            className="App-link"
            href="https://wavelop.com/en/story/"
            target="_blank"
            rel="noopener noreferrer"
          >
             blog
          </a> or 
          <a
            className="App-link"
            href="https://github.com/Wavelop"
            target="_blank"
            rel="noopener noreferrer"
          >
             Github
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
