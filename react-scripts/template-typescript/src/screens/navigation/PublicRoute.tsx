import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Route, RouteComponentProps, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';

import { StateType } from '~reducers/index';
import { STATUS_SUCCESS, Status } from '~types/Status';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type OwnProps = { path: string; component: any };

type StateProps = {
  status: Status;
};

type DispatchProps = {};

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  history: any;
} & OwnProps &
  StateProps &
  DispatchProps &
  RouteComponentProps;

class PublicRoute extends PureComponent<Props> {
  props: Props;

  componentDidMount () {
    this.handleEnterPublicPage();
  }

  handleEnterPublicPage = () => {
    if (this.props.status !== STATUS_SUCCESS) return <Redirect to="/" />;
  };

  render () {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { status, history, ...others } = this.props;

    return <Route {...others} />;
  }
}

export default withRouter(
  connect<StateProps, DispatchProps, OwnProps, StateType>(state => ({
    status: state.login.status
  }))(PublicRoute)
);
