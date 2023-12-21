import React from 'react';
import InputWithLabel from './InputWithLabel';

const AddTodoForm = ({ onAddTodo }) => {

  const [todoTitle, setTodoTitle] = React.useState('');

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    setTodoTitle('');
    onAddTodo({ title: todoTitle, id: Date.now() });
  };

  return (
    <>
      <form onSubmit={handleAddTodo}>
        <InputWithLabel
          label="Title:"
          todoTitle={todoTitle}
          handleTitleChange={handleTitleChange}>
        </InputWithLabel>
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default AddTodoForm;