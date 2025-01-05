import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SEOProps } from './types';
import { defaultSEOConfig } from './config';

export const OpenGraph: React.FC<SEOProps> = ({
  title = defaultSEOConfig.title,
  description = defaultSEOConfig.description,
  image = defaultSEOConfig.image,
  url = defaultSEOConfig.url,
  type = defaultSEOConfig.type,
  publishedTime,
  modifiedTime,
  author = defaultSEOConfig.author,
}) => (
  <Helmet>
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:url" content={url} />
    <meta property="og:type" content={type} />
    <meta property="og:site_name" content="Building Blocks of Bravery" />
    <meta property="og:locale" content="en_US" />
    {publishedTime && <meta property="article:published_time" content={publishedTime} />}
    {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
    {author && <meta property="article:author" content={author} />}
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
  </Helmet>
);