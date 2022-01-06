import { ITodo } from "./types";
import { useState } from "react";
import { NewTodo, ListTodo } from "./components";
import { createTodo } from "./services/todo";
import { Container } from "react-bootstrap";
import "./App.css";

function App() {
  const [state, setState] = useState<Array<ITodo> | []>([]);
  const addNewToDoHandler = (todo: string) => {
    const newTodo: ITodo = {
      todo: { text: todo, isDone: false },
    };
    createTodo(newTodo);
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
