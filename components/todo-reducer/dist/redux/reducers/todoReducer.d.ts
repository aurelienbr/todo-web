import { ActionTypes } from '../actions/todoActions';
import { Todo } from '../../types/';
export declare type State = {
    todos: Array<Todo>;
};
export default function (state: State, action: ActionTypes): {
    todos: any;
};
