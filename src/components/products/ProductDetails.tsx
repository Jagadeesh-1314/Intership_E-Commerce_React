import React from 'react';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import toast from 'react-hot-toast';

interface ProductDetailsProps {
  productId: string | undefined;
}

// Mock data - replace with actual API call
const product = {
  id: 1,
  title: 'Premium Wireless Earbuds',
  price: 199.99,
  description: 'High-quality wireless earbuds with active noise cancellation...',
  images: [
    'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1574920162043-b872873f19c8?auto=format&fit=crop&w=500&q=80',
  ],
  rating: { rate: 4.8, count: 120 },
};

export default function ProductDetails({ }: ProductDetailsProps) {
  const [selectedImage, setSelectedImage] = React.useState(0);

  const addToCart = () => {
    toast.success('Added to cart!');
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-4">
        <div className="aspect-square overflow-hidden rounded-lg">
          <img
            src={product.images[selectedImage]}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="grid grid-cols-4 gap-4">
          {product.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`aspect-square rounded-lg overflow-hidden border-2 ${
                selectedImage === index ? 'border-indigo-600' : 'border-transparent'
              }`}
            >
              <img src={image} alt={`${product.title} ${index + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="ml-1 text-gray-600">{product.rating.rate}</span>
          </div>
          <span className="text-gray-400">|</span>
          <span className="text-gray-600">{product.rating.count} reviews</span>
        </div>
        <div className="text-3xl font-bold text-gray-900">${product.price}</div>
        <p className="text-gray-600">{product.description}</p>
        
        <div className="flex space-x-4">
          <button onClick={addToCart} className="btn-primary flex items-center space-x-2">
            <ShoppingCart className="w-5 h-5" />
            <span>Add to Cart</span>
          </button>
          <button className="btn-secondary flex items-center space-x-2">
            <Heart className="w-5 h-5" />
            <span>Add to Wishlist</span>
          </button>
        </div>
      </div>
    </div>
  );
}