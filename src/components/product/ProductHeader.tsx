import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { Product } from "@/types/product";

interface ProductHeaderProps {
  product: Product;
}

const ProductHeader = ({ product }: ProductHeaderProps) => {
  const discountedPrice = product.discount
    ? product.price * (1 - product.discount / 100)
    : product.price;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <span className="px-3 py-1 bg-amazon-orange/10 text-amazon-orange rounded-full text-sm font-medium">
          {product.category}
        </span>
        {product.discount && (
          <Badge className="bg-amazon-orange text-black font-bold">
            {product.discount}% OFF
          </Badge>
        )}
      </div>
      
      <h1 className="text-3xl font-bold text-amazon-dark">{product.title}</h1>
      
      <div className="flex items-center gap-3">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${
                i < Math.floor(product.rating)
                  ? "text-amazon-yellow fill-current"
                  : "text-gray-300"
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
    </div>
  );
};

export default ProductHeader;