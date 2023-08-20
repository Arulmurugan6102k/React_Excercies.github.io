import React from 'react';
import './App.css';
import JsxFundamentals from './jsx/JSX';
import ColorChanger from './Styling_components/inline_style';
import External from './Styling_components/external_style';
import CssModule from './Styling_components/CSS Module/css_module';
import Button from './Reusable_components/basic_component';
import Card from './Reusable_components/passing_property';
import Navbar from './Reusable_components/Component Composition/Navbar';
import Counter from './Reusable_components/State_and_Events';
import CrCard from './Reusable_components/Conditional Rendering';
import TodoList from './Reusable_components/List_Rendering';
import ParentComponent from './jsx/Component_nesting/parent_component';
import ParentComponentComp from './properties/Using_Props_ in_Child-Component/ParentComponent';
import ParentComponentDP from './properties/Default_Prop/ParentComponentDP';
import ParentComponentPFP from './properties/Passing_Function_props/ParentComponentPFP';
import ParentComponentSLU from './properties/State_Lift_Up/ParentComponentSLU';
import ParentComponentCRP from './properties/Conditional_Rendering_with_Props/ParentComponentCRP'
import ParentComponentMPM from './properties/Mapping_Props_to_Multiple_Child_Components/ParentComponentMPM';
import UserProfile from './properties/Nested_Components_with_Props/UserProfile';
import ConditionalGreet from './Conditional_Rendering/Basic_Conditional_Rendering';
import LoginForm from './Conditional_Rendering/User Authentication';
import ToggleVisibility from './Conditional_Rendering/Toggle_Visibility';
import ConditionalTodoList from './Conditional_Rendering/List_Rendering';
import HoverButton from './Conditional_Rendering/Conditional_Styling'
import DropdownMenu from './Conditional_Rendering/Dropdown_Menu';
import LoadingExample from './Conditional_Rendering/Loading_State';


function App() {

  const user = {
    name: 'John Doe',
    age: 25,
    address: '123 Main St',
  };

  const handleClick = () => {
    console.log('Button clicked!');
  };

  const tasks = ['Run', 'Cooking', 'Read', 'swim'];

  return (
    <div className="App-header">
      
      <div className="ex-container">
      <h1>JSX</h1>
        <JsxFundamentals/>
      </div>
      
      <div className="ex-container">
      <h1>Styling Components</h1>
        <ColorChanger/>

      <h2>2. Styling Components</h2>
        <External/>

      <h2>3. CSS Modules</h2>
        <CssModule/>

      </div>

      <div className='ex-container'>
        <h1>Reusable Components</h1>

      <h2>1. Create a Basic Components</h2>
      <h3>Button Component Example</h3>
      <Button text="Click Me" onClick={handleClick} />

      <h2>2. Passing Properties</h2>
      <Card title="Welcome" content="This is a simple card component." />

      <h2>3. Component Composition</h2>
      <Navbar />

      <h2>4. State_and_Events</h2>
      <Counter />

      <h2>5. Conditional Rendering</h2>
      <CrCard title="Regular Card" content="This is a regular card." />
      <CrCard title="Highlighted Card" content="This card is highlighted." isHighlighted />

      <h2>6. List Rendering</h2>
      <TodoList tasks={tasks} />      
      </div>

      <div className='ex-container'>
      <h1 >Props</h1>
      <h2>1. Passing and Displaying Object Props</h2>
      <ParentComponent />

      <h2>2. Using Props in Child Component</h2>
      <ParentComponentComp />

      <h2>3. Default Props</h2>
      <ParentComponentDP />

      <h2>4. Passing Function Props</h2>
      <ParentComponentPFP />

      <h2>5. State Lift-Up</h2>
      <ParentComponentSLU />

      <h2>6. Conditional Rendering with Props</h2>
      <ParentComponentCRP />

      <h2>7. Mapping Props to Multiple Child Components </h2>
      <ParentComponentMPM />

      <h2>8. Nested Components with Props </h2>
      <UserProfile user={user} />
      </div>

      <div className='ex-container'>
      <h1>Conditionl Rendering</h1>  

      <h2>1. Basic Conditional Rendering </h2>
      <ConditionalGreet />

      <h2>2. User Authentication </h2>
      <LoginForm />

      <h2>3. Toggle Visibility </h2>
      <ToggleVisibility />

      <h2>4. List Rendering </h2>
      <ConditionalTodoList />

      <h2>5. Conditional Styling </h2>
      <HoverButton />

      <h2>6. Dropdown Menu </h2>
      <DropdownMenu />

      <h2>6. Loading State </h2>
      <LoadingExample />




      </div>

      </div>
  );
}

export default App;
