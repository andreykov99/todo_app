/* eslint-disable no-unused-vars */
export interface ITodo {
  id?: string;
  text: string;
  isDone: boolean;
}

export type NewTodoProp = {
  addNewTodo: (arg: string) => void;
};

export interface ListTodoProps {
  list: Array<ITodo>;
}
