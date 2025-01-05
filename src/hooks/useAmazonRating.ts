import { useState, useEffect } from 'react';
import { fetchAmazonRating } from '../services/amazon/ratings';
import type { AmazonRating } from '../services/amazon/types';

export function useAmazonRating(asin: string) {
  const [rating, setRating] = useState<AmazonRating | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let mounted = true;

    async function loadRating() {
      try {
        setLoading(true);
        const data = await fetchAmazonRating(asin);
        if (mounted) {
          setRating(data);
          setError(null);
        }
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err : new Error('Failed to fetch rating'));
          setRating(null);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadRating();

    return () => {
      mounted = false;
    };
  }, [asin]);

  return { rating, loading, error };
}