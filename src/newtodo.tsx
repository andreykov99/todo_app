import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

interface INewTodoProp {
  addNewToDo: (todo: string) => void;
}

const NewTodo = ({ addNewToDo }: INewTodoProp): JSX.Element => {
  const [state, setState] = useState("");
  const submitHandle = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (state !== "") {
      addNewToDo(state);
      setState("");
    }
  };
  return (
    <Form onSubmit={submitHandle}>
      <Row>
        <Col xs={10}>
          <Form.Control
            // className="mb-3"
            type="text"
            name="newTodo"
            id="newTodo"
            placeholder="enter todo text here"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </Col>
        <Col>
          <Button type="submit">Add ToDo</Button>
        </Col>
      </Row>
    </Form>
  );
};
export default NewTodo;
