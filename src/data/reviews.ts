import { Review } from '../types/review';
import { getAsinFromUrl } from '../utils/amazon';
import { books } from './books';

export const reviews: Review[] = [
  {
    id: '1',
    bookId: getAsinFromUrl(books[1].amazonUrl!) || '', // The Mountain I Climbed
    rating: 5,
    title: 'A story with a big heart',
    content: 'I just finished reading The Mountain I Climbed with my kids, and we loved it! The illustrations are beautiful, and the story is an inspiring adventure about perseverance and believing in yourself. The message at the end hit home—that anything is possible with determination and the support of loved ones. I highly recommend this book!',
    author: 'Verified Reader',
    location: 'United States',
    date: 'December 29, 2024'
  },
  {
    id: '2',
    bookId: getAsinFromUrl(books[3].amazonUrl!) || '', // The Tree That Stood Tall
    rating: 5,
    title: 'Good read',
    content: 'A book for older kids. The story is well written and theme is deep but ultimately about strength, perseverance and acceptance. it\'s a story about Willow who is a tree and her journey and finally acceptance of uniqueness. I love the angle at which this was taken. Very creative',
    author: 'Verified Reader',
    location: 'United States',
    date: 'December 20, 2024'
  },
  {
    id: '3',
    bookId: getAsinFromUrl(books[3].amazonUrl!) || '',
    rating: 5,
    title: 'A Heartfelt Reminder to Embrace What Makes Us Unique',
    content: 'We loved this book. It brought back memories of feeling out of place growing up and reminded me how important it is to embrace our differences. The story\'s message of resilience and self-acceptance hit home for me, especially now as I try to teach my grandkids these same lessons. It\'s written in a way that\'s easy to connect with, and the illustrations add so much charm. It\'s a story I\'ll be reading with my grandkids again!',
    author: 'Verified Reader',
    location: 'United States',
    date: 'December 16, 2024'
  },
  {
    id: '4',
    bookId: getAsinFromUrl(books[3].amazonUrl!) || '',
    rating: 5,
    title: 'Good foundation for kids and anyone',
    content: 'Good book on growing self-confidence by knowing your individuality and strengths. Each characteristics has each it own pros and cons. Harness and be proud of yours.',
    author: 'Verified Reader',
    location: 'United States',
    date: 'December 20, 2024'
  },
  {
    id: '5',
    bookId: getAsinFromUrl(books[3].amazonUrl!) || '',
    rating: 5,
    title: 'Great story for the young people',
    content: 'A good children\'s story book. Great storylines. Expert use of language suitable for the young readers. I like the accompanying pictures. They make the story come to life. I highly recommend it.',
    author: 'Verified Reader',
    location: 'United States',
    date: 'December 19, 2024'
  },
  {
    id: '6',
    bookId: getAsinFromUrl(books[3].amazonUrl!) || '',
    rating: 5,
    title: 'An Inspirational Tale',
    content: 'This book had me from start to finish. There are so many valuable lessons in this book and examples that I am sure so many of us can related to. It seems like everyone has had moments in their life when they were doubted or they maybe doubted themselves. This book provides a great story about not giving up, finding your own strengths, and overcoming the odds. Being kind to others is another great lesson this story delivered. The artwork and illustrations were amazing and the author\'s messages at the end added to the inspiration. I am excited to read the other books in this series!',
    author: 'Verified Reader',
    location: 'United States',
    date: 'December 22, 2024'
  }
];