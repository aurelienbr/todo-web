// import ReduxThunk from 'redux-thunk';
import { createStore } from 'redux';
// import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import { createBrowserHistory } from 'history';

import reducers from '~reducers/index';
// import rootSaga from '~sagas/root';

export const history = createBrowserHistory();

// const sagaMiddleware = createSagaMiddleware();
const stores = reducers(history);

// export const store: any = createStore(persistedReducer, {}, composeWithDevTools(applyMiddleware(sagaMiddleware */, routerMiddleware(history))));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const store: any = createStore(stores);
export const persistor = persistStore(store);

// sagaMiddleware.run(rootSaga);
