import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, done: false }]);
  };

  const updateTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleDone = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const deleteDoneTodos = () => {
    setTodos(todos.filter((todo) => !todo.done));
  };

  const deleteAllTodos = () => {
    setTodos([]);
  };

  return (
    <div className="app">
      <div className="todo-frame">
        <TodoInput addTodo={addTodo} />
        <TodoList
          todos={todos}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
          toggleDone={toggleDone}
          deleteDoneTodos={deleteDoneTodos}
          deleteAllTodos={deleteAllTodos}
        />
      </div>
    </div>
  );
};

export default App;
