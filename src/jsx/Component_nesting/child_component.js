import React from "react";
const ChildComponent = (props) => {
  return (
    <div>
      <h3 className="box">Name: {props.name}</h3>
      <p className="box">Age: {props.age}</p>
      <p className="box">Location: {props.location}</p>
    </div>
  );
};
export default ChildComponent;
