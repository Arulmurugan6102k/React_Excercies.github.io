import React from 'react';
import ChildComponent from './ChildComponentMPM';

const ParentComponent = () => {

  const data = [
    { id: 1, name: 'Item 1', description: 'Description for Item 1' },
    { id: 2, name: 'Item 2', description: 'Description for Item 2' },
    { id: 3, name: 'Item 3', description: 'Description for Item 3' }
  ];

  return (
    <div>
      <h1>List of Items</h1>
      {data.map(item => (
        <ChildComponent key={item.id} name={item.name} description={item.description} />
      ))}
    </div>
  );
};

export default ParentComponent;
