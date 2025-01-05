import React from 'react';
import { ReviewCard } from './ReviewCard';
import { reviews } from '../../data/reviews';
import { MessageSquare } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <MessageSquare size={48} className="text-navy" />
          </div>
          <h2 className="text-4xl font-montserrat font-bold text-navy mb-6">
            Reader Reviews
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Discover what families are saying about the Building Blocks of Bravery series
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map(review => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}