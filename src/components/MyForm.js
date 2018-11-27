import React, { Component } from 'react';

export default class MyForm extends Component {
  state = {
    name: 'Romain',
    favoritePet: 'Marmotte',
    rememberMe: true,
    options: 'Miss.'
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  handleChangeFavoritePet = event => {
    this.setState({ favoritePet: event.target.value });
  };

  handleCheckBox = event => {
    this.setState({ rememberMe: event.target.checked });
  };

  handleOptions = event => {
    this.setState({ options: event.target.value });
  };

  handleSubmit = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <input value={this.state.name} onChange={this.handleChange} />
        <textarea
          value={this.state.favoritePet}
          onChange={this.handleChangeFavoritePet}
        />
        <input
          type="checkbox"
          checked={this.state.rememberMe}
          onChange={this.handleCheckBox}
        />
        <div>
          <select value={this.state.options} onChange={this.handleOptions}>
            <option>Mr.</option>
            <option>Miss.</option>
            <option>Ms.</option>
            <option>Mrs.</option>
          </select>
        </div>
        <button onClick={this.handleSubmit}>submit</button>
      </div>
    );
  }
}
