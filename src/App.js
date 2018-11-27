import React, { Component } from 'react';

import Body, { Body2 } from './components/Body';

import './App.css';
import Header from './components/Header';
import Counter from './components/Counter';
import ImageSlider from './components/ImageSlider';

class App extends Component {
  state = {
    visible: true
  };

  add(a, b) {
    return a + b;
  }
  render() {
    // use if statement is you want to totally change the screen
    // if (!this.state.visible) {
    //   return <div>display nothing</div>;
    // }

    const buttonText = this.state.visible ? 'hide' : 'show';
    const slider = this.state.visible ? (
      <ImageSlider />
    ) : (
      <div>
        <Counter initialCount={15} />
      </div>
    );

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
        {slider}
        <button
          onClick={() => {
            this.setState({ visible: !this.state.visible });
          }}
        >
          {buttonText}
        </button>
      </div>
    );
  }
}

export default App;
