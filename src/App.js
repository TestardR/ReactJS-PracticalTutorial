import React, { Component } from 'react';

import './App.css';
import FetchRandomUser from './components/FetchRandomUser';

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
        <FetchRandomUser />
      </div>
    );
  }
}

export default App;
