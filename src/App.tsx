import { ITodo } from "./types";
import { useState } from "react";
import NewTodo from "./newtodo";
import ListTodo from "./listtodo";
import "./App.css";
import Container from "react-bootstrap/Container";

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
    <Container className="p-3">
      <Container className="p-5 mb-4 bg-light rounded-3">
        <NewTodo addNewToDo={addNewToDoHandler} />
      </Container>
      <ListTodo list={state} />
    </Container>
  );
}

export default App;
