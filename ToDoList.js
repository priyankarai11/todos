import React, { useState } from 'react';
import Todo from './ToDo';
import Checkbox from './Checkbox';

function ToDoList({ list, onChangeBox }) {
  return (
    <div>
      {list.map((val) => (
        <li
          key={val.id}
          style={{ textDecoration: val.completed ? 'line-through' : null }}
        >
          <Checkbox
            onChange={(e) => onChangeBox(e, val)}
            defaultChecked={val.done}
          />{' '}
          {val.name}
        </li>
      ))}
    </div>
  );
}

export default ToDoList;
