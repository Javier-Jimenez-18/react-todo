import React from 'react';

const InputWithLabel = (props) => {
  
  return (
    <>
      <label htmlFor="todoTitle">{props.label} </label> 
      <input 
        id="todoTitle" 
        name="title" 
        type="text"
        value={props.todoTitle} 
        onChange={props.handleTitleChange}
      />
    </>      
  );      
};

export default InputWithLabel;
