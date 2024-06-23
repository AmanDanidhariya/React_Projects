import React from "react";
import classes from "./todo.module.css";

const TodoList = ({ todos, handleDelete, handleToggle, handleEdit }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <span className={todo.completed ? classes.line__through : ""}>
              {todo.text}
            </span>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggle(todo.id)}
            />
            <button onClick={() => handleDelete(todo.id)}>delete</button>
            <button onClick={() => handleEdit(todo)}>Edit</button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
