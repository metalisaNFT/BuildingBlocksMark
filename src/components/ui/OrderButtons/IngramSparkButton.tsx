import React from 'react';
import { BookOpen } from 'lucide-react';
import { Button } from '../Button';

interface IngramSparkButtonProps {
  className?: string;
}

export const IngramSparkButton: React.FC<IngramSparkButtonProps> = ({ className }) => {
  return (
    <Button
      href="https://www.ingramspark.com/"
      variant="primary"
      external
      className={className}
    >
      <BookOpen size={20} />
      IngramSpark
    </Button>
  );
};