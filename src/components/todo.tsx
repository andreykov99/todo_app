import { Button, ToggleButton, Stack } from 'react-bootstrap';
import { ITodo } from '../types';
import trashImg from './assets/trash.svg';
import squareImg from './assets/square.svg';
import checkSquareImg from './assets/check-square.svg';

const Todo = ({ id, isDone, text }: ITodo) => {
  const deleteButtonHandle = (e: React.MouseEvent) => {
    // eslint-disable-next-line no-console
    console.log(e);
  };
  return (
    <Stack direction="horizontal" gap={3}>
      <ToggleButton className="mr3" value={id || 'toggle'} checked={isDone}>
        <img src={isDone ? checkSquareImg : squareImg} alt="delete" />
      </ToggleButton>
      <div className="me-auto">{text}</div>
      <Button onClick={(e) => deleteButtonHandle(e)}>
        <img src={trashImg} alt="delete" />
      </Button>
    </Stack>
  );
};

export default Todo;
