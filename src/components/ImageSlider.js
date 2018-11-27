import React, { Component } from 'react';

class ImageSlider extends Component {
  state = {
    images: [
      ' https://images.unsplash.com/photo-1543206759-a1542d26dffc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1e27c6bc8cac06c58e7167dd1b30a320&auto=format&fit=crop&w=675&q=80',
      'https://images.unsplash.com/photo-1543213714-b30944519b38?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7367a28b70fbe10bf44bdd183779f2cb&auto=format&fit=crop&w=634&q=80',
      'https://images.unsplash.com/photo-1543251761-043e5e80c4ca?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=20424f3d449c9c49c945aab5340530bd&auto=format&fit=crop&w=634&q=80',
      'https://images.unsplash.com/photo-1543246164-d5cf2efd9848?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a416bcf71b0900dfb7c442fa67c439d3&auto=format&fit=crop&w=500&q=60'
    ],
    idx: 0
  };

  // shallow rendering, one level deep
  handleNext = () => {
    this.setState({
      idx: this.state.idx + 1
    });
  };

  // asynchronous, use a callback to see where the state is at precisely
  handlePrev = () => {
    this.setState(
      {
        idx: this.state.idx - 1
      },
      () => {
        console.log(this.state);
      }
    );
  };

  render() {
    return (
      <div>
        <div>
          <img
            style={{ width: 150, height: 150 }}
            src={this.state.images[this.state.idx]}
          />
          <button onClick={this.handleNext}>next</button>
          <button onClick={this.handlePrev}>next</button>
        </div>
      </div>
    );
  }
}

export default ImageSlider;
