import React from 'react';

function ListRendering(props) {
  const { items } = props;

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default ListRendering;
