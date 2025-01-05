import React from 'react';
import { BookGrid } from './BookGrid';
import { CollectionIntro } from './CollectionIntro';

export const BookCollection: React.FC = () => {
  return (
    <section id="books" className="py-20 px-4 bg-cream">
      <div className="max-w-6xl mx-auto">
        <CollectionIntro />
        <BookGrid />
      </div>
    </section>
  );
};