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

export type TodoProviderProps = {
  children: React.ReactNode;
};

export type DispatchType = (args: TodoAction) => TodoAction;
