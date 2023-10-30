import React from 'react';

const TodoListItem = (props) => (
  <li>
    <span>{props.todo.title}</span>
  </li>
);

export default TodoListItem;