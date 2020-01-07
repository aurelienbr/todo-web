import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react-router';

import { store, persistor, history } from '~reducers/store';
import Loading from '~screens/LoadingScreen';
import App from '~components/app/App';

const AppProvider = () => (
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);

export default AppProvider;
