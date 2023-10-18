import React from 'react';

const AddTodoForm = (props) => {
  
  const handleAddTodo = (event) => {
    event.preventDefault();
    const todoTitle = event.target.title.value;
    console.log(todoTitle);
    event.target.reset();
  };

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title </label> 
      <input id="todoTitle" name="title" type="text" />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;