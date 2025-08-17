import React from 'react';

interface LogoTitleProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const LogoTitle: React.FC<LogoTitleProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-3xl',
    lg: 'text-4xl'
  };

  return (
    <div className={`font-serif font-bold ${sizeClasses[size]} ${className}`}>
      <span className="text-[#B85450]">PYREN</span>
      <span className="text-[#4A90E2]">MUN</span>
    </div>  
  );
};

export default LogoTitle;
