import React from 'react';

const InputWithLabel = (props) => {
  
  const inputRef = React.useRef();

  React.useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <>
      <label htmlFor="todoTitle">{props.children} </label> 
      <input
        ref={inputRef} 
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
