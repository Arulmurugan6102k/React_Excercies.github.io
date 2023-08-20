// UserProfile.js
import React from 'react';
import UserHeader from './UserHeader';
import UserDetails from './UserDetails';

function UserProfile({ user }) {
  return (
    <div className="user-profile">
      <UserHeader name={user.name} />
      <UserDetails age={user.age} address={user.address} />
    </div>
  );
}

export default UserProfile;
