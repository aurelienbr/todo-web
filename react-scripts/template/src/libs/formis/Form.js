// @flow

import React, { PureComponent } from 'react';
// import Input from './Input';

function withFormHandler(WrappedComponent: Function) {
  type Props = { forwardedRef: any };

  type State = {
    loading: boolean,
    data: Object,
    error: ?any,
    errors: Array<{ name: string, value: any }>,
    valid: boolean,
  };

  class Form extends PureComponent<Props, State> {
    props: Props;
    state: State = {
      loading: false,
      data: {},
      error: null,
      errors: [],
      valid: false,
    };

    handleSubmit = (action: (data: any) => void | Promise<void>) => {
      this.setState({ loading: true }, () =>
        Promise.resolve(action(this.state.data))
          .then(() => this.setState({ loading: false }))
          .catch(error => {
            this.setState(state => ({ error, loading: false }));
          })
      );
    };

    handleInputError = (name: string, error: any) => {
      const entry = this.state.errors.find(i => i.name === name);
      if (entry && !error) this.setState(state => ({ errors: state.errors.filter(i => i.name !== name) }));
      else if ((!entry && error) || (entry && error !== entry.value))
        this.setState(state => ({
          errors: [...state.errors.filter(i => i.name !== name), { name, value: error }],
        }));
    };

    handleChange = (name: string, value: string, validate?: (value: string) => ?string) => {
      this.setState(state => {
        let errors = state.errors;
        if (validate) {
          const error = validate(value);
          const entry = this.state.errors.find(i => i.name === name);
          if (entry && !error) errors = state.errors.filter(i => i.name !== name);
          else if ((!entry && error) || (entry && error !== entry.value))
            errors = [...state.errors.filter(i => i.name !== name), { name, value: error }];
        }

        return { data: { ...this.state.data, [name]: value }, errors, valid: errors.length === 0 };
      });
    };

    render() {
      const { forwardedRef, ...others } = this.props;
      const formis = {
        ...this.state,
        onSubmit: this.handleSubmit,
        onError: this.handleInputError,
        onChange: this.handleChange,
      };

      // const InputHandler = (props: any) => <Input formis={formis} {...props} />;
      return <WrappedComponent formis={{ ...formis /*, InputHandler */ }} ref={forwardedRef} {...others} />;
    }
  }
  /* eslint-disable */
  // $FlowFixMe
  return React.forwardRef((props: any, ref: any) => {
    return <Form {...props} forwardedRef={ref} />;
  });
  /* eslint-enable */
}

export default withFormHandler;
