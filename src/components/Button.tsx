import { ButtonVariant } from '@/types/button-variant';
import React from 'react';
import classnames from 'classnames';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  loading?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
  danger: 'bg-red-600 text-white hover:bg-red-700',
  ghost: 'bg-transparent text-gray-700 hover:bg-gray-100',
  success: 'bg-green-600 text-white hover:bg-green-700',
  warning: 'bg-yellow-400 text-gray-900 hover:bg-yellow-500',
};

export const Button: React.FC<IButtonProps> = ({
  children,
  variant,
  className,
  loading,
  disabled,
  value,
  ...props
}) => {
  return (
    <>
      <button
        {...props}
        disabled={loading || disabled}
        className={classnames(
          'px-4 py-2 rounded-md font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed',
          variant && variantStyles[variant],
          className
        )}
      >
        {value}
      </button>
    </>
  );
};
