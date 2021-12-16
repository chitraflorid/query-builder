import React from "react";

const EnterpretButton = (({children, id, className, handleClick}) => {
  return (
    <button id={id} className={`default-btn ${className}`} onClick={handleClick}>{children}</button>
  );  
});


export default EnterpretButton;
