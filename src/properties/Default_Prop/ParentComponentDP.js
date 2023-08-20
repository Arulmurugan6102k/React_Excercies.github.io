import React from 'react';
import ChildComponent from './ChildComponentDP';

function ParentComponent() {
  return (
    <div>
      <ChildComponent /> {/* No message prop provided */}
      <ChildComponent message="Hello from Parent" /> {/* Custom message */}
    </div>
  );
}

export default ParentComponent;
