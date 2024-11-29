interface ProductFeaturesProps {
  features: string[];
}

const ProductFeatures = ({ features }: ProductFeaturesProps) => {
  if (!features?.length) return null;

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-amazon-dark">Key Features</h2>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-gray-600">
            <span className="text-amazon-orange text-xl">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductFeatures;