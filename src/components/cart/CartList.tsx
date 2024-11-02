import React from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';
import type { CartItem } from '../../types';

// Mock data - replace with actual cart state management
const cartItems: CartItem[] = [
  {
    id: 1,
    title: 'Wireless Earbuds Pro',
    price: 199.99,
    quantity: 1,
    description: '',
    category: '',
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=500&q=80',
    rating: { rate: 4.8, count: 120 },
  },
  // Add more items...
];

export default function CartList() {
  return (
    <div className="space-y-4">
      {cartItems.map((item) => (
        <div key={item.id} className="card p-4 flex items-center space-x-4">
          <img
            src={item.image}
            alt={item.title}
            className="w-24 h-24 object-cover rounded-lg"
          />
          <div className="flex-grow">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-600">${item.price}</p>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-1 hover:bg-gray-100 rounded">
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-8 text-center">{item.quantity}</span>
            <button className="p-1 hover:bg-gray-100 rounded">
              <Plus className="w-4 h-4" />
            </button>
          </div>
          <button className="text-red-500 hover:text-red-600">
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      ))}
    </div>
  );
}