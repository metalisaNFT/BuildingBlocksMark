import React from 'react';

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ children, className = '' }) => {
  return (
    <span className={`animated-text ${className}`}>
      {children}
    </span>
  );
};