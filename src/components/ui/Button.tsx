import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  href: string;
  variant: 'primary' | 'secondary' | 'outline';
  external?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant,
  external,
  className = '',
}) => {
  const baseClasses = 'px-6 py-3 rounded-full flex items-center gap-2 transition-colors';
  const variantClasses = {
    primary: 'bg-peach text-navy hover:bg-lightPeach',
    secondary: 'bg-navy text-white hover:bg-opacity-90',
    outline: 'bg-transparent border-2 border-peach text-peach hover:bg-peach/10',
  };

  const externalProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <a
      href={href}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...externalProps}
    >
      {children}
    </a>
  );
};