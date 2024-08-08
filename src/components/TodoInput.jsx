import React, { useState } from 'react';

const TodoInput = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      addTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <>
    <h1>
      TodoInput
    </h1>
    <p class="ridge">
    <div className="todo-input">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="New Todo"/>
    </div>
    <div className='todo-input'>
      <button onClick={handleAddTodo}>Add new task</button>
    </div>
    </p>
    </>
  );
};

export default TodoInput;
