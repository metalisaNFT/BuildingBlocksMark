import React from 'react';
import { Header } from './components/Header/Header';
import { FeaturedBook } from './components/FeaturedBook/FeaturedBook';
import { AboutUs } from './components/AboutUs';
import { BookCollection } from './components/BookCollection/BookCollection';
import { ReviewsSection } from './components/Reviews/ReviewsSection';
import { Footer } from './components/Footer/Footer';
import { SEO } from './components/SEO/SEO';
import { GoogleTagManager } from './components/Analytics/GoogleTagManager';

export default function App() {
  return (
    <>
      <SEO />
      <GoogleTagManager />
      <div className="min-h-screen bg-cream">
        <Header />
        <main>
          <FeaturedBook />
          <AboutUs />
          <BookCollection />
          <ReviewsSection />
        </main>
        <Footer />
      </div>
    </>
  );
}