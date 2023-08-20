import React from 'react';
import ChildComponent from './ChildComponentDP';

function ParentComponent() {
  return (
    <div>
      <ChildComponent />
      <ChildComponent message="Hello from Parent" />
    </div>
  );
}

export default ParentComponent;
