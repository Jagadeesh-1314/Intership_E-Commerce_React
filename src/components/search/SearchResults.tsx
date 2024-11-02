import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import type { Product } from '../../types';

interface SearchResultsProps {
  query: string;
}

// Mock data - replace with actual search functionality
const products: Product[] = [
  {
    id: 1,
    title: 'Wireless Earbuds Pro',
    price: 199.99,
    description: 'Premium wireless earbuds with noise cancellation',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=500&q=80',
    rating: { rate: 4.8, count: 120 },
  },
  // Add more products...
];

export default function SearchResults({ query }: SearchResultsProps) {
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  if (filteredProducts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No products found matching "{query}"</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {filteredProducts.map((product) => (
        <Link key={product.id} to={`/products/${product.id}`} className="group">
          <div className="card hover:shadow-lg transition-shadow duration-200">
            <div className="relative aspect-square overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-200"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.title}</h3>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-gray-900">${product.price}</span>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-1 text-gray-600">{product.rating.rate}</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}