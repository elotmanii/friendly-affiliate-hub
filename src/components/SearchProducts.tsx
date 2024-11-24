import { Search } from 'lucide-react';
import { Input } from './ui/input';

interface SearchProductsProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchProducts = ({ searchQuery, setSearchQuery }: SearchProductsProps) => {
  return (
    <div className="relative max-w-2xl mx-auto">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
      <Input
        type="text"
        placeholder="Search for products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amazon-orange focus:border-transparent"
      />
    </div>
  );
};

export default SearchProducts;