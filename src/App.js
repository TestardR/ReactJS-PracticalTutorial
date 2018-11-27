import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Body = props => {
  return (
    <div>
      <div>{props.title}</div>
      <div>{props.text}</div>
      <div>{props.myFunc(1, 2)}</div>
    </div>
  );
};

class Header extends Component {
  render() {
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <div>{this.props.title}</div>
        <div>{JSON.stringify(this.props.Obj)}</div>
        <div>{this.props.Obj.a}</div>
        <div>{this.props.myArr[0]}</div>
        <div>{this.props.myFunc(1, 9)}</div>
      </div>
    );
  }
}

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
      </div>
    );
  }
}

export default App;
