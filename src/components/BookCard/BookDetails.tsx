import React from 'react';

interface BookDetailsProps {
  readingAge: string;
}

export const BookDetails: React.FC<BookDetailsProps> = ({ readingAge }) => (
  <div className="mb-4">
    <span className="text-sm text-gray-600">Reading age: {readingAge}</span>
  </div>
);