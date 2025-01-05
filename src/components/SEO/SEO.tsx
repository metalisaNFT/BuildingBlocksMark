import React from 'react';
import { BasicMeta } from './BasicMeta';
import { OpenGraph } from './OpenGraph';
import { TwitterCard } from './TwitterCard';
import { SchemaOrg } from './SchemaOrg';
import { SEOProps } from './types';
import { books } from '../../data/books';

export const SEO: React.FC<SEOProps> = (props) => {
  const bookSeries = {
    name: "Building Blocks of Bravery",
    books: books.map(book => ({
      title: book.title,
      author: "Mark Baranov",
      datePublished: "2024",
      description: book.description,
      image: book.coverUrl,
      url: book.amazonUrl || "",
      readingAge: book.readingAge
    }))
  };

  return (
    <>
      <BasicMeta {...props} />
      <OpenGraph {...props} />
      <TwitterCard {...props} />
      <SchemaOrg {...props} bookSeries={bookSeries} />
    </>
  );
};