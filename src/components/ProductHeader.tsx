import { Star } from 'lucide-react';
import { Badge } from './ui/badge';
import { Product } from '@/types/product';

interface ProductHeaderProps {
  product: Product;
  discountedPrice: number;
}

const ProductHeader = ({ product, discountedPrice }: ProductHeaderProps) => {
  return (
    <>
      <div>
        <span className="inline-block px-3 py-1 bg-amazon-orange/10 text-amazon-orange rounded-full text-sm font-medium">
          {product.category}
        </span>
        <h1 className="text-3xl font-bold text-amazon-dark mt-2">
          {product.title}
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${
                i < Math.floor(product.rating)
                  ? 'text-amazon-yellow fill-current'
                  : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        <span className="text-lg font-medium text-amazon-dark">
          {product.rating} rating
        </span>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-3xl font-bold text-amazon-dark">
          ${discountedPrice.toFixed(2)}
        </span>
        {product.discount && (
          <span className="text-xl text-gray-500 line-through">
            ${product.price.toFixed(2)}
          </span>
        )}
      </div>
    </>
  );
};

export default ProductHeader;