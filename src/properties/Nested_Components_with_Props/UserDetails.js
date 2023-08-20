import React from 'react';

function UserDetails({ age, address }) {
  return (
    <div className="user-details">
      <p>Age: {age}</p>
      <p>Address: {address}</p>
    </div>
  );
}

export default UserDetails;