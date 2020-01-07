// @flow
import React, { Fragment, PureComponent } from 'react';
import { Form, Label } from 'semantic-ui-react';
import { injectIntl, FormattedMessage } from 'react-intl';

type Props = {
  component: any,
  formis: any,
  containerStyle?: Object,
  onSubmit?: Function,
};

class InputRenderer extends PureComponent<Props> {
  render() {
    const { component: Component, formis, containerStyle, ...others } = this.props;
    const { error } = formis;
    return (
      <Fragment>
        <Form.Field style={containerStyle}>
          <Component onKeyPress={this.handleKeyPress} error={error !== null} onChange={this.handleChange} {...others} />
          {error && (
            <Label pointing basic color="red">
              <FormattedMessage id={error} />
            </Label>
          )}
        </Form.Field>
      </Fragment>
    );
  }

  handleChange = (e: any, { value }: Object) => {
    this.props.formis.onChange(value);
  };

  handleKeyPress = (e: any) => {
    if (e.key === 'Enter' && this.props.onSubmit) this.props.onSubmit();
  };
}

export default injectIntl(InputRenderer);
