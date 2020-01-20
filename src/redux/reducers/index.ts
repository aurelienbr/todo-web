import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import { reducers } from 'shared-reducers-toddo';

export const finalReducers = {
  todoReducers: reducers.todoReducers
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default (history: any) =>
  combineReducers({
    ...finalReducers,
    router: connectRouter(history)
  });

const rootReducer = combineReducers(finalReducers);

export type StateType = ReturnType<typeof rootReducer & { router: RouterState }>;
