import { motion } from 'framer-motion';
import { Product } from '../types/product';

interface HeroPreviewCardsProps {
  products: Product[];
}

const HeroPreviewCards = ({ products }: HeroPreviewCardsProps) => {
  return (
    <div className="mt-8 grid grid-cols-2 gap-4">
      {products.slice(0, 2).map((product) => (
        <motion.div
          key={product.id}
          whileHover={{ scale: 1.02 }}
          className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10"
        >
          <img src={product.image} alt={product.title} className="w-full h-32 object-cover rounded-md mb-3" />
          <h3 className="text-white text-sm font-medium truncate">{product.title}</h3>
          <p className="text-amazon-orange font-bold mt-1">${product.price}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default HeroPreviewCards;