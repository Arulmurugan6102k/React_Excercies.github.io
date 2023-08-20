import React from 'react';
import Button from './Button';

const Navbar = () => {
  const handleButtonClick = (buttonName) => {
    alert(`Clicked ${buttonName} button`);
  };

  return (
    <div className="navbar">
      <Button label="Home" onClick={() => handleButtonClick("Home")} />
      <Button label="About" onClick={() => handleButtonClick("About")} />
      <Button label="Services" onClick={() => handleButtonClick("Services")} />
      <Button label="Contact" onClick={() => handleButtonClick("Contact")} />
    </div>
  );
};

export default Navbar;
