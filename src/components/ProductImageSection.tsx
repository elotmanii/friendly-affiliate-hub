import { motion } from "framer-motion";
import ProductImageGallery from "./ProductImageGallery";
import { Badge } from "./ui/badge";
import { Product } from "@/types/product";

interface ProductImageSectionProps {
  product: Product;
}

const ProductImageSection = ({ product }: ProductImageSectionProps) => {
  return (
    <div className="relative">
      {product.discount && (
        <Badge className="absolute top-4 right-4 z-10 bg-amazon-orange text-black font-bold text-lg px-4 py-2 shadow-lg">
          {product.discount}% OFF
        </Badge>
      )}
      <ProductImageGallery
        images={product.images || [product.image]}
        title={product.title}
      />
    </div>
  );
};

export default ProductImageSection;