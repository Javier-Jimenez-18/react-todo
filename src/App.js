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
];

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <hr />
      <ul>
        {todoList.map(function (item) {
          return (
            <li key={item.id}>
              <span>{item.title}</span>
            </li>  
          );
        })}
      </ul>  
    </div>
  );
}

export default App;
