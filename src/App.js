import React, { Component } from 'react';

import Body, { Body2 } from './components/Body';

import './App.css';
import Header from './components/Header';

class App extends Component {
  add(a, b) {
    return a + b;
  }
  render() {
    return (
      <div className="App">
        <Header
          title="Hello from App"
          num={5}
          Obj={{
            a: 5,
            b: 6
          }}
          myArr={[1, 2, 3]}
          myFunc={this.add}
        />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Body title="Shake your body" text="you are great" myFunc={this.add} />
        <Body2 />
      </div>
    );
  }
}

export default App;
