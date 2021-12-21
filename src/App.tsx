import { getDiffieHellman } from "crypto";
import React, { useState } from "react";
import "./App.css";

interface Todo {
  id: number;
  text: string;
  isDone: boolean;
}

interface NewTodoProp {
  addNewToDo: (todo: string) => void;
}

const NewTodo = (prop: NewTodoProp): JSX.Element => {
  const [state, setState] = useState("");
  const submitHandle = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    prop.addNewToDo(state);
    setState("");
  };
  return (
    <form action="#" onSubmit={submitHandle}>
      <input
        type="text"
        name="newTodo"
        id="newTodo"
        placeholder="enter todo text here"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <button type="submit">Add ToDo</button>
    </form>
  );
};

interface ListTodoProps {
  list: Array<Todo>;
}
const ListTodo = ({ list }: ListTodoProps) => {
  return (
    <ul>
      {list.map((item: Todo) => (
        <li key={item.id}>
          <span>{item.text}</span>
        </li>
      ))}
    </ul>
  );
};

function App() {
  const [state, setState] = useState<Todo[]>([]);
  const getId = () => {
    return Date.now();
  };
  const addNewToDoHandler = (todo: string) => {
    const newTodo: Todo = {
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
