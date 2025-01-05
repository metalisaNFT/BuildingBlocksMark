import { useMemo } from 'react';

interface BouncingCube {
  x: number;
  size: number;
  delay: number;
  duration: number;
}

export const useBouncingCubes = (count: number): BouncingCube[] => {
  return useMemo(() => {
    return Array.from({ length: count }, () => ({
      x: Math.random() * 100,
      size: Math.random() * 15 + 5, // 5-20px
      delay: Math.random() * 2,
      duration: Math.random() * 2 + 3, // 3-5s for a slower, more graceful fall
    }));
  }, [count]);
};