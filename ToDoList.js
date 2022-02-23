import React from "react";
import Todo from "./ToDo";
import Checkbox from "./Checkbox";

function ToDoList({ list, onChangeBox, todoDel, clear }) {
  return (
    <div>
      <button onClick={() => clear()}>Clear</button>
      {list.map((val) => (
        <table key={val.id}>
          <tbody>
            <tr
              style={{ textDecoration: val.completed ? "line-through" : null }}
            >
              <td>
                <Checkbox
                  onChange={(e) => onChangeBox(e, val)}
                  defaultChecked={val.done}
                />{" "}
              </td>
              <td>
                <Todo key={val.id} todo={val} />
              </td>
              <td>
                <button onClick={() => todoDel(val.id)}>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
}

export default ToDoList;
