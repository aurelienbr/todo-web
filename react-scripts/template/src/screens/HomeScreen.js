// @flow
import React, { PureComponent } from 'react';
import logo from '~images/logo.svg';
// import '~styles/App.css';
import { Input, Button } from 'semantic-ui-react';
import { injectIntl, FormattedMessage } from 'react-intl';
import { STATUS_LOADING, STATUS_FAILURE, STATUS_SUCCESS, type Status } from '~types/Status';
import { withRouter } from 'react-router-dom';

export type StateProps = {
  status: Status,
  error: ?string,
};

export type DispatchProps = {
  loginUser: (email: string, password: string) => void,
};

type Props = {
  history: any,
} & StateProps &
  DispatchProps;

type State = {
  email: string,
  password: string,
};

class App extends PureComponent<Props, State> {
  state: State = {
    email: '',
    password: '',
  };

  componentDidUpdate(prevProps: Props) {
    if (this.props.status === STATUS_SUCCESS && prevProps.status !== STATUS_SUCCESS) this.props.history.push('/articles');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React - App
          </a>

          <Input onChange={this.handleChange('email')} style={{ marginTop: 10, marginBottom: 10 }} placeholder="steve@company.com" />
          <Input onChange={this.handleChange('password')} type="password" placeholder="******" />
          <Button loading={this.props.status === STATUS_LOADING} onClick={this.handleSubmit} style={{ marginTop: 10 }}>
            <FormattedMessage id="app.page.login.submit" />
          </Button>
          {this.props.status === STATUS_FAILURE && <FormattedMessage id={this.props.error} />}
        </header>
      </div>
    );
  }

  handleSubmit = () => {
    this.props.loginUser(this.state.email, this.state.password);
  };

  handleChange = (field: string) => (e: any, { value }) => {
    this.setState({ [field]: value });
  };
}

export default withRouter(injectIntl(App));
