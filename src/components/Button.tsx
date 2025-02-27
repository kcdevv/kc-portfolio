
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  children,
  className,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all focus:outline-none';
  
  const variantClasses = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    outline: 'bg-transparent border border-border hover:bg-secondary',
  };
  
  const sizeClasses = {
    sm: 'text-sm px-3 py-2',
    md: 'px-4 py-2.5',
    lg: 'text-lg px-5 py-3',
  };
  
  const disabledClasses = 'disabled:opacity-70 disabled:pointer-events-none';
  
  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        disabledClasses,
        className
      )}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading && (
        <div className="mr-2 w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
      )}
      {children}
    </button>
  );
};

export default Button;
