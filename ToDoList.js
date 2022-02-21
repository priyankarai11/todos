import React, { useState } from 'react'
import Todo from './ToDo'
import Checkbox from './Checkbox'
import './App.css'

function ToDoList({ list, onChangeBox}) {
  return (
    <div>
     {list.map(val => (
      <li
        key={val.id}
        style={{ textDecoration: val.completed ? "line-through" : null }}
        
      >
        <Checkbox
          onClick={() => onChangeBox(val)}
          defaultChecked={val.done}
        />{" "}
        {val.name}
      </li>
    ))}
    </div>
  )
}

export default ToDoList