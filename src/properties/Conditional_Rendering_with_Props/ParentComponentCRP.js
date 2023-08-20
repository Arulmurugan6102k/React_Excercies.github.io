import React from 'react';
import ChildComponent from './ChildComponentCRP';

function ParentComponentCRP() {
  const isLoggedIn = true; // or false, depending on the user's login status

  return (
    <div>
      <ChildComponent isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default ParentComponentCRP;
