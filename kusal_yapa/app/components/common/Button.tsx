import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <Button
      className={`px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 ${className}`}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default Button;
