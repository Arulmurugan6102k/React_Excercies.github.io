import React from "react";
import ChildComponent from "./child_component";
const ParentComponent = () => {
  return (
    <div>
      <ChildComponent name="John" age={25} location="New York" />
      <ChildComponent name="Jane" age={30} location="Los Angeles" />
      <ChildComponent name="Alice" age={22} location="Chicago" />
    </div>
  );
};
export default ParentComponent;
