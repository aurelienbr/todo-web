// @flow

import React, { PureComponent } from 'react';

type Props = {
  renderer: Function,
  validate?: (value: string) => ?string,
  formis: {
    onChange: (name: string, value: string, callback?: Function) => void,
    onError: (name: string, error: ?string) => void,
    errors: Array<{ name: string, value: string }>,
    data: Object,
  },
  name: string,
  errorbluronly?: boolean,
  defaultValue?: any,
  onFocus?: Function,
  onBlur?: Function,
};

type State = {
  touched: boolean,
  valid: boolean,
  showError: boolean,
};

class Input extends PureComponent<Props, State> {
  props: Props;
  state: State;

  constructor(props: Props) {
    super(props);
    this.state = {
      valid: true,
      touched: false,
      showError: !props.errorbluronly,
    };
  }

  componentDidMount() {
    console.log('componentDidMount()');
    const value = this.props.defaultValue || '';
    this.handleFormChange(value);
  }

  handleChange = (value: string) => {
    if (!this.state.touched) {
      this.setState({ touched: true }, () => {
        this.handleFormChange(value);
      });
    } else {
      this.handleFormChange(value);
    }
  };

  handleFormChange = (value: string) => {
    this.props.formis.onChange(this.props.name, value, this.props.validate);
  };

  handleBlur = () => {
    if (this.props.errorbluronly) this.setState({ showError: true });
    if (this.props.onBlur) this.props.onBlur();
  };

  handleFocus = () => {
    if (this.props.errorbluronly) this.setState({ showError: false });
    if (this.props.onFocus) this.props.onFocus();
  };

  forceShowError = () => {
    this.setState({ showError: true, touched: true });
  };

  render() {
    const { validate, renderer: Renderer, name, errorbluronly, defaultValue, formis, ...props } = this.props;
    const { touched, showError } = this.state;
    const error = this.props.formis.errors.find(e => e.name === this.props.name);

    return (
      <Renderer
        onBlur={this.handleBlur}
        onFocus={this.handleFocus}
        {...props}
        formis={{
          // name,
          onChange: this.handleChange,
          error: showError ? (error === undefined ? null : error.value) : null,
          // touched,
          value: !touched && defaultValue ? defaultValue : this.props.formis.data[this.props.name] || '',
        }}
      />
    );
  }
}

export default Input;
