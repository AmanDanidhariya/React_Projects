import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const Todo = () => {
  const [enteredValue, setEnteredValue] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "first todo",
      completed: false,
    },
  ]);
  const [editingID, setEditingId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  console.log(enteredValue);
  console.log(editingID);

  const handleChange = (e) => {
    setEnteredValue(e.target.value);
  };
  const handleClick = () => {
    setTodos((prevValues) => {
      const newValue = {
        id: Math.random(),
        text: enteredValue,
        completed: false,
      };
      return [...prevValues, newValue];
    });
    setEnteredValue("");
  };

  const handleToggle = (id) => {
    const updateStatus = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updateStatus);
  };

  const handleDelete = (id) => {
    const deleteTodo = todos.filter((todo) => todo.id !== id);
    setTodos(deleteTodo);
  };
  const handleEdit = (todo) => {
    setEnteredValue(todo.text);
    setEditingId(todo.id);
    setIsEditing(true);
  };
  const handleSave = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === editingID ? { ...todo, text: enteredValue } : todo
      )
    );
    setIsEditing(false);
    setEnteredValue("");
    setEditingId(null);
  };

  return (
    <div>
      <TodoInput
        onChange={handleChange}
        enteredValue={enteredValue}
        onClick={handleClick}
        isEditing={isEditing}
        onSave={handleSave}
      />
      <TodoList
        todos={todos}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
        handleEdit={handleEdit}
      />
    </div>
  );
};

export default Todo;
