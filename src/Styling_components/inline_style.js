import React, { useState } from 'react';

const ColorChanger = () => {
  const colors = ['#FF5733', '#33FF57', '#5733FF', '#33A2FF'];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const changeColor = () => {
    setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  const currentColor = colors[currentColorIndex];

  return (

    <div>
        <h2>1. Inline style</h2>
        <div
    
    style={{
      backgroundColor: currentColor,
      width: '200px',
      height: '200px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  > 
    
    <button onClick={changeColor}>Change Color</button>
  </div>

    </div>
    
  );
};

export default ColorChanger;
