import React from 'react';

const CrCard = ({ title, content, isHighlighted }) => {
  const cardStyle = {
    backgroundColor: isHighlighted ? 'yellow' : 'white',
    border: '1px solid #ccc',
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '10px',
  };

  return (
    <div style={cardStyle}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default CrCard;
