import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { reducers, actions } from 'shared-reducers-toddo';
import { Todo } from 'shared-reducers-toddo/dist/types/Todos';

import { StateType } from '~reducers/index';

type StateProps = { todos: Array<Todo> };

type DispatchProps = {
  addTodo: Function;
};

type OwnProps = {};

type Props = OwnProps & StateProps & DispatchProps;

const TODO_ADD = {
  id: 0,
  title: 'test',
  description: 'test'
};

class LoginScreen extends PureComponent<Props> {
  constructor (props: Props) {
    super(props);
    console.log(reducers.todoReducers);
  }

  addTodo = () => this.props.addTodo(TODO_ADD);

  render () {
    return (
      <div>
        <button onClick={this.addTodo}>add a todo</button>
        {this.props.todos.map(todo => (
          <div key={todo.id}>{todo.title}</div>
        ))}
      </div>
    );
  }
}

export default connect<StateProps, DispatchProps, OwnProps, StateType>(
  state => ({
    todos: state.todoReducers.todos
  }),
  {
    addTodo: actions.todo.addTodo
  }
)(LoginScreen);
