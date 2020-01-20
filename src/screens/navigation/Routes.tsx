import React, { ComponentType } from 'react';
import Loadable from 'react-loadable';
import { Route, Switch } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const makeAsyncComponent = (componentImport: any) => {
  return Loadable({
    loader: componentImport,
    // eslint-disable-next-line react/display-name
    loading: () => <div />
  });
};
const HomeScreen = makeAsyncComponent(() => import('~screens/HomeScreen'));

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
    <Route component={HomeScreen} />
  </Switch>
);

export default Routes;
