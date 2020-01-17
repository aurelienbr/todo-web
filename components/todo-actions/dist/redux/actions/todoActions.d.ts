import { Todo } from '../../types/Todos';
export declare const ADD_TODO = "ADD_TODO";
export declare const UPDATE_TODO = "UPDATE_TODO";
export declare const DELETE_TODO = "DELETE_TODO";
export declare type ADD_TODO = {
    type: string;
    payload: Todo;
};
export declare type UPDATE_TODO = {
    type: string;
    payload: Todo;
};
export declare type DELETE_TODO = {
    type: string;
    payload: number;
};
export declare function addTodo(payload: Todo): ADD_TODO;
export declare function updateTodo(payload: Todo): UPDATE_TODO;
export declare function deleteTodo(payload: number): DELETE_TODO;
export declare type ActionTypes = ADD_TODO | UPDATE_TODO | DELETE_TODO;
