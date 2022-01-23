import { Container } from 'react-bootstrap';
import { ITodo } from './types';
import { NewTodo, ListTodo } from './components';
// import { createTodo } from "./services/todo";
import './App.css';
import useLocalStorage from './hooks/uselocalstorage';

const App = () => {
  const [state, setState] = useLocalStorage('Todos', [] as ITodo[]);
  const addNewTodoHandler = (todo: string) => {
    const newTodo: ITodo = {
      text: todo,
      isDone: false
    };
    // createTodo(newTodo);
    setState((prev: ITodo[]) => [...prev, newTodo]);
  };
  // eslint-disable-next-line no-unused-vars
  const deleteTodoHandler = (id: string | null) => {
    if (id) setState((prev: ITodo[]) => prev.filter((item) => item.id !== id));
  };
  const getListTodo = () => [...state];
  return (
    <Container className="p-3">
      <Container className="p-5 mb-4 bg-light rounded-3">
        <NewTodo addNewTodo={addNewTodoHandler} />
      </Container>
      <ListTodo list={getListTodo()} />
    </Container>
  );
};

export default App;
