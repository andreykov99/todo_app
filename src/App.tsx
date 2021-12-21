import { ITodo } from "./types";
import { useState } from "react";
import NewTodo from "./newtodo";
import ListTodo from "./listtodo";
import "./App.css";

function App() {
  const [state, setState] = useState<ITodo[]>([]);
  const getId = () => {
    return Date.now();
  };
  const addNewToDoHandler = (todo: string) => {
    const newTodo: ITodo = {
      text: todo,
      id: getId(),
      isDone: false,
    };
    setState((prev) => [...prev, newTodo]);
  };
  return (
    <div className="container">
      <NewTodo addNewToDo={addNewToDoHandler} />
      <ListTodo list={state} />
    </div>
  );
}

export default App;
