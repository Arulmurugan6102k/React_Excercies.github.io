import React from 'react';

function ChildComponent(props) {
  const { isLoggedIn } = props;

  return (
    <div>
      {isLoggedIn ? <p>Welcome, user!</p> : <p>Please log in to continue.</p>}
    </div>
  );
}

export default ChildComponent;
