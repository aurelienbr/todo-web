import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import { store, history } from '~reducers/store';
import App from '~components/app/App';

const AppProvider = () => (
  <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />  
      </ConnectedRouter>
  </Provider>
);

export default AppProvider;
  