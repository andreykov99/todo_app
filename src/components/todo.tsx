import { Button, ToggleButton, Stack } from 'react-bootstrap';
import { ITodo } from '../types';
import trashImg from './assets/trash.svg';
import squareImg from './assets/square.svg';
import checkSquareImg from './assets/check-square.svg';

type Props = {
  todo: ITodo;
  delTodo: (id: string) => void;
};
const Todo = ({ todo, delTodo }: Props) => {
  const { id, text, isDone } = todo;
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const deleteButtonHandle = (id: string | undefined) => {
    if (!id) return;
    // todo add confirm to delete
    delTodo(id);
  };
  return (
    <Stack direction="horizontal" gap={3}>
      <ToggleButton className="mr3" value={id || 'toggle'} checked={isDone}>
        <img src={isDone ? checkSquareImg : squareImg} alt="delete" />
      </ToggleButton>
      <div className="me-auto">{text}</div>
      <Button onClick={() => deleteButtonHandle(id)}>
        <img src={trashImg} alt="delete" />
      </Button>
    </Stack>
  );
};

export default Todo;
