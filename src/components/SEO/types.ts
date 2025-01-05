export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  bookSeries?: BookSeries;
}

export interface BookSeries {
  name: string;
  books: Book[];
}

export interface Book {
  title: string;
  author: string;
  isbn?: string;
  datePublished: string;
  description: string;
  image: string;
  url: string;
  price?: string;
  readingAge: string;
}