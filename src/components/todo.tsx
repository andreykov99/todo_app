import { ITodo } from "../types";
import { Button, ToggleButton, Stack } from "react-bootstrap";
import trashImg from "./assets/trash.svg";
import squareImg from "./assets/square.svg";
import checkSquareImg from "./assets/check-square.svg";

type TodoProps = {
  todo: ITodo;
};
const Todo = ({ todo }: TodoProps) => (
  <Stack direction="horizontal" gap={3}>
    <ToggleButton className="mr3" value={todo.id} checked={todo.isDone}>
      <img src={todo.isDone ? checkSquareImg : squareImg} alt="delete" />
    </ToggleButton>
    <div className="me-auto">{todo.text}</div>
    <Button>
      <img src={trashImg} alt="delete" />
    </Button>
  </Stack>
);

export default Todo;
