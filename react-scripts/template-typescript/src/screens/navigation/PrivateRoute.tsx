import React, { PureComponent } from 'react';
import { Route, RouteComponentProps, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { StateType } from '~reducers/index';
import { STATUS_SUCCESS, Status } from '~types/Status';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type OwnProps = { path: string; component: any };

type StateProps = {
  status: Status;
};

type DispatchProps = {};

type Props = OwnProps & StateProps & DispatchProps & RouteComponentProps;

class PrivateRoute extends PureComponent<Props> {
  props: Props;
  componentDidMount () {
    this.handleEnterPrivatePage();
  }

  handleEnterPrivatePage = () => {
    if (this.props.status !== STATUS_SUCCESS) return <Redirect to="/" />;
  };

  render () {
    const { status: _status, history: _history, ...others } = this.props;
    return <Route {...others} />;
  }
}

export default withRouter(
  connect<StateProps, DispatchProps, OwnProps, StateType>(state => ({
    status: state.login.status
  }))(PrivateRoute)
);
