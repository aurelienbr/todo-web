import React, { ComponentType } from 'react';
import Loadable from 'react-loadable';
import { Route, Switch } from 'react-router-dom';

import Loading from '~screens/LoadingScreen';
import PublicRoute from '~screens/navigation/PublicRoute';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const makeAsyncComponent = (componentImport: any) => {
  return Loadable({
    loader: componentImport,
    loading: Loading
  });
};

const LoginScreen = makeAsyncComponent(() => import('~screens/LoginScreen'));
const PageNotFound = makeAsyncComponent(() => import('~screens/PageNotFound'));

// ProfileScreen.preload();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function withProps (externalProps: Record<string, any>) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (WrapperComponent: ComponentType<Record<string, any>>) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return class HOSWrapperComponent extends React.PureComponent<Record<string, any>> {
      render () {
        return <WrapperComponent {...this.props} {...externalProps} />;
      }
    };
  };
}

const Routes = () => (
  <Switch>
    <PublicRoute path="/" component={LoginScreen} />
    <Route component={PageNotFound} />
  </Switch>
);

export default Routes;
