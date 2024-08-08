import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = ({
  todos,
  updateTodo,
  deleteTodo,
  toggleDone,
  deleteAllTodos,
  deleteDoneTodos,
}) => {
  const [filter, setFilter] = useState('all');

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'done') return todo.done;
    if (filter === 'todo') return !todo.done;
    return true;
  });

  return (
    <>
    <h1>TodoList</h1>
    <div className="todo-list">
      <div className="filter-buttons">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('done')}>Done</button>
        <button onClick={() => setFilter('todo')}>Todo</button>
      </div>
      
      {filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
          toggleDone={toggleDone}
        />
      ))}      
      <div className="todo-actions">
        <button onClick={deleteDoneTodos}>Delete done tasks</button>
        <button onClick={deleteAllTodos}>Delete all tasks</button>
      </div>
    </div>
    </>
  );
};

export default TodoList;
