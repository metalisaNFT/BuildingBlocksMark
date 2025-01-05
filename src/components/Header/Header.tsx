import React from 'react';
import { BookOpen } from 'lucide-react';
import { Button } from '../ui/Button';
import { Logo } from '../ui/Logo';
import { OrderButtonGroup } from '../ui/OrderButtons';
import { useGradientEffect } from './useGradientEffect';
import { FallingCubes } from './FallingCubes';
import { AnimatedText } from './AnimatedText';

export const Header: React.FC = () => {
  const headerRef = useGradientEffect();

  return (
    <header ref={headerRef} className="animated-gradient text-white py-24 px-4 relative min-h-[80vh]">
      <FallingCubes />
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-12">
          <Logo className="w-32 h-32 mx-auto" />
        </div>
        <div className="space-y-6 mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-bold leading-tight">
            <AnimatedText>Building Blocks of Bravery</AnimatedText>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-montserrat">
            <AnimatedText>by Mark Baranov</AnimatedText>
          </p>
        </div>
        <div className="flex flex-col items-center gap-6">
          <OrderButtonGroup />
          <Button href="#books" variant="primary">
            <BookOpen size={20} />
            Explore Books
          </Button>
        </div>
      </div>
    </header>
  );
};