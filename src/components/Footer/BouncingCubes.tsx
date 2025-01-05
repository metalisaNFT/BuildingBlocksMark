import React from 'react';
import { useBouncingCubes } from './useBouncingCubes';

export const BouncingCubes: React.FC = () => {
  const cubes = useBouncingCubes(20); // Generate 20 bouncing cubes

  return (
    <div 
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {cubes.map((cube, index) => (
        <div
          key={index}
          className="bouncing-cube absolute"
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