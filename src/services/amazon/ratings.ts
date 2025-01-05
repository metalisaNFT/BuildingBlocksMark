import { AmazonRating, AmazonRatingCache } from './types';
import { books } from '../../data/books';
import { getAsinFromUrl } from '../../utils/amazon';

const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours
const CACHE_KEY = 'amazon_ratings_cache';

export async function fetchAmazonRating(asin: string): Promise<AmazonRating | null> {
  try {
    // Check cache first
    const cachedRating = getRatingFromCache(asin);
    if (cachedRating) {
      return cachedRating;
    }

    // Find book by ASIN
    const book = books.find(book => book.amazonUrl && getAsinFromUrl(book.amazonUrl) === asin);
    
    if (!book?.rating) {
      return null;
    }

    const rating: AmazonRating = {
      asin,
      stars: book.rating.stars,
      count: book.rating.count
    };
    
    // Cache the result
    cacheRating(asin, rating);
    
    return rating;
  } catch (error) {
    console.error('Error fetching Amazon rating:', error);
    return null;
  }
}

function getRatingFromCache(asin: string): AmazonRating | null {
  try {
    const cache = loadCache();
    const cachedData = cache[asin];
    
    if (!cachedData) return null;
    
    // Check if cache is expired
    if (Date.now() - cachedData.timestamp > CACHE_DURATION) {
      delete cache[asin];
      saveCache(cache);
      return null;
    }
    
    return cachedData.rating;
  } catch (error) {
    console.error('Error reading from cache:', error);
    return null;
  }
}

function cacheRating(asin: string, rating: AmazonRating): void {
  try {
    const cache = loadCache();
    cache[asin] = {
      rating,
      timestamp: Date.now()
    };
    saveCache(cache);
  } catch (error) {
    console.error('Error caching rating:', error);
  }
}

function loadCache(): AmazonRatingCache {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    return cached ? JSON.parse(cached) : {};
  } catch {
    return {};
  }
}

function saveCache(cache: AmazonRatingCache): void {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
  } catch (error) {
    console.error('Error saving cache:', error);
  }
}