import React from 'react';
import UserInfo from './UserInfo';

const UserProfile = () => {
  const user = {
    name: 'John Doe',
    age: 25,
    location: 'New York',
  };

  return (
    <div>
      <h3>User Profile</h3>
      <UserInfo user={user} />
    </div>
  );
};

export default UserProfile;
