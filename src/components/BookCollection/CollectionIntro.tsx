import React from 'react';
import { Building2 } from 'lucide-react';

export const CollectionIntro: React.FC = () => {
  return (
    <div className="text-center mb-16 max-w-4xl mx-auto">
      <div className="flex justify-center mb-6">
        <Building2 size={48} className="text-navy" />
      </div>
      <h2 className="text-4xl font-montserrat font-bold text-navy mb-6">
        Building Blocks of Bravery Series
      </h2>
      <div className="space-y-4 text-lg text-gray-700">
        <p>
          Welcome to the "Building Blocks of Bravery" series! This special collection of stories is created 
          to help young readers navigate life's challenges with courage and confidence.
        </p>
        <p>
          Each book explores important themes like resilience, kindness, hope, and self-esteem. Through 
          heartfelt narratives and beautiful illustrations, you'll meet characters who face difficult 
          situations and discover the strength within themselves to overcome them.
        </p>
        <p>
          Just like building blocks, each story adds a new piece to understanding how to be brave, 
          even when things feel tough or uncertain.
        </p>
        <p className="font-montserrat font-semibold text-xl text-navy">
          Let's build our bravery together, one story at a time!
        </p>
      </div>
    </div>
  );
};