import React from 'react';
import { AmazonButton } from './AmazonButton';

interface OrderButtonGroupProps {
  className?: string;
}

export const OrderButtonGroup: React.FC<OrderButtonGroupProps> = ({ className = '' }) => {
  return (
    <div className={`flex flex-wrap justify-center gap-4 ${className}`}>
      <AmazonButton />
    </div>
  );
};