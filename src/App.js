import React, { Component } from 'react';

import './App.css';
import FetchRandomUsers from './components/FetchRandomUsers';

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
        <FetchRandomUsers />
      </div>
    );
  }
}

export default App;
