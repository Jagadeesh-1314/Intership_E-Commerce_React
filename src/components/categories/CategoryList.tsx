import React from 'react';
import { Link } from 'react-router-dom';
import type { Category } from '../../types';

const categories: Category[] = [
  {
    id: 1,
    name: 'Electronics',
    description: 'Latest gadgets and electronic devices',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 2,
    name: 'Fashion',
    description: 'Trendy clothing and accessories',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=500&q=80',
  },
  // Add more categories...
];

export default function CategoryList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category) => (
        <Link
          key={category.id}
          to={`/products?category=${category.name.toLowerCase()}`}
          className="group"
        >
          <div className="card overflow-hidden">
            <div className="relative aspect-video">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">{category.name}</h3>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-600">{category.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}