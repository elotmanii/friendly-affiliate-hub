import { Product } from '@/types/product';

interface ProductSpecsProps {
  specs: Product['specs'];
}

const ProductSpecs = ({ specs }: ProductSpecsProps) => {
  if (!specs) return null;
  
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-amazon-dark">Technical Specifications</h2>
      <div className="grid grid-cols-2 gap-6">
        {Object.entries(specs).map(([key, value]) => (
          <div key={key} className="space-y-1">
            <dt className="text-gray-500 capitalize">{key}</dt>
            <dd className="font-medium text-amazon-dark">{value}</dd>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSpecs;