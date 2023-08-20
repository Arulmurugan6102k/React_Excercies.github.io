
import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponentComp = () => {
  const greeting = "Hello, React Learners!";
  const showSubtitle = true;

  return (
    <div>
      <ChildComponent greeting={greeting} showSubtitle={showSubtitle} />
    </div>
  );
};

export default ParentComponentComp;
