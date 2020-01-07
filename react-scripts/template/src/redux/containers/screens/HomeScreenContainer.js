// @flow
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import HomeScreen from '~screens/HomeScreen';

import type { DispatchType, StateType } from '~types/Actions';
import type { StateProps, DispatchProps } from '~screens/HomeScreen';

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
  )(HomeScreen)
);
