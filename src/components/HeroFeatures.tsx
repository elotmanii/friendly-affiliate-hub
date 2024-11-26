import { motion } from 'framer-motion';

interface HeroFeature {
  title: string;
  description: string;
}

interface HeroFeaturesProps {
  features: HeroFeature[];
}

const HeroFeatures = ({ features }: HeroFeaturesProps) => {
  return (
    <div className="grid grid-cols-3 gap-6 pt-8">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="text-center"
        >
          <h3 className="text-lg font-semibold text-amazon-orange mb-1">{feature.title}</h3>
          <p className="text-sm text-gray-300">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default HeroFeatures;