import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Body = () => {
  return <div>Learning react is great fun !!!</div>;
};

class Header extends Component {
  render() {
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Body />
      </div>
    );
  }
}

export default App;
