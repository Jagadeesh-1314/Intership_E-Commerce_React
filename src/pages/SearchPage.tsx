import { useSearchParams } from 'react-router-dom';
import SearchResults from '../components/search/SearchResults';

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Search Results for "{query}"</h1>
      <SearchResults query={query} />
    </div>
  );
}