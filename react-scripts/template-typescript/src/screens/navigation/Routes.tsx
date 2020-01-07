import React, { ComponentType } from 'react';
import Loadable from 'react-loadable';
import { Route, Switch } from 'react-router-dom';

import Loading from '~screens/LoadingScreen';
import PrivateRoute from '~screens/navigation/PrivateRoute';
import PublicRoute from '~screens/navigation/PublicRoute';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const makeAsyncComponent = (componentImport: any) => {
  return Loadable({
    loader: componentImport,
    loading: Loading
  });
};

const LoginScreen = makeAsyncComponent(() => import('~screens/LoginScreen'));
const RegisterScreen = makeAsyncComponent(() => import('~screens/RegisterScreen'));
const ArticleScreen = makeAsyncComponent(() => import('~screens/ArticleScreen'));
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
    <PublicRoute path="/register" component={RegisterScreen} />
    <PrivateRoute path="/articles" component={ArticleScreen} />
    <PublicRoute path="/" component={LoginScreen} />
    <Route component={PageNotFound} />
  </Switch>
);

export default Routes;
