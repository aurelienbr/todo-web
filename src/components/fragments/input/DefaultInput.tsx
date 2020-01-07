import React, { Fragment, PureComponent } from 'react';
import { Form, FormGroup, FormFeedback, Label, Col, Input } from 'reactstrap';
import { injectIntl, FormattedMessage, IntlShape } from 'react-intl';
import { FieldProps } from 'formik';

type OwnProps = {
  innerRef: React.RefObject<HTMLInputElement>;
  label: string;
  onSubmit?: Function;
};

type Props = {
  intl: IntlShape;
} & OwnProps &
  FieldProps;

class DefaultInput extends PureComponent<Props> {
  render () {
    const { form, field, innerRef, onSubmit, label, ...others } = this.props;
    const { touched, errors } = form;
    const { name, value, onBlur } = field;

    const error = errors[name];
    const showError = touched[name] !== undefined && error !== undefined;

    return (
      <Fragment>
        <Form>
          <FormGroup row>
            <Label sm={2}>{label}</Label>
            <Col sm={10}>
              <Input
                onChange={this.handleChange}
                invalid={showError}
                value={value}
                innerRef={innerRef}
                onKeyPress={this.handleKeyPress}
                onBlur={onBlur(name)}
                {...others}
              />
              {showError && (
                <FormFeedback tooltip>
                  <FormattedMessage id={String(error)} />
                </FormFeedback>
              )}
            </Col>
          </FormGroup>
        </Form>
      </Fragment>
    );
  }

  handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.props.field.onChange(this.props.field.name)(e.currentTarget.value);
  };

  handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && this.props.onSubmit) this.props.onSubmit();
  };
}

export default injectIntl(DefaultInput);
