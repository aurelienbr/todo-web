import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router';
import { withFormik, Form, FormikProps, Field } from 'formik';
import { injectIntl, FormattedMessage, IntlShape } from 'react-intl';
import { Card, CardBody, Button, Spinner, Alert } from 'reactstrap';

import { StateType } from '~reducers/index';
import { loginUser } from '~actions/loginActions';
import { STATUS_LOADING, STATUS_FAILURE, STATUS_SUCCESS, Status } from '~types/Status';
import LanguagePicker from '~components/fragments/LanguagePicker';
import DefaultInput from '~components/fragments/input/DefaultInput';

type OwnProps = {};

type StateProps = {
  loginStatus: Status;
  error: string;
};

type DispatchProps = {
  loginUser: (email: string, password: string) => void;
};

type FormValues = {
  email: string;
  password: string;
};

type Props = {
  intl: IntlShape;
} & OwnProps &
  StateProps &
  DispatchProps &
  RouteComponentProps &
  FormikProps<FormValues>;

class LoginScreen extends PureComponent<Props> {
  _passwordField: HTMLInputElement | null;

  componentDidUpdate (prevProps: Props) {
    if (this.props.loginStatus === STATUS_SUCCESS && prevProps.loginStatus !== STATUS_SUCCESS) this.props.history.push('/articles');
  }

  render () {
    const { isValid } = this.props;

    return (
      <div className="h-100 w-100 row align-items-center justify-content-center">
        <Card style={{ width: '50%', display: 'flex', flexDirection: 'column' }}>
          <CardBody>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <h1>
                <FormattedMessage id="app.page.login.title" />
              </h1>
              <LanguagePicker />
            </div>
            <Form>
              <Field
                name="email"
                type="text"
                component={DefaultInput}
                label={this.props.intl.formatMessage({ id: 'app.form.label.email' })}
                placeholder={this.props.intl.formatMessage({ id: 'app.form.placeholder.email' })}
                autoCapitalize="none"
                returnKeyType="next"
                onSubmitEditing={this.handleFocusPasswordField}
              />

              <Field
                // eslint-disable-next-line
                innerRef={(r: HTMLInputElement) => (this._passwordField = r)}
                name="password"
                type="password"
                label={this.props.intl.formatMessage({ id: 'app.form.label.password' })}
                component={DefaultInput}
                placeholder={this.props.intl.formatMessage({ id: 'app.form.placeholder.password' })}
              />

              <div style={{ marginTop: 10 }}>
                <Button style={{ width: 120 }} size="md" type="submit" disabled={!isValid} onClick={this.handleLogin}>
                  {this.props.loginStatus === STATUS_LOADING ? (
                    <Spinner size="sm" color="light" />
                  ) : (
                    <FormattedMessage id="app.page.login.submit" />
                  )}
                </Button>
              </div>
              {this.props.loginStatus === STATUS_FAILURE && (
                <Alert style={{ marginTop: 10 }} color="danger">
                  <h4 className="alert-heading">
                    <FormattedMessage id="app.page.login.error" />
                  </h4>
                  <FormattedMessage id={this.props.error} />
                </Alert>
              )}
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }

  handleLogin = () => {
    if (this.props.status !== STATUS_LOADING && this.props.isValid) this.props.handleSubmit();
  };

  handleFocusPasswordField = () => {
    if (this._passwordField) this._passwordField.focus();
  };
}

const injectFormik = withFormik<DispatchProps & StateProps & OwnProps, FormValues>({
  mapPropsToValues: () => {
    return { email: '', password: '' };
  },
  validate: values => {
    const errors: { email?: string | null; password?: string | null } = {};
    if (!(values.email && values.email.length > 1)) {
      errors.email = 'app.form.error.email';
    }
    if (!(values.password && values.password.length > 0)) {
      errors.password = 'app.form.error.password';
    }

    return errors;
  },
  handleSubmit: (values, { props }) => {
    props.loginUser(values.email, values.password);
  }
});

export default connect<StateProps, DispatchProps, OwnProps, StateType>(
  state => ({
    loginStatus: state.login.status,
    error: state.login.error
  }),
  {
    loginUser
  }
)(injectFormik(injectIntl(withRouter(LoginScreen))));
