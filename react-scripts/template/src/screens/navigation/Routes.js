// @flow
import React from 'react';
import Loadable from 'react-loadable';
import { Route, Switch } from 'react-router-dom';
import Loading from '~screens/LoadingScreen';
import PrivateRoute from '~containers/navigation/PrivateRouteContainer';
import PublicRoute from '~containers/navigation/PublicRouteContainer';

import type { ComponentType } from 'react';

const makeAsyncComponent = (componentImport: Function): $ReadOnly<Object> => {
  return Loadable({
    loader: componentImport,
    loading: Loading,
  });
};

const HomeScreen = makeAsyncComponent(() => import('~containers/screens/HomeScreenContainer'));
const LoginScreen = makeAsyncComponent(() => import('~containers/screens/LoginScreenContainer'));
const RegisterScreen = makeAsyncComponent(() => import('~screens/RegisterScreen'));
const ArticleScreen = makeAsyncComponent(() => import('~containers/screens/ArticleScreenContainer'));
const PageNotFound = makeAsyncComponent(() => import('~screens/PageNotFound'));

// ProfileScreen.preload();

export function withProps(externalProps: Object) {
  return (WrapperComponent: ComponentType<Object>) => {
    return class HOSWrapperComponent extends React.PureComponent<Object> {
      render() {
        return <WrapperComponent {...this.props} {...externalProps} />;
      }
    };
  };
}

const Routes = () => (
  <Switch>
    <PublicRoute path="/register" component={RegisterScreen} />
    <PrivateRoute path="/articles" component={ArticleScreen} />
    <PrivateRoute path="/home" component={HomeScreen} />
    <PublicRoute path="/" component={LoginScreen} />
    <Route component={PageNotFound} />
  </Switch>
);

export default Routes;
