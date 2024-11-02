import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Wireless Earbuds Pro',
    price: 199.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 2,
    name: 'Smart Watch Series X',
    price: 299.99,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 3,
    name: 'Premium Noise-Canceling Headphones',
    price: 349.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 4,
    name: 'Ultra HD Action Camera',
    price: 399.99,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=500&q=80',
  },
];

export default function LatestProducts() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Latest Products</h2>
        <Link to="/products" className="text-indigo-600 hover:text-indigo-700 font-semibold">
          View All
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="group"
          >
            <div className="relative overflow-hidden rounded-lg aspect-square mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </span>
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="ml-1 text-gray-600">{product.rating}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}