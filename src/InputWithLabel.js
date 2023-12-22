import React from 'react';

const InputWithLabel = (props) => {
  
  return (
    <>
      <label htmlFor="todoTitle">{props.children} </label> 
      <input 
        id="todoTitle" 
        name="title" 
        type="text"
        value={props.todoTitle} 
        autoFocus
        onChange={props.handleTitleChange}
      />
    </>      
  );      
};

export default InputWithLabel;
