import React from 'react';
import { store, persistor, history } from '~reducers/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Loading from '~screens/LoadingScreen';

import AppContainer from '~containers/app/AppContainer';

import { ConnectedRouter } from 'connected-react-router';

const AppProvider = () => (
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}>
      <ConnectedRouter history={history}>
        <AppContainer />
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);

export default AppProvider;
