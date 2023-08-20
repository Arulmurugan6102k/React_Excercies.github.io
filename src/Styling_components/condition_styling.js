import React from 'react';
import './Button.css';

const Button = ({ variant, children }) => {
  let backgroundColor;

  if (variant === 'primary') {
    backgroundColor = 'blue';
  } else if (variant === 'secondary') {
    backgroundColor = 'gray';
  } else if (variant === 'success') {
    backgroundColor = 'green';
  } else if (variant === 'danger') {
    backgroundColor = 'red';
  }

  const buttonStyle = {
    backgroundColor,
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <button style={buttonStyle} className="custom-button">
      {children}
    </button>
  );
};

export default Button;
