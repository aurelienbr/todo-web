// @flow
import React, { PureComponent } from 'react';
import { IntlProvider } from 'react-intl';
import Routes from '~screens/navigation/Routes';
import messages from '~lang/index';
import { STATUS_START, STATUS_LOADING, type Status } from '~types/Status';
import LoadingScreen from '~screens/LoadingScreen';

export type StateProps = {
  language: string,
  status: Status,
  token: ?string,
};

export type DispatchProps = {
  loginUserWithToken: (token: string) => void,
};

type Props = StateProps & DispatchProps;

class App extends PureComponent<Props> {
  props: Props;

  componentDidMount() {
    if (this.props.status === STATUS_START && this.props.token) this.props.loginUserWithToken(this.props.token);
  }

  render() {
    if ((this.props.status === STATUS_START || this.props.status === STATUS_LOADING) && this.props.token) return <LoadingScreen />;
    return (
      <IntlProvider locale={this.props.language} messages={messages[this.props.language]}>
        <Routes />
      </IntlProvider>
    );
  }
}

export default App;
