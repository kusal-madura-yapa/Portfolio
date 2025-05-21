import React from 'react';

interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ placeholder, value, onChange, className, type = 'text' }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`border border-gray-300 p-2 rounded ${className}`}
    />
  );
};

export default Input;
