import React from 'react';
import './todo-item.scss';

export default class TodoItem extends React.Component {
  static propTypes = {
    todo    : React.PropTypes.object.isRequired,
    toggle  : React.PropTypes.func.isRequired,
    destroy : React.PropTypes.func.isRequired
  }

  constructor () {
    super();
  }

  renderNotification () {
    if (this.props.todo.complete) {
      return (
        <span className='todo-item__notification glyphicon glyphicon-ok'>
        </span>
      );
    }
  }

  render () {
    const { todo, toggle } = this.props;

    return (
      <div className='todo-item' onClick={() => toggle()}>
        {this.renderNotification()}
        {todo.copy}
      </div>
    );
  }
}
