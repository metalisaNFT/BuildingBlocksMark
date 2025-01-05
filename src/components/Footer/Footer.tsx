import React from 'react';
import { OrderButtonGroup } from '../ui/OrderButtons';
import { SocialLinks } from '../ui/SocialMedia';
import { BouncingCubes } from './BouncingCubes';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white py-12 px-4 relative overflow-hidden">
      <BouncingCubes />
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-3xl font-montserrat font-bold mb-6">
          Building Blocks of Bravery
        </h2>
        <p className="text-lightPeach mb-8">
          Inspiring stories for young minds
        </p>
        <OrderButtonGroup className="mb-8" />
        <p className="text-lightPeach mb-8">
          Booksellers and Libraries:
All titles are available worldwide for order through IngramSpark.
        </p>
        <div className="border-t border-peach/20 pt-8 mt-8">
          <SocialLinks className="mb-6" />
          <p className="text-lightPeach">
            © {new Date().getFullYear()} Mark Baranov. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};