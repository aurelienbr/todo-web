// @flow
import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import { STATUS_SUCCESS, type Status } from '~types/Status';

export type StateProps = {
  status: Status,
};

type Props = {
  path: string,
  component: any,
  history: any,
} & StateProps;

class PrivateRoute extends PureComponent<Props> {
  componentDidMount() {
    this.handleEnterPrivatePage();
  }

  handleEnterPrivatePage = () => {
    if (this.props.status !== STATUS_SUCCESS) this.props.history.push('/');
  };

  render() {
    const { status: _status, history: _history, ...others } = this.props;
    return <Route onEnter={this.handleEnterPrivatePage} {...others} />;
  }
}

export default withRouter(PrivateRoute);
