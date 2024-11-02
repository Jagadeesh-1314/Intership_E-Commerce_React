import { CheckCircle } from 'lucide-react';

interface OrderStatusProps {
  orderId: string | undefined;
}

export default function OrderStatus({ orderId }: OrderStatusProps) {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <div className="card p-8 space-y-6">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
        <h1 className="text-3xl font-bold text-gray-900">Order Confirmed!</h1>
        <p className="text-gray-600">
          Thank you for your purchase. Your order number is:
        </p>
        <p className="text-2xl font-semibold text-indigo-600">#{orderId}</p>
        <p className="text-gray-600">
          We'll send you an email with your order details and tracking information.
        </p>
      </div>
    </div>
  );
}