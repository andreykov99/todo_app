import { Container } from 'react-bootstrap';
import { NewTodo, ListTodo } from './components';

import './App.css';
import { TodoProvider } from './context/todo-context';

const App = () => (
  <TodoProvider>
    <Container className="p-3">
      <Container className="p-5 mb-4 bg-light rounded-3">
        <NewTodo />
      </Container>
      <ListTodo />
    </Container>
  </TodoProvider>
);

export default App;
