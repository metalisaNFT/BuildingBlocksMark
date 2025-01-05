import React from 'react';
import { Star, StarHalf, Loader2 } from 'lucide-react';
import { useAmazonRating } from '../../../hooks/useAmazonRating';

interface StarRatingProps {
  asin: string;
  className?: string;
}

export const StarRating: React.FC<StarRatingProps> = ({ asin, className = '' }) => {
  const { rating, loading, error } = useAmazonRating(asin);

  if (loading) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <Loader2 size={16} className="animate-spin text-gray-400" />
        <span className="text-sm text-gray-400">Loading rating...</span>
      </div>
    );
  }

  if (error || !rating) {
    return null;
  }

  const { stars, count } = rating;
  const fullStars = Math.floor(stars);
  const hasHalfStar = stars % 1 >= 0.5;
  
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex">
        {[...Array(fullStars)].map((_, i) => (
          <Star
            key={`full-${i}`}
            size={16}
            className="text-yellow-400 fill-current"
          />
        ))}
        {hasHalfStar && (
          <StarHalf
            size={16}
            className="text-yellow-400 fill-current"
          />
        )}
        {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
          <Star
            key={`empty-${i}`}
            size={16}
            className="text-gray-300"
          />
        ))}
      </div>
      <span className="text-sm text-gray-600">({count})</span>
    </div>
  );
};