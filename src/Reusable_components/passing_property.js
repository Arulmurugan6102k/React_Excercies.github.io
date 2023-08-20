import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
      <p>{props.title}</p>
      <p>{props.content}</p>
    </div>
  );
};

export default Card;
