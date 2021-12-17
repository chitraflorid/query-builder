import React from "react";

export const EnterpretButton = (({type='button', children, id, className, handleClick}) => {
  return (
    <button 
      type={type} id={id}
      className={`default-btn ${className}`}
      onClick={handleClick}
    >   {children}
    </button>
  );  
});