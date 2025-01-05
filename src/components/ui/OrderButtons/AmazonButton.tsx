import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Button } from '../Button';

interface AmazonButtonProps {
  className?: string;
}

export const AmazonButton: React.FC<AmazonButtonProps> = ({ className }) => {
  return (
    <Button
      href="https://www.amazon.com/dp/B0DM6WY44Q?binding=paperback&ref=dbs_dp_rwt_sb_pc_tpbk"
      variant="primary"
      external
      className={className}
    >
      <ShoppingCart size={20} />
      Amazon Store
    </Button>
  );
};