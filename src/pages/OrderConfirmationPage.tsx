import { useParams } from 'react-router-dom';
import OrderStatus from '../components/orders/OrderStatus';

export default function OrderConfirmationPage() {
  const { orderId } = useParams();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <OrderStatus orderId={orderId} />
    </div>
  );
}