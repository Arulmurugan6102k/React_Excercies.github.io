import React from 'react';

const ConditionalTodoList = () => {
  const todos = [
    { id: 1, text: 'Buy groceries', completed: false },
    { id: 2, text: 'Read a book', completed: true },
    { id: 3, text: 'Go for a run', completed: false },
  ];

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            {todo.completed ? <span> ✅</span> : <span> ❌</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConditionalTodoList;
