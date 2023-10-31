import React from 'react';

const todoList = [
  {
    id: 1,
    title: 'Read "Hello React", "Requirements", "Setting up a React Component", "Meet the React Component", "React JSX", and "Lists in React"',
  }, 
  {
    id: 2,
    title: 'Complete Lesson 1.1 exercises',
  },
  {
    id: 3,
    title: 'Git add, commit, and push code from branch lesson_1_1 to GitHub',
  }, 
  {
    id: 4,
    title: 'Read "Meet another React Component", "React Component Instantiation", "React DOM", and "React Component Definition (Advanced)"',
  }, 
  {
    id: 5,
    title: 'Complete Lesson 1.2 exercises',
  },
  {
    id: 6,
    title: 'Git add, commit, and push code from branch lesson_1_2 to GitHub',
  },
];

const TodoList = () => (
  <ul>
    {todoList.map((item) => (
      <li key={item.id}>
        <span>{item.title}</span>
      </li>
    ))}
  </ul>  
);

export default TodoList;