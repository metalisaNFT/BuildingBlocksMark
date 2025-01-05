import React, { useEffect, useRef } from 'react';
import { useRandomCubes } from './useRandomCubes';

export const FallingCubes: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cubes = useRandomCubes(15); // Generate 15 random cubes

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {cubes.map((cube, index) => (
        <div
          key={index}
          className="cube absolute"
          style={{
            left: `${cube.x}%`,
            width: `${cube.size}px`,
            height: `${cube.size}px`,
            animationDelay: `${cube.delay}s`,
            animationDuration: `${cube.duration}s`,
          }}
        />
      ))}
    </div>
  );
};