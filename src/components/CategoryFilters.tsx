import { motion } from 'framer-motion';
import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group';
import { Tag } from 'lucide-react';

interface CategoryFiltersProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilters = ({ categories, selectedCategory, onCategoryChange }: CategoryFiltersProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-3xl mx-auto mb-8"
    >
      <ToggleGroup
        type="single"
        value={selectedCategory}
        onValueChange={(value) => onCategoryChange(value || 'all')}
        className="justify-center flex-wrap gap-2 p-2 bg-white rounded-lg shadow-sm"
      >
        <ToggleGroupItem
          value="all"
          className="px-4 py-2 rounded-md data-[state=on]:bg-amazon-orange data-[state=on]:text-white transition-all"
        >
          <Tag className="w-4 h-4 mr-2" />
          All Products
        </ToggleGroupItem>
        {categories.map((category) => (
          <ToggleGroupItem
            key={category}
            value={category}
            className="px-4 py-2 rounded-md data-[state=on]:bg-amazon-orange data-[state=on]:text-white transition-all"
          >
            {category}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </motion.div>
  );
};

export default CategoryFilters;