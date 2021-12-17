import React, {memo} from "react";

const EnterpretButton = (({type='button', children, id, className, handleClick}) => {
  return (
    <button type={type} id={id} className={`default-btn ${className}`} onClick={handleClick}>{children}</button>
  );  
});

const isEq = (prev, next) => prev.id === next.id;
export default memo(EnterpretButton, isEq);