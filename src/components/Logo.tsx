
import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg'
  };

  return (
    <div className={`relative flex items-center justify-center ${sizeClasses[size]} ${className}`}>
      <div className="absolute inset-0 bg-primary/10 rounded-lg animate-pulse"></div>
      <div className="relative flex items-center justify-center font-bold rounded-lg bg-gradient-to-br from-primary/90 to-primary/70 text-white w-full h-full shadow-lg">
        KC
      </div>
    </div>
  );
};

export default Logo;
