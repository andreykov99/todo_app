import { ITodo } from "../types";
import { Button, ToggleButton, Stack } from "react-bootstrap";
import trashImg from "./assets/trash.svg";
import squareImg from "./assets/square.svg";
import checkSquareImg from "./assets/check-square.svg";
// TODO: text is not center vertical
interface ITodoProps {
  todo: ITodo;
}
const Todo = ({ todo }: ITodoProps) => (
  <Stack direction="horizontal" gap={3}>
    <ToggleButton className="mr3" value={todo.id} checked={todo.isDone}>
      <img src={todo.isDone ? checkSquareImg : squareImg} alt="delete" />
    </ToggleButton>
    <p className="me-auto">{todo.text}</p>
    <Button>
      <img src={trashImg} alt="delete" />
    </Button>
  </Stack>
);

export default Todo;
