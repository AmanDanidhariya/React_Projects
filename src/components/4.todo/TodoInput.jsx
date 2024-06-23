import React from "react";

const TodoInput = ({ onChange, onClick, enteredValue, isEditing , onSave}) => {
  return (
    <div>
      <input type="text" name="todo" value={enteredValue} onChange={onChange} />
      {isEditing?<button onClick={onSave}>Save</button>:<button onClick={onClick}>add Todo</button>}
    </div>
  );
};

export default TodoInput;
