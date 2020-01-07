// @flow
import { connect } from 'react-redux';

import PublicRoute from '~screens/navigation/PublicRoute';

import type { StateType } from '~types/Actions';
import type { StateProps } from '~screens/navigation/PublicRoute';

export default connect((state: StateType): StateProps => ({
  status: state.login.status,
}))(PublicRoute);
