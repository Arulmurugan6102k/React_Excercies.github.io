import React from 'react';

function ChildComponent({ count, onCountChange }) {
  const incrementCount = () => {
    onCountChange(count + 1);
  };

  const decrementCount = () => {
    onCountChange(count - 1);
  };

  return (
    <div>
      <h2>Child Component</h2>
      <p>Count from Parent: {count}</p>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  );
}

export default ChildComponent;
