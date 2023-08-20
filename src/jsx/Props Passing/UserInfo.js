import React from 'react';

const UserInfo = (props) => {
  const { name, age, location } = props.user;

  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  );
};

export default UserInfo;
