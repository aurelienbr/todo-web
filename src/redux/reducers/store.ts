// import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
//import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import reducers from '~reducers/index';
//import rootSaga from '~sagas/root';

export const history = createBrowserHistory();

// const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducers(history));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// export const store: any = createStore(persistedReducer, {}, composeWithDevTools(applyMiddleware(sagaMiddleware */, routerMiddleware(history))));
export const store: any = createStore(persistedReducer);
export const persistor = persistStore(store);

//sagaMiddleware.run(rootSaga);
