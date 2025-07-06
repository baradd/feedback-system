import { InputTypes } from '@/types/inputTypes';
import React from 'react';
export interface InputFieldProps {
  label?: string;
  name: string;
  type?: InputTypes;
  placeholder?: string;
  value?: string;
  className?: string;
  error?: string;
  disabled?: boolean;
  icon: React.ReactNode;

  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export function Input(props: InputFieldProps) {
  const {
    name,
    className,
    label,
    icon,
    type,
    placeholder,
    value,
    error,
    disabled,
    onChange,
    onBlur,
  } = props;

  return (
    <>
      <div className="mb-4">
        {label && (
          <label htmlFor={name} className="block text-sm font-medium mb-1">
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              {icon}
            </span>
          )}

          <input
            id={name}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            disabled={disabled}
            className={`${className} w-full px-3 py-2 border rounded-md text-sm shadow-sm
            ${icon ? 'pl-10' : ''}
            ${error ? 'border-red-500' : 'border-gray-300'}
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
          ></input>
        </div>
        {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
      </div>
    </>
  );
}
