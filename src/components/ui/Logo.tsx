import React from 'react';
import LogoSvg from './Logo.svg';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <LogoSvg 
      className={`logo-breathe filter drop-shadow-glow ${className}`}
      aria-label="Building Blocks of Bravery Logo"
    />
  );
};