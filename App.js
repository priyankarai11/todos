import React from "react";
import { useRef, useState } from "react";
import ToDoList from "./ToDoList";
import { uid } from "uid";



function App() {
  const [toDos, setToDos] = useState([
    { name: "Todo1", id: "1", completed: false },
    { name: "Todo2", id: "2", completed: false },
    { name: "Todo3", id: "3", completed: false },
  ]);


  const conRef = useRef();
  const handleSubmit = () => {
    let todo = { name: conRef.current.value, id: uid(), completed: false };
    let newTodos = [...toDos, todo];
    setToDos(newTodos);
    conRef.current.value = null;
  };



  const onChangeBox = (e, item) => {
    const newCheckboxValue = e.target.checked;

    const newTodo = toDos.map((element) =>
      element.id === item.id
        ? { ...element, completed: newCheckboxValue }
        : element
    );

    setToDos(newTodo);
  };



  const todoDel = (id) => {
    const newTodos = [...toDos];
    newTodos.splice(id, 1);
    setToDos(newTodos);
  };



  const handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.ref,
    });
  };



  const clear = () => {
    setToDos([]);
  };



  return (
    <span>
      <input type="text" ref={conRef} name="name" onChange={handleChange} />
      <button onClick={handleSubmit}>Add</button>

      <ToDoList
        list={toDos}
        onChangeBox={onChangeBox}
        todoDel={todoDel}
        clear={clear}
      />
      
    </span>
  );
}



export default App;
