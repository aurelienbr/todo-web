import { Todo } from '../../types/Todos';

export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export type ADD_TODO = {
  type: string;
  payload: Todo;
};

export type UPDATE_TODO = {
  type: string;
  payload: Todo;
};

export type DELETE_TODO = {
  type: string;
  payload: number;
};

export function addTodo (payload: Todo): ADD_TODO {
  return {
    type: ADD_TODO,
    payload
  };
}

export function updateTodo (payload: Todo): UPDATE_TODO {
  return {
    type: UPDATE_TODO,
    payload
  };
}

export function deleteTodo (payload: number): DELETE_TODO {
  return {
    type: DELETE_TODO,
    payload
  };
}

export type ActionTypes = ADD_TODO | UPDATE_TODO | DELETE_TODO;
