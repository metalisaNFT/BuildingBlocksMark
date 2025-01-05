import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SEOProps } from './types';
import { defaultSEOConfig } from './config';

export const TwitterCard: React.FC<SEOProps> = ({
  title = defaultSEOConfig.title,
  description = defaultSEOConfig.description,
  image = defaultSEOConfig.image,
  author = defaultSEOConfig.author,
}) => (
  <Helmet>
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
    <meta name="twitter:creator" content={`@${author.replace(/\s+/g, '')}`} />
    <meta name="twitter:site" content="@braveryblocks" />
  </Helmet>
);