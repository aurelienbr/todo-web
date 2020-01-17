import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Todo } from '@bit/aureldev.shared-reducer.todos';

import { StateType } from '~reducers/index';

type StateProps = { todos: Array<Todo> };

type DispatchProps = {};

type OwnProps = {};

type Props = {} & OwnProps & StateProps;

class LoginScreen extends PureComponent<Props> {
  render () {
    return <div />;
  }
}

export default connect<StateProps, DispatchProps, OwnProps, StateType>(state => ({
  todos: state.todos
}))(LoginScreen);
