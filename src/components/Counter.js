import React, { Component } from 'react';

export default class Counter extends Component {
  // if you are only defining a state, you dont have to use constructor and simply define it as follow:
  //   state = {
  //     count: 0
  //   };

  // if you want to use dynamic values, use the constructor
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleIncrease = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  componentWillUnmount = () => {
    console.log('unmounting');
  };

  componentDidMount = () => {
    console.log('mounting');
  };

  handleDecrease = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div>
        <div>count: {this.state.count}</div>
        <button onClick={this.handleIncrease}>increment</button>
        <button onClick={this.handleDecrease}>decrement</button>
      </div>
    );
  }
}
