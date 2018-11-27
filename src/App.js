import React, { Component } from 'react';

import './App.css';
import ValdidationForm from './components/ValdidationForm';

class App extends Component {
  state = {
    visible: true
  };

  add(a, b) {
    return a + b;
  }
  render() {
    return (
      <div className="App">
        <ValdidationForm />
      </div>
    );
  }
}

export default App;
