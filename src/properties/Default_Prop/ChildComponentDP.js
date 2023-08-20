import React from 'react';

function ChildComponent(props) {
  const { message } = props;
  return <div>{message}</div>;
}

ChildComponent.defaultProps = {
  message: 'Default Message'
};

export default ChildComponent;
