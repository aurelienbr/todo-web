import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { connectRouter } from 'connected-react-router';

import locale from '~reducers/localeReducer';
import login from '~reducers/loginReducer';
import register from '~reducers/registerReducer';
import fetchArticles from '~reducers/fetchArticlesReducer';

const loginPersistConfig = {
  key: 'login',
  storage,
  whitelist: ['token'],
};

export default history =>
  combineReducers({
    locale,
    login: persistReducer(loginPersistConfig, login),
    register,
    fetchArticles,
    router: connectRouter(history),
  });
