import React, { Component } from 'react';

import Body, { Body2 } from './components/Body';

import './App.css';
import Header from './components/Header';
import Counter from './components/Counter';
import ImageSlider from './components/ImageSlider';
import MyForm from './components/MyForm';

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

    // const buttonText = this.state.visible ? 'hide' : 'show';
    // const slider = this.state.visible ? (
    //   <ImageSlider />
    // ) : (
    //   <div>
    //     <Counter initialCount={15} />
    //   </div>
    // );

    return (
      <div className="App">
        <MyForm />
      </div>
    );
  }
}

export default App;
