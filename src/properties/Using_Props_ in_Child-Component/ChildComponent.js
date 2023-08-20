import React from 'react';

const ChildComponent = (props) => {
  const { greeting, showSubtitle } = props;

  return (
    <div>
      <h1>{greeting}</h1>
      {showSubtitle && <p>This is a subtitle.</p>}
    </div>
  );
};

export default ChildComponent;
