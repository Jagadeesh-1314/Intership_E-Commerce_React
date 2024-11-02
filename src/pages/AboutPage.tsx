import React from 'react';
import AboutContent from '../components/about/AbountContent';
import Features from '../components/home/Features';
import Testimonials from '../components/about/Testimonial';

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <AboutContent />
      <Features />
      <Testimonials />
    </div>
  );
}