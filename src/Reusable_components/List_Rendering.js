import React from 'react';

const TodoList = ({ tasks }) => {
  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
