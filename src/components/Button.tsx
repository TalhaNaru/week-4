import type { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};
const variants = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  secondary: 'bg-grey-200 text-gray-900 hover:bg-gray-300',
};

export function Button({
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`rounded-md px-4 py-2 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
