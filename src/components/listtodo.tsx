import { ListGroup } from 'react-bootstrap';
import { Todo } from '.';
import { ITodo, ListTodoProps } from '../types';

const ListTodo = ({ list }: ListTodoProps) => {
  if (!list.length) {
    return <p>Sorry, the list is empty.</p>;
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
