import { motion } from "framer-motion";
import { Product } from "@/types/product";

interface FeaturedCategoriesProps {
  products: Product[];
}

const FeaturedCategories = ({ products }: FeaturedCategoriesProps) => {
  const categories = Array.from(new Set(products.map(product => product.category)));

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
      {categories.map((category, index) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="relative group cursor-pointer overflow-hidden rounded-xl"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-amazon-dark/80 to-transparent z-10" />
          <img
            src={products.find(p => p.category === category)?.image}
            alt={category}
            className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
            <h3 className="text-white font-semibold text-lg">{category}</h3>
            <p className="text-white/80 text-sm">
              {products.filter(p => p.category === category).length} Products
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FeaturedCategories;