import { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useTodo } from '../context/todo-context';

const NewTodo = () => {
  const [text, setText] = useState('');
  const value = useTodo();
  if (!value) throw new Error('context value is not set');
  const { actions } = value;
  const { addTodo } = actions;
  const submitHandle = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (text !== '') {
      addTodo(text);
      setText('');
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
            value={text}
            onChange={(e) => setText(e.target.value)}
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
