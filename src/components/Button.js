import React from 'react';
import classes from '../styles/Button.module.css';
const Button = ({className, children}) => {
  return (
    <div class={`${classes.button} ${className}`}>
      {children}
    </div>
  );
};

export default Button;