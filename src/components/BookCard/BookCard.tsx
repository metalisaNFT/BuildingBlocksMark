import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Book } from '../../types/book';
import { Button } from '../ui/Button';
import { BookHeader } from './BookHeader';
import { BookDetails } from './BookDetails';
import { BookDescription } from './BookDescription';

export const BookCard: React.FC<Book> = ({
  title,
  coverUrl,
  amazonUrl,
  isLatest,
  description,
  readingAge,
  highlights,
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className="book-card relative rounded-lg overflow-hidden shadow-xl bg-white">
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={coverUrl}
          alt={`${title} book cover`}
          className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <BookHeader title={title} isLatest={isLatest} amazonUrl={amazonUrl} />
        <BookDetails readingAge={readingAge} />
        <div className="space-y-3">
          <BookDescription
            description={description}
            highlights={highlights}
            isExpanded={isExpanded}
            onToggle={() => setIsExpanded(!isExpanded)}
          />
          
          {amazonUrl && (
            <Button
              href={amazonUrl}
              variant="secondary"
              external
              className="w-full justify-center"
            >
              <ShoppingCart size={20} />
              Buy on Amazon
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};