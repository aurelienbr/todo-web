import { combineReducers } from 'redux';
import todo from "shared-reducers-toddo";

// import todos from '@bit/aureldev.shared-reducer.todo-reducer';
// import todos from '../reducers/todosReducer';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default () =>
  combineReducers({
   todo
  });

const rootReducer = combineReducers(todo);

export type StateType = ReturnType<typeof rootReducer>;
