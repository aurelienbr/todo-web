import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { connectRouter, RouterState } from 'connected-react-router';

import locale from '~reducers/localeReducer';
import login from '~reducers/loginReducer';

const loginPersistConfig = {
  key: 'login',
  storage,
  whitelist: ['token']
};

const reducers = {
  locale,
  login: persistReducer(loginPersistConfig, login)
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default (history: any) =>
  combineReducers({
    ...reducers,
    router: connectRouter(history)
  });

const rootReducer = combineReducers(reducers);

export type StateType = ReturnType<typeof rootReducer & { router: RouterState }>;
