import React from "react";

function Todo({ todo, clear }) {
  return (
    <div>
      {`
        ${todo.id} - ${todo.name}`}
    </div>
  );
}

export default Todo;
