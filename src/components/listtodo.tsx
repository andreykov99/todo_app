import { ListGroup } from "react-bootstrap";
import { Todo } from ".";
import { ITodo } from "../types";

type ListTodoProps = {
  list: Array<ITodo>;
};
const ListTodo = ({ list }: ListTodoProps) => {
  if (!list.length) {
    return <p>Sorry, the list is empty.</p>;
  }
  return (
    <ListGroup as="ul">
      {list.map(({ todo: { id, isDone, text } }: ITodo) => (
        <ListGroup.Item key={id} as="li">
          <Todo todo={{ id, isDone, text }} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ListTodo;
