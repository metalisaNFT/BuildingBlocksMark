import React from 'react';
import { OrderButtonGroup } from '../ui/OrderButtons';

export const FeaturedBook: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="https://i.ibb.co/Z6VwBYC/71c-Xz-N4-Lp2-L-SY466.jpg"
              alt="The Tree That Stood Tall"
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-montserrat font-bold text-navy mb-6">
              Latest Release: The Tree That Stood Tall
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Join us on an inspiring journey in the latest addition to the Building Blocks of Bravery series. 
              This heartwarming tale teaches children about resilience, strength, and the power of standing tall 
              in the face of challenges.
            </p>
            <OrderButtonGroup />
          </div>
        </div>
      </div>
    </section>
  );
};