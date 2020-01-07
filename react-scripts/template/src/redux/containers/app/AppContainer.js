// @flow
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import App from '~components/app/App';
import { loginUserWithToken } from '~actions/loginActions';

import type { DispatchType, StateType } from '~types/Actions';
import type { StateProps, DispatchProps } from '~components/app/App';

export default withRouter(
  connect(
    (state: StateType): StateProps => ({
      language: state.locale.language,
      status: state.login.status,
      token: state.login.token,
    }),
    (dispatch: DispatchType): DispatchProps => ({
      loginUserWithToken: (token: string) => dispatch(loginUserWithToken(token)),
    })
  )(App)
);
