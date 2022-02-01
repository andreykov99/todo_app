import { Button, ToggleButton, Stack } from 'react-bootstrap';
import { ITodo } from '../types';
import trashImg from './assets/trash.svg';
import squareImg from './assets/square.svg';
import checkSquareImg from './assets/check-square.svg';

const Todo = ({
  todo,
  delTodo,
  toggleTodo,
}: {
  todo: ITodo;
  delTodo: (id: string) => void;
  toggleTodo: (id: string, isDone: boolean) => void;
}) => {
  if (!todo) throw new Error('todo is empty');
  const { id, text, isDone } = todo;
  if (!id) throw new Error('todo.id is empty');
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const deleteButtonHandle = (id: string) => {
    // todo: add confirm to delete
    delTodo(id);
  };
  return (
    <Stack direction="horizontal" gap={3}>
      <ToggleButton
        className="mr3"
        value={id || 'toggle'}
        checked={isDone}
        onClick={() => toggleTodo(id, !isDone)}
      >
        <img src={isDone ? checkSquareImg : squareImg} alt="delete" />
      </ToggleButton>
      <h4>{id}</h4>
      {isDone ? (
        <div className="me-auto">
          <s>{text}</s>
        </div>
      ) : (
        <div className="me-auto">{text}</div>
      )}

      <Button onClick={() => deleteButtonHandle(id)}>
        <img src={trashImg} alt="delete" />
      </Button>
    </Stack>
  );
};

export default Todo;
