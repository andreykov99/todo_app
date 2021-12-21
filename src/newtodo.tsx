import React, { useState } from "react";
interface INewTodoProp {
  addNewToDo: (todo: string) => void;
}

const NewTodo = ({ addNewToDo }: INewTodoProp): JSX.Element => {
  const [state, setState] = useState("");
  const submitHandle = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    addNewToDo(state);
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
export default NewTodo;
