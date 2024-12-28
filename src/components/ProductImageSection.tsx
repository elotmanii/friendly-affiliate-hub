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
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute left-4 top-4 z-10 rotate-[-4deg]"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-amazon-orange blur-md opacity-40" />
            <Badge className="relative bg-gradient-to-r from-amazon-orange to-amazon-yellow text-black font-bold text-xl px-6 py-3 rounded-xl border-2 border-white shadow-xl">
              {product.discount}% OFF
            </Badge>
          </div>
        </motion.div>
      )}
      <ProductImageGallery
        images={product.images || [product.image]}
        title={product.title}
      />
    </div>
  );
};

export default ProductImageSection;