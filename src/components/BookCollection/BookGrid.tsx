import React from 'react';
import { BookCard } from '../BookCard/BookCard';
import { books } from '../../data/books';

export const BookGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
      {books.map((book) => (
        <BookCard key={book.title} {...book} />
      ))}
    </div>
  );
};