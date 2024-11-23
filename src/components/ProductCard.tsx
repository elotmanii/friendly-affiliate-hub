import { motion } from 'framer-motion';
import { Star, ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';

interface ProductCardProps {
  product: {
    id: number;
    title: string;
    price: number;
    rating: number;
    image: string;
    category: string;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="product-card"
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
      </div>
      <div className="p-4 sm:p-6">
        <div className="text-sm text-gray-500 mb-2">{product.category}</div>
        <h3 className="text-base sm:text-lg font-semibold mb-2 line-clamp-2">{product.title}</h3>
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-amazon-yellow fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">{product.rating}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-lg sm:text-xl font-bold text-amazon-dark">${product.price}</span>
          <Button size="sm" className="bg-amazon-yellow hover:bg-amazon-orange text-black">
            <ShoppingCart className="h-4 w-4 mr-2" />
            View on Amazon
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;