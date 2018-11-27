import React, { Component } from 'react';

export default class FetchRandomUsers extends Component {
  state = {
    loading: true,
    people: []
  };

  async componentDidMount() {
    const url = 'https://api.randomuser.me/?results=5';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ people: data.results, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.people.length) {
      return <div>didn't get a people</div>;
    }

    const peopleJsx = [];

    // this.state.people.forEach(person => {
    //   peopleJsx.push(
    //     <div key={person.login.uuid}>
    //       <div>{person.name.title}</div>
    //       <div>{person.name.first}</div>
    //       <div>{person.name.last}</div>
    //       <img src={person.picture.large} />
    //     </div>
    //   );
    // });

    return (
      <div>
        {this.state.people.map(person => (
          <div key={person.login.uuid}>
            <div>{person.name.title}</div>
            <div>{person.name.first}</div>
            <div>{person.name.last}</div>
            <img src={person.picture.large} />
          </div>
        ))}
      </div>
    );
  }
}
