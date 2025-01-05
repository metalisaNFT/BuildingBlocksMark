export interface Book {
  title: string;
  coverUrl: string;
  amazonUrl?: string;
  isLatest?: boolean;
  description: string;
  readingAge: string;
  highlights?: string[];
}