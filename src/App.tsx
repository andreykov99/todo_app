import { ITodo } from "./types";
import { useState } from "react";
import NewTodo from "./components/newtodo";
import ListTodo from "./components/listtodo";
import { Container } from "react-bootstrap";
import "./App.css";

function App() {
  const [state, setState] = useState<Array<ITodo> | []>([]);
  const getId = () => {
    return Date.now();
  };
  const addNewToDoHandler = (todo: string) => {
    const newTodo: ITodo = {
      todo: { text: todo, isDone: false },
    };
    setState((prev) => [...prev, newTodo]);
  };
  const getListTodo = () => [...state];
  return (
    <Container className="p-3">
      <Container className="p-5 mb-4 bg-light rounded-3">
        <NewTodo addNewToDo={addNewToDoHandler} />
      </Container>
      <ListTodo list={getListTodo()} />
    </Container>
  );
}

export default App;
