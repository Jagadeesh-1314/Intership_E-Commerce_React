import CategoryList from '../components/categories/CategoryList';

export default function CategoryPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Shop by Category</h1>
      <CategoryList />
    </div>
  );
}