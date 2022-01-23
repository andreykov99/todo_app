import { ITodo } from './types';
import { NewTodo, ListTodo } from './components';
// import { createTodo } from "./services/todo";
import { Container } from 'react-bootstrap';
import './App.css';
import useLocalStorage from './hooks/uselocalstorage';

function App() {
  const [state, setState] = useLocalStorage('Todos', [] as ITodo[]);
  const addNewToDoHandler = (todo: string) => {
    const newTodo: ITodo = {
      todo: { text: todo, isDone: false },
    };
    // createTodo(newTodo);
    setState((prev: ITodo[]) => [...prev, newTodo]);
  };
  const getListTodo = () => [...state];
  return (
    <Container className="p-3">
      <Container className="p-5 mb-4 bg-light rounded-3">
        <NewTodo addNewToDo={addNewToDoHandler} />
      </Container>
      <ListTodo list={getListTodo()} />
    </Container>
  );
}

export default App;
