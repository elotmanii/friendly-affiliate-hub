import { motion } from 'framer-motion';
import { Product } from '../types/product';
import { Link } from 'react-router-dom';

interface HeroPreviewCardsProps {
  products: Product[];
}

const HeroPreviewCards = ({ products }: HeroPreviewCardsProps) => {
  return (
    <div className="mt-8 grid grid-cols-2 gap-4">
      {products.slice(0, 2).map((product) => (
        <Link to={`/product/${product.id}`} key={product.id}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 group cursor-pointer"
          >
            <div className="relative">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-32 object-cover rounded-md mb-3" 
              />
              <span className="absolute top-2 right-2 bg-amazon-orange text-black text-xs font-bold px-2 py-1 rounded">
                20% OFF
              </span>
            </div>
            <h3 className="text-white text-sm font-medium truncate group-hover:text-amazon-orange transition-colors">
              {product.title}
            </h3>
            <div className="mt-2 flex items-center gap-2">
              <span className="text-amazon-orange font-bold">
                ${(product.price * 0.8).toFixed(2)}
              </span>
              <span className="text-white/60 text-sm line-through">
                ${product.price.toFixed(2)}
              </span>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
};

export default HeroPreviewCards;