import React, { PureComponent } from 'react';
import { withRouter } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';

import Routes from '~screens/navigation/Routes';

type OwnProps = {};

type Props = OwnProps & RouteComponentProps;

class App extends PureComponent<Props> {
  render () {
    return (
        <Routes />
    );
  }
}

export default withRouter(App);

