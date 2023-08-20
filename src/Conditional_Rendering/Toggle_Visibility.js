import React, { useState } from 'react';

function ToggleVisibility() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide Content' : 'Show Content'}
      </button>
      {isVisible && <p>This is the content you can toggle.</p>}
    </div>
  );
}

export default ToggleVisibility;
