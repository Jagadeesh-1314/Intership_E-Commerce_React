
interface ProductFiltersProps {
  priceRange: number[];
  setPriceRange: (range: number[]) => void;
  selectedCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
}

const categories = [
  'Electronics',
  'Clothing',
  'Books',
  'Home & Garden',
  'Sports',
  'Toys',
];

export default function ProductFilters({
  priceRange,
  setPriceRange,
  selectedCategories,
  setSelectedCategories,
}: ProductFiltersProps) {
  const handleCategoryChange = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <div className="space-y-6">
      {/* Price Range Section */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Price Range</h3>
        <div className="px-2">
          <div className="flex items-center space-x-4 mb-4">
            <input
              type="number"
              value={priceRange[0]}
              onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
              className="input-field w-24"
              min="0"
              placeholder="Min"
            />
            <span>to</span>
            <input
              type="number"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
              className="input-field w-24"
              min="0"
              placeholder="Max"
            />
          </div>
          {/* Slider Component - Uncomment if you wish to use it for price range */}
          {/* <Slider
            min={0}
            max={1000}
            value={priceRange}
            onChange={(range) => setPriceRange(range)}
            className="w-full"
          /> */}
        </div>
      </div>

      {/* Categories Section */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
                className="rounded text-indigo-600 focus:ring-indigo-500"
              />
              <span>{category}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
