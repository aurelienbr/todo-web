import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { IntlProvider } from 'react-intl';

import Routes from '~screens/navigation/Routes';
import messages from '~lang/index';
import { STATUS_START, STATUS_LOADING, Status } from '~types/Status';
import LoadingScreen from '~screens/LoadingScreen';
import { loginUserWithToken } from '~actions/loginActions';
import { StateType } from '~reducers/index';

type OwnProps = {};

type StateProps = {
  language: 'fr' | 'en';
  status: Status;
  token: string | null;
};

type DispatchProps = {
  loginUserWithToken: (token: string) => void;
};

type Props = OwnProps & StateProps & DispatchProps;

class App extends PureComponent<Props> {
  props: Props;

  componentDidMount () {
    if (this.props.status === STATUS_START && this.props.token) this.props.loginUserWithToken(this.props.token);
  }

  render () {
    if ((this.props.status === STATUS_START || this.props.status === STATUS_LOADING) && this.props.token) return <LoadingScreen />;

    return (
      <IntlProvider locale={this.props.language} messages={messages[this.props.language]}>
        <Routes />
      </IntlProvider>
    );
  }
}

export default withRouter(
  connect<StateProps, DispatchProps, OwnProps, StateType>(
    state => ({
      language: state.locale.language,
      status: state.login.status,
      token: state.login.token
    }),
    {
      loginUserWithToken
    }
  )(App)
);
