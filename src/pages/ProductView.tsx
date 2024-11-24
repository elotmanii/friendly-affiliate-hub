import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProductView = () => {
  const { id } = useParams();
  
  // For demo purposes, using static data. In a real app, this would come from an API or store
  const product = {
    id: 1,
    title: "Sony WH-1000XM4 Wireless Headphones",
    price: 299.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    category: "Electronics",
    description: "Industry-leading noise canceling with Dual Noise Sensor technology. Next-level music with Edge-AI, co-developed with Sony Music Studios Tokyo."
  };

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container-padding">
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative aspect-square"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <span className="text-amazon-orange text-sm font-medium">
                  {product.category}
                </span>
                <h1 className="text-3xl font-bold text-amazon-dark">
                  {product.title}
                </h1>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center">
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
                <span className="text-gray-600">{product.rating}</span>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed">
                {product.description}
              </p>

              <div className="text-3xl font-bold text-amazon-dark">
                ${product.price.toFixed(2)}
              </div>

              <Button
                size="lg"
                className="w-full bg-amazon-yellow hover:bg-amazon-orange text-black font-semibold"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                View on Amazon
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;