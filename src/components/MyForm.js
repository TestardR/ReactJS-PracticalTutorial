import React, { Component } from 'react';

export default class MyForm extends Component {
  state = {
    name: 'Romain',
    favoritePet: 'Marmotte',
    rememberMe: true,
    options: 'Miss.'
  };

  handleChange = event => {
    const isCheckbox = event.target.type === 'checkbox';
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <textarea
            name="favoritePet"
            value={this.state.favoritePet}
            onChange={this.handleChange}
          />
          <input
            name="rememberMe"
            type="checkbox"
            checked={this.state.rememberMe}
            onChange={this.handleChange}
          />
          <div>
            <select
              name="options"
              value={this.state.options}
              onChange={this.handleChange}
            >
              <option>Mr.</option>
              <option>Miss.</option>
              <option>Ms.</option>
              <option>Mrs.</option>
            </select>
          </div>
          <button name="submit" type="submit">
            submit
          </button>
        </div>
      </form>
    );
  }
}
