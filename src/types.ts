/* eslint-disable no-unused-vars */
export interface ITodo {
  id?: string;
  text?: string;
  isDone?: boolean;
}

export type TodoState = {
  todos: ITodo[];
};

export type TodoAction = {
  type: string;
  todo: ITodo;
};

export type ActionTypes = {
  addTodo: (text: string) => void;
  delTodo: (id: string) => void;
  toggleTodo: (id: string, isDone: boolean) => void;
};

export type ContextType = { state: TodoState; actions: ActionTypes } | null;

export type DispatchType = (args: TodoAction) => TodoAction;
