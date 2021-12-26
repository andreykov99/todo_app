import { ListGroup } from "react-bootstrap";
import Todo from "./todo";
import { ITodo } from "../types";

type ListTodoProps = {
  list: Array<ITodo>;
};
const ListTodo = ({ list }: ListTodoProps) => {
  return (
    <ListGroup>
      {list.map((item: ITodo) => (
        <ListGroup.Item key={item.id}>
          <Todo todo={item} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ListTodo;
