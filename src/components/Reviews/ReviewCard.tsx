import React from 'react';
import { Star } from 'lucide-react';
import { ReviewCardProps } from './types';

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h4 className="text-lg font-semibold text-navy mb-2">{review.title}</h4>
          <div className="flex items-center gap-2 mb-2">
            <div className="flex">
              {[...Array(review.rating)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className="text-yellow-400 fill-current"
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              Reviewed in {review.location} on {review.date}
            </span>
          </div>
          <span className="text-sm font-medium text-gray-700">
            {review.author}
          </span>
        </div>
      </div>
      <p className="text-gray-700">{review.content}</p>
    </div>
  );
}