import React, { useState } from 'react';

const DropdownMenu = () => {
  const [selectedValue, setSelectedValue] = useState('option1');
  
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <h2>Dropdown Menu Example</h2>
      <select value={selectedValue} onChange={handleSelectChange}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <div>
        {selectedValue === 'option1' && <p>Content for Option 1</p>}
        {selectedValue === 'option2' && <p>Content for Option 2</p>}
        {selectedValue === 'option3' && <p>Content for Option 3</p>}
      </div>
    </div>
  );
};

export default DropdownMenu;
