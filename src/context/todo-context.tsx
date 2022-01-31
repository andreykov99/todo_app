import { createContext, useContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  ITodo,
  TodoAction,
  TodoProviderProps,
  TodoState,
  ContextType,
} from '../types';

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
      const updTodo: ITodo = {
        id: action.todo.id,
        text: action.todo.text,
        isDone: action.todo.isDone,
      };
      const updatedTodos: ITodo[] = state.todos
        .filter((todo: ITodo) => todo.id !== action.todo.id)
        .concat(updTodo);
      return {
        ...state,
        todos: updatedTodos,
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
  };
  return { state, actions };
};

const TodoContext = createContext<ContextType>(null);
TodoContext.displayName = 'TodoContext';

const TodoProvider = ({ children }: TodoProviderProps) => (
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
