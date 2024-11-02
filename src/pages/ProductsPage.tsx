import { useState } from 'react';
import ProductList from '../components/products/ProductList';
import ProductFilters from '../components/products/ProductFilters';

export default function ProductsPage() {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <ProductFilters
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />
        <div className="md:col-span-3">
          <ProductList
            priceRange={priceRange}
            selectedCategories={selectedCategories}
          />
        </div>
      </div>
    </div>
  );
}