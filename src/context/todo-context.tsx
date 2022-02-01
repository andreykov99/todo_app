import { createContext, useContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ITodo, TodoAction, TodoState, ContextType } from '../types';

const initialState: TodoState = {
  todos: [],
};

const NEW_TODO = 'NEW_TODO';
const DEL_TODO = 'DEL_TODO';
const UPD_TODO = 'UPD_TODO';

const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
  switch (action.type) {
    case NEW_TODO: {
      const newTodo: ITodo = {
        id: uuidv4(),
        text: action.todo.text,
        isDone: false,
      };
      return { ...state, todos: state.todos.concat(newTodo) };
    }
    case DEL_TODO: {
      const updatedTodos: ITodo[] = state.todos.filter(
        (todo: ITodo) => todo.id !== action.todo.id,
      );
      return {
        ...state,
        todos: updatedTodos,
      };
    }
    case UPD_TODO: {
      const { todos } = state;
      const { id, text, isDone } = action.todo;
      const indexTodo = todos.findIndex((item) => item.id === id);
      if (text) todos[indexTodo].text = text;
      if (isDone !== undefined) todos[indexTodo].isDone = isDone;

      // todo: do not mutate state, refactor it
      // [...myArray.slice(0, objIndex), Object.assign({}, myArray[objIndex], ...myArray.slice(objIndex + 1))]

      return {
        ...state,
        todos,
      };
    }
    default:
      return state;
  }
};

const useValue = (): ContextType => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const actions = {
    addTodo: (text: string) => {
      dispatch({ type: NEW_TODO, todo: { text } });
    },
    delTodo: (id: string) => {
      dispatch({ type: DEL_TODO, todo: { id } });
    },
    toggleTodo: (id: string, isDone: boolean) => {
      dispatch({ type: UPD_TODO, todo: { id, isDone } });
    },
  };
  return { state, actions };
};

const TodoContext = createContext<ContextType>(null);
TodoContext.displayName = 'TodoContext';

const TodoProvider = ({ children }: { children: React.ReactNode }) => (
  <TodoContext.Provider value={useValue()}>{children}</TodoContext.Provider>
);

const useTodo = (): ContextType => {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error('useTodo must be used within a TodoProvider');
  }
  return context;
};

export { TodoProvider, useTodo };
