import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const ValueCard: React.FC<ValueCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="text-center p-6 rounded-lg bg-cream">
      <div className="inline-block p-3 bg-peach rounded-full mb-4">
        <Icon size={24} className="text-navy" />
      </div>
      <h3 className="text-xl font-montserrat font-semibold text-navy mb-3">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};