import React from 'react';

interface BookCardProps {
  title: string;
  coverUrl: string;
  isLatest?: boolean;
}

export const BookCard: React.FC<BookCardProps> = ({ title, coverUrl, isLatest }) => {
  return (
    <div className={`book-card relative rounded-lg overflow-hidden shadow-xl 
      ${isLatest ? 'md:col-span-2 md:row-span-2' : ''}`}>
      <img
        src={coverUrl}
        alt={`${title} book cover`}
        className="w-full h-64 object-cover"
      />
      <div className="p-4 bg-white">
        <h3 className="text-xl text-navy font-englebert">{title}</h3>
        {isLatest && (
          <span className="absolute top-4 right-4 bg-peach text-navy px-3 py-1 rounded-full">
            Latest Release
          </span>
        )}
      </div>
    </div>
  );
};