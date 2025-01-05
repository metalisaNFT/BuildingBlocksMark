import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SEOProps } from './types';
import { defaultSEOConfig } from './config';

export const BasicMeta: React.FC<SEOProps> = ({
  title = defaultSEOConfig.title,
  description = defaultSEOConfig.description,
  url = defaultSEOConfig.url,
  author = defaultSEOConfig.author,
}) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={url} />
    <meta name="author" content={author} />
    <meta name="keywords" content={defaultSEOConfig.keywords} />
    <meta name="robots" content="index, follow" />
    <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
    <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
    <link rel="alternate" type="application/rss+xml" title={`${title} RSS Feed`} href={`${url}/rss.xml`} />
  </Helmet>
);