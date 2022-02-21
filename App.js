import React from 'react';
import { useRef ,useState} from 'react';
import ToDoList from './ToDoList';
import { uid } from 'uid';
import List from './ToDoList'

function App() {
  const [toDos, setToDos]=useState([{name:"Todo1", id: "1",completed:false},{name:"Todo2", id:"2",completed:false},{name:"Todo3", id:"3",completed:false}])
  const conRef=useRef();
  const submit=()=>
  {
    let todo={name:conRef.current.value, id:uid(), completed:false};
    let newTodos=[...toDos,todo]
    setToDos(
      newTodos
    )
  }
  
 const onChangeBox = item => {
    this.setState(({ todos }) => ({
      todos: todos.map(el =>
        el.id === item.id ? { ...el, completed: !el.completed } : el
      )
    }));
  };

  return (
    <>
    <input type="text" ref={conRef}  />
    <button onClick={submit} >Add</button>

     <ToDoList
          list={toDos}
          onChangeBox={onChangeBox}
        />

    </>
  );
}

export default App;