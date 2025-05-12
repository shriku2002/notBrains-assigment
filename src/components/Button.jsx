import React from 'react';
import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  fullWidth = false
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`button ${variant} ${size} ${fullWidth ? 'full-width' : ''} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;