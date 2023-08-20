import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const user = {
    name: 'John Doe',
    age: 25,
    occupation: 'Web Developer',
  };

  return (
    <div>
      <ChildComponent user={user} />
    </div>
  );
};

export default ParentComponent;
