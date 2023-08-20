import React from "react";
import ParentComponent from "./Component_nesting/parent_component";
import UserProfile from "./Props Passing/UserProfile";
import ConditionalRendering from "./conditional_rendering";
import ListRendering from "./list_rendering";
import EventHandling from "./event_handling";
import Counter from './State Management';

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

const JsxFundamentals = () => {
  return (
    <div className="ex-main">
      <div>
        <h2>1. Basic Element Rendering</h2>
        <p>Hello I am Arul</p>
      </div>

      <div>
        <h2>2. Component Nesting</h2>
        <ParentComponent/>
      </div>

      <div>
        <h2>3. Props Passing</h2>
        <UserProfile />
      </div>

      <div>
        <h2>4. Conditional Rendering</h2>
        <ConditionalRendering />
      </div>

      <div>
        <h2>5. List Rendering</h2>
        <ListRendering items={items} />
      </div>

      <div>
        <h2>6. Event Handling</h2>
        <EventHandling items={items} />
      </div>

      <div>
        <h2>7. State Management</h2>
        <Counter />
      </div>

     

    </div>
  );
};
export default JsxFundamentals;
