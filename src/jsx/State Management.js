import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const handleIncrement = () => {
    setCounter(counter + 1); 
  };

  return (
    <div>
      <p>Current Count: {counter}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default Counter;
