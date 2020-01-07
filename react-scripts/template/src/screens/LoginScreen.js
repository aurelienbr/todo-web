// @flow
import React, { PureComponent } from 'react';
import { Segment, Input, Header, Button, Message } from 'semantic-ui-react';
import { injectIntl, FormattedMessage } from 'react-intl';
import { STATUS_LOADING, STATUS_FAILURE, STATUS_SUCCESS, type Status } from '~types/Status';
import { withRouter } from 'react-router-dom';

import { withFormHandler, InputHandler } from '~libs/formis';
import InputRenderer from '~components/fragments/input/InputRenderer';
import LanguagePicker from '~containers/fragments/LanguagePickerContainer';

export type StateProps = {
  status: Status,
  error: ?string,
};

export type DispatchProps = {
  loginUser: (email: string, password: string) => void,
};

type Props = {
  intl: any,
  formis: {
    loading: boolean,
    data: Object,
    error: ?any,
    valid: boolean,
    onSubmit: Function,
    onError: Function,
    onChange: Function,
    InputHandler: any,
  },
  history: any,
} & StateProps &
  DispatchProps;

class LoginScreen extends PureComponent<Props> {
  componentDidUpdate(prevProps: Props) {
    if (this.props.status === STATUS_SUCCESS && prevProps.status !== STATUS_SUCCESS) this.props.history.push('/articles');
  }

  render() {
    const { valid } = this.props.formis;

    console.log('this.props', this.props);

    return (
      <div style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Segment style={{ width: '50%', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Header as="h1">
              <FormattedMessage id="app.page.login.title" />
            </Header>
            <LanguagePicker />
          </div>
          <InputHandler
            formis={this.props.formis}
            renderer={InputRenderer}
            validate={value => (value && value.length > 1 ? null : 'app.form.error.email')}
            name="email"
            component={Input}
            containerStyle={{ marginBottom: 10 }}
            label={{ basic: true, content: this.props.intl.formatMessage({ id: 'app.form.label.email' }) }}
            labelPosition="left"
            placeholder={this.props.intl.formatMessage({ id: 'app.form.placeholder.email' })}
            errorbluronly
            fluid
          />
          <InputHandler
            formis={this.props.formis}
            renderer={InputRenderer}
            validate={value => (value && value.length > 0 ? null : 'app.form.error.password')}
            name="password"
            type="password"
            component={Input}
            containerStyle={{ marginBottom: 10 }}
            label={{ basic: true, content: this.props.intl.formatMessage({ id: 'app.form.label.password' }) }}
            labelPosition="left"
            placeholder={this.props.intl.formatMessage({ id: 'app.form.placeholder.password' })}
            errorbluronly
            fluid
            onSubmit={this.handleSubmit}
          />
          <div style={{ marginTop: 10 }}>
            <Button
              loading={this.props.status === STATUS_LOADING}
              disabled={this.props.status === STATUS_LOADING || !valid}
              compact
              onClick={this.handleSubmit}
            >
              <FormattedMessage id="app.page.login.submit" />
            </Button>
          </div>
          {this.props.status === STATUS_FAILURE && (
            <Message negative>
              <Message.Header>
                <FormattedMessage id="app.page.login.error" />
              </Message.Header>
              <FormattedMessage id={this.props.error} />
            </Message>
          )}
        </Segment>
      </div>
    );
  }

  handleSubmit = () => {
    if (this.props.formis.valid) this.props.loginUser(this.props.formis.data.email, this.props.formis.data.password);
  };
}

export default withRouter(withFormHandler(injectIntl(LoginScreen)));
