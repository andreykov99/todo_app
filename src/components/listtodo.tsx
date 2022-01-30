import { ListGroup } from 'react-bootstrap';
import Todo from './todo';
import { ITodo } from '../types';
import { useTodo } from '../context/todo-context';

const ListTodo = () => {
  const value = useTodo();
  if (!value) throw new Error('context value is not set');
  const { state } = value;
  const list: ITodo[] = state.todos;
  if (!list.length) {
    return <p>The list is empty.</p>;
  }
  return (
    <ListGroup as="ul">
      {list.map(({ id, isDone, text }: ITodo) => (
        <ListGroup.Item key={id} as="li">
          <Todo id={id} isDone={isDone} text={text} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ListTodo;
