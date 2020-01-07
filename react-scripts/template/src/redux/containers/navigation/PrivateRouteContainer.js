// @flow
import { connect } from 'react-redux';

import PrivateRoute from '~screens/navigation/PrivateRoute';

import type { StateType } from '~types/Actions';
import type { StateProps } from '~screens/navigation/PrivateRoute';

export default connect((state: StateType): StateProps => ({
  status: state.login.status,
}))(PrivateRoute);
