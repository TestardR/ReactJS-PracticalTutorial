import logo from '../logo.svg';

import React, { Component } from 'react';

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

export default Header;