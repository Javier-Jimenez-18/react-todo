import React from 'react';

const TodoListItem = ({ todo, onRemoveTodo }) => (
  <li>
    <span>{todo.title}</span>
    &nbsp;
    <button type="button" onClick={() => onRemoveTodo(todo.id)}>Remove</button>
  </li>
);

export default TodoListItem;