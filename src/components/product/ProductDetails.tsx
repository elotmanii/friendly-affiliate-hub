import { Product } from "@/types/product";

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  return (
    <div className="space-y-8">
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-semibold text-amazon-dark">
          Product Description
        </h2>
        <p className="text-gray-600 leading-relaxed">
          {product.description}
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-amazon-dark">
          Key Features
        </h2>
        <ul className="space-y-3">
          {product.features?.map((feature, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-gray-600"
            >
              <span className="text-amazon-orange text-xl">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-amazon-dark">
          Technical Specifications
        </h2>
        <div className="grid grid-cols-2 gap-6">
          {product.specs && Object.entries(product.specs).map(([key, value]) => (
            <div key={key} className="space-y-1">
              <dt className="text-gray-500 capitalize">{key}</dt>
              <dd className="font-medium text-amazon-dark">
                {value}
              </dd>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;