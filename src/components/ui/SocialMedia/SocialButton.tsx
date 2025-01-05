import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SocialButtonProps {
  href: string;
  icon: LucideIcon;
  label: string;
  className?: string;
}

export const SocialButton: React.FC<SocialButtonProps> = ({
  href,
  icon: Icon,
  label,
  className = '',
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-peach hover:text-lightPeach transition-colors p-2 ${className}`}
      aria-label={label}
    >
      <Icon size={24} />
    </a>
  );
};