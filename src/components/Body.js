import React, { Component } from 'react';

const Body = props => {
  return (
    <div>
      <div>{props.title}</div>
      <div>{props.text}</div>
      <div>{props.myFunc(1, 2)}</div>
    </div>
  );
};

export const Body2 = () => (
  <div>
    <div>Hello from body2</div>
  </div>
);

export default Body;
