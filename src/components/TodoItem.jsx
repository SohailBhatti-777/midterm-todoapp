import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const TodoItem = ({ todo, updateTodo, deleteTodo, toggleDone }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo.text);

  return (
    <ol>
      <li>
        <div className="todo-item">
          {isEditing ? (
            <input
              type="text"
              value={editedTodo}
              onChange={(e) => setEditedTodo(e.target.value)}
            />
          ) : (
            <span
              style={{
                textDecoration: todo.done ? "line-through" : "none",
                color: todo.done ? "red" : "inherit",
              }}
            >
              {todo.text}
            </span>
          )}
          <input
            type="checkbox"
            checked={todo.done}
            onChange={() => toggleDone(todo.id)}
          />
          <FaTrashAlt
            color="red"
            size={15}
            style={{ cursor: "pointer" }}
            onClick={() => deleteTodo(todo.id)}
          />
          <button onClick={() => setIsEditing(!isEditing)}>
            {isEditing ? "Save" : "Edit"}
          </button>
        </div>
      </li>
    </ol>
  );
};

export default TodoItem;
