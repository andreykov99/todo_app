import { ITodo } from "./types";

interface IListTodoProps {
  list: Array<ITodo>;
}
const ListTodo = ({ list }: IListTodoProps) => {
  return (
    <ul>
      {list.map((item: ITodo) => (
        <li key={item.id}>
          <span>{item.text}</span>
        </li>
      ))}
    </ul>
  );
};

export default ListTodo;
