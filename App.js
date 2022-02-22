import React, { useEffect } from "react";
import { useRef, useState } from "react";
import ToDoList from "./ToDoList";
import { uid } from "uid";

const getLocalItems = () => {
  let list = localStorage.getItem("lists");
  console.log(list);
  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};

const items = [
  { name: "Todo1", id: "1", completed: false },
  { name: "Todo2", id: "2", completed: false },
  { name: "Todo3", id: "3", completed: false },
];

function App() {
  const [toDos, setToDos] = useState(getLocalItems);

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
    console.log(id);
    const newTodos = [...toDos];
    newTodos.splice(id, 1);
    setToDos(newTodos);
  };

  const clear = () => {
    setToDos([]);
  };

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(toDos));
  }, [toDos]);

  return (
    <span>
      <input type="text" ref={conRef} name="name" />
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
