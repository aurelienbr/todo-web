// @flow
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import LoginScreen from '~screens/LoginScreen';

import type { DispatchType, StateType } from '~types/Actions';
import type { StateProps, DispatchProps } from '~screens/LoginScreen';

import { loginUser } from '~actions/loginActions';

export default withRouter(
  connect(
    (state: StateType): StateProps => ({
      status: state.login.status,
      error: state.login.error,
    }),
    (dispatch: DispatchType): DispatchProps => ({
      loginUser: (email: string, password: string) => dispatch(loginUser(email, password)),
    })
  )(LoginScreen)
);
