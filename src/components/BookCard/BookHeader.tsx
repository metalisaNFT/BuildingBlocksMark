import React from 'react';

interface BookHeaderProps {
  title: string;
  isLatest?: boolean;
}

export const BookHeader: React.FC<BookHeaderProps> = ({ title, isLatest }) => {
  return (
    <div className="space-y-2 mb-4">
      <div className="flex justify-between items-start">
        <h3 className="text-xl text-navy font-englebert">{title}</h3>
        {isLatest && (
          <span className="bg-peach text-navy px-3 py-1 rounded-full text-sm">
            Latest Release
          </span>
        )}
      </div>
    </div>
  );
};