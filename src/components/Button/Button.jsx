import React from 'react'; 
import './button.styles.less';

export const Button = ({ onClick, className, children }) => {
  return (
    <button
      onClick={onClick}
      className={`button ${className || ''}`}
    >
      <span>{children}</span>
    </button>
  );
};

export default Button