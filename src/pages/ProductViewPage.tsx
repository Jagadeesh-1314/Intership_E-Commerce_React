import { useParams } from 'react-router-dom';
import ProductDetails from '../components/products/ProductDetails';
import RelatedProducts from '../components/products/RelatedProducts';

export default function ProductViewPage() {
  const { id } = useParams();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <ProductDetails productId={id} />
      <RelatedProducts productId={id} />
    </div>
  );
}