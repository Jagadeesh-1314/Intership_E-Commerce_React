import React from 'react';

export default function AboutContent() {
  return (
    <div className="space-y-8">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About ModernShop</h1>
        <p className="text-gray-600">
          We're dedicated to providing the best shopping experience with carefully curated products
          and exceptional customer service.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative aspect-video rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
            alt="Our store"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Our Story</h2>
          <p className="text-gray-600">
            Founded in 2024, ModernShop has grown from a small startup to a leading e-commerce
            destination. We believe in quality, innovation, and customer satisfaction.
          </p>
          <p className="text-gray-600">
            Our mission is to make quality products accessible to everyone while providing
            an exceptional shopping experience.
          </p>
        </div>
      </div>
    </div>
  );
}