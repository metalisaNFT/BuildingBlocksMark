import { useMemo } from 'react';

interface Cube {
  x: number;
  size: number;
  delay: number;
  duration: number;
}

export const useRandomCubes = (count: number): Cube[] => {
  return useMemo(() => {
    return Array.from({ length: count }, () => ({
      x: Math.random() * 100,
      size: Math.random() * 20 + 10, // 10-30px
      delay: Math.random() * 2,
      duration: Math.random() * 3 + 4, // 4-7s
    }));
  }, [count]);
};