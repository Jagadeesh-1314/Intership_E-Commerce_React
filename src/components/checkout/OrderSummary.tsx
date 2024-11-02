import type { CartItem } from '../../types';

// Mock data - replace with actual cart state
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
];

export default function OrderSummary() {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 10;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  return (
    <div className="card p-6 space-y-6">
      <h2 className="text-xl font-semibold">Order Summary</h2>
      
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center space-x-4">
            <img
              src={item.image}
              alt={item.title}
              className="w-16 h-16 object-cover rounded"
            />
            <div className="flex-grow">
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-gray-600">Quantity: {item.quantity}</p>
            </div>
            <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
      </div>

      <div className="border-t pt-4 space-y-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="border-t pt-2">
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}