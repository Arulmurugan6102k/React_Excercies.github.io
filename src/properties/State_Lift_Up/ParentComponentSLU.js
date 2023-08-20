import React, { useState } from 'react';
import ChildComponent from './ChildComponentSLU';

function ParentComponentSLU() {
  const [count, setCount] = useState(0);

  const handleCountChange = (newCount) => {
    setCount(newCount);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Count: {count}</p>
      <ChildComponent count={count} onCountChange={handleCountChange} />
    </div>
  );
}

export default ParentComponentSLU;
