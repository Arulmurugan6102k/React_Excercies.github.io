import React from 'react';
import ChildComponent from './ChildComponentPFP';

const ParentComponentPFP = () => {

  const handleButtonClick = () => {
    console.log("Button clicked in parent!");
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent handleClick={handleButtonClick} />
    </div>
  );
};

export default ParentComponentPFP;
