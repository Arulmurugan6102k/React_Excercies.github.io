import React from 'react';

const ChildComponent = (props) => {
  return (
    <div>
      <p>Child Component</p>
      <button onClick={props.handleClick}>Click me</button>
    </div>
  );
};

export default ChildComponent;
