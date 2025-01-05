import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SEOProps } from './types';
import { defaultSEOConfig } from './config';

export const SchemaOrg: React.FC<SEOProps> = ({
  title = defaultSEOConfig.title,
  description = defaultSEOConfig.description,
  url = defaultSEOConfig.url,
  author = defaultSEOConfig.author,
  image = defaultSEOConfig.image,
  bookSeries
}) => {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Building Blocks of Bravery",
    url,
    description,
    author: {
      "@type": "Person",
      name: author,
      sameAs: [
        "https://www.amazon.com/stores/Mark-Baranov/author/B0DM6WY44Q",
        "https://twitter.com/braveryblocks",
        "https://facebook.com/buildingblocksofbravery",
        "https://instagram.com/buildingblocksofbravery"
      ]
    }
  };

  const bookSeriesSchema = bookSeries ? {
    "@context": "https://schema.org",
    "@type": "BookSeries",
    name: bookSeries.name,
    author: {
      "@type": "Person",
      name: author
    },
    url: url,
    workExample: bookSeries.books.map(book => ({
      "@type": "Book",
      "@id": book.url,
      name: book.title,
      author: {
        "@type": "Person",
        name: book.author
      },
      isbn: book.isbn,
      datePublished: book.datePublished,
      description: book.description,
      image: book.image,
      url: book.url,
      publisher: {
        "@type": "Person",
        name: book.author
      },
      ...(book.price && {
        offers: {
          "@type": "Offer",
          price: book.price,
          priceCurrency: "USD",
          availability: "https://schema.org/InStock"
        }
      }),
      audience: {
        "@type": "PeopleAudience",
        suggestedMinAge: book.readingAge.split('-')[0].trim(),
        suggestedMaxAge: book.readingAge.split('-')[1].trim().split(' ')[0]
      }
    }))
  } : null;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      {bookSeriesSchema && (
        <script type="application/ld+json">
          {JSON.stringify(bookSeriesSchema)}
        </script>
      )}
    </Helmet>
  );
};