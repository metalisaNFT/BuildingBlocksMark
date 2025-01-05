export interface AmazonRating {
  stars: number;
  count: number;
  asin: string;
}

export interface AmazonRatingCache {
  [asin: string]: {
    rating: AmazonRating;
    timestamp: number;
  };
}