import React from 'react';
import { Heart, BookOpen, Lightbulb } from 'lucide-react';
import { ValueCard } from './ValueCard';

export const AboutUs: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-montserrat font-bold text-navy mb-6">
            About Mark Baranov
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            A father, educator, and self-published author dedicated to nurturing young minds through gentle wisdom and heartfelt storytelling.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://pbs.twimg.com/profile_images/1834163874272006145/q1P6qCdC_400x400.jpg"
              alt="Father reading to children"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              As a father, Mark discovered that the most profound teaching moments came not from instruction, but from connection. Through bedtime stories and daily conversations with his own children, he witnessed how gentle guidance and emotional understanding could shape young minds.
            </p>
            <p className="text-lg text-gray-700">
              This revelation inspired the Building Blocks of Bravery series—a collection of stories that help children navigate life's challenges with confidence and compassion. Each book is crafted to spark meaningful conversations between parents and children, fostering emotional intelligence and resilience.
            </p>
            <p className="text-lg text-gray-700">
              Mark's journey into self-publishing emerged from his desire to share these valuable lessons with families worldwide, proving that the most impactful stories come from the heart.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <ValueCard
            icon={Heart}
            title="Gentle Teaching"
            description="Believing in the power of calm, understanding approaches to help children learn and grow"
          />
          <ValueCard
            icon={BookOpen}
            title="Storytelling"
            description="Using engaging narratives to convey important life lessons in a way children can understand and remember"
          />
          <ValueCard
            icon={Lightbulb}
            title="Emotional Intelligence"
            description="Helping young readers develop empathy, resilience, and self-awareness through relatable stories"
          />
        </div>
      </div>
    </section>
  );
};