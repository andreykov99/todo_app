import { ListGroup } from "react-bootstrap";
import { ITodo } from "./types";

interface IListTodoProps {
  list: Array<ITodo>;
}
const ListTodo = ({ list }: IListTodoProps) => {
  return (
    <ListGroup>
      {list.map((item: ITodo) => (
        // TODO: move list.item to separate component, add checkbox isDone, add delete button

        <ListGroup.Item key={item.id}>
          <span>{item.text}</span>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ListTodo;
