import React from "react";

const EnterpretButton = (({type='button', children, id, className, handleClick}) => {
  return (
    <button type={type} id={id} className={`default-btn ${className}`} onClick={handleClick}>{children}</button>
  );  
});


export default EnterpretButton;
