import { ListGroup } from 'react-bootstrap';
import Todo from './todo';
import { ITodo } from '../types';
import { useTodo } from '../context/todo-context';

const ListTodo = () => {
  const value = useTodo();
  if (!value) throw new Error('context value is not set');
  const { state, actions } = value;
  const list: ITodo[] = state.todos;
  const { delTodo } = actions;
  if (!list.length) {
    return <p>The list is empty.</p>;
  }
  return (
    <ListGroup as="ul">
      {list.map((todo) => {
        const { id } = todo;
        return (
          <ListGroup.Item key={id} as="li">
            <Todo todo={todo} delTodo={delTodo} />
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

export default ListTodo;
