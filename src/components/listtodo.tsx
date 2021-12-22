import { ListGroup } from "react-bootstrap";
import Todo from "./todo";
import { ITodo } from "../types";

interface IListTodoProps {
  list: Array<ITodo>;
}
const ListTodo = ({ list }: IListTodoProps) => {
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
