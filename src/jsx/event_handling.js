import React, { useState } from 'react';

function EventHandling() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    alert('Button was clicked!');
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      {clicked && <p>Button was clicked!</p>}
    </div>
  );
}

export default EventHandling;
