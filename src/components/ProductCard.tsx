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
      className="group h-full"
    >
      <div className="product-card h-full flex flex-col">
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <Button className="w-full bg-amazon-yellow hover:bg-amazon-orange text-black font-semibold">
              <ShoppingCart className="h-4 w-4 mr-2" />
              View on Amazon
            </Button>
          </div>
        </div>
        <div className="p-4 flex-grow flex flex-col">
          <div className="text-sm text-amazon-blue font-medium mb-2">{product.category}</div>
          <h3 className="text-lg font-semibold mb-2 line-clamp-2 flex-grow">{product.title}</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
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
            <div className="text-xl font-bold text-amazon-dark">
              ${product.price.toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;