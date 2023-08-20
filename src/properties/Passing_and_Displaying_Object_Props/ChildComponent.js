import React from 'react';

const ChildComponent = (props) => {
  const { user } = props;

  return (
    <div>
      <h2>User Details:</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Occupation: {user.occupation}</p>
    </div>
  );
};

export default ChildComponent;
