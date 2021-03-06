// import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import reducers from '~reducers/index';
import rootSaga from '~sagas/root';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['login', 'register', 'form', 'router', 'fetchArticleStats'],
};
const persistedReducer = persistReducer(persistConfig, reducers(history));

export const store = createStore(persistedReducer, {}, composeWithDevTools(applyMiddleware(sagaMiddleware, routerMiddleware(history))));
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
