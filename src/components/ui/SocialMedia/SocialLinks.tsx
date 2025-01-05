import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { XIcon } from '../Icons/XIcon';
import { SocialButton } from './SocialButton';

interface SocialLinksProps {
  className?: string;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ className = '' }) => {
  return (
    <div className={`flex justify-center gap-6 ${className}`}>
      <SocialButton
        href="https://www.facebook.com/braveryblocks"
        icon={Facebook}
        label="Follow us on Facebook"
      />
      <SocialButton
        href="https://www.instagram.com/braveryblocks"
        icon={Instagram}
        label="Follow us on Instagram"
      />
      <SocialButton
        href="https://x.com/braveryblocks"
        icon={XIcon}
        label="Follow us on X (formerly Twitter)"
      />
    </div>
  );
};