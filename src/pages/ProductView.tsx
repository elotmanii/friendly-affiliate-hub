import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductImageGallery from '@/components/ProductImageGallery';
import ProductReviews from '@/components/ProductReviews';

const ProductView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // For demo purposes, using static data. In a real app, this would come from an API or store
  const product = {
    id: 1,
    title: "Sony WH-1000XM4 Wireless Headphones",
    price: 299.99,
    rating: 4.8,
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
      "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?w=800&q=80",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80"
    ],
    category: "Electronics",
    description: "Industry-leading noise canceling with Dual Noise Sensor technology. Next-level music with Edge-AI, co-developed with Sony Music Studios Tokyo.",
    reviews: [
      {
        id: "1",
        rating: 5,
        author: "John D.",
        date: "2024-02-15",
        verified: true,
        comment: "Best headphones I've ever owned. The noise cancellation is incredible!"
      },
      {
        id: "2",
        rating: 4,
        author: "Sarah M.",
        date: "2024-02-10",
        verified: true,
        comment: "Great sound quality and comfortable for long periods."
      }
    ]
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-background z-50 overflow-y-auto"
    >
      <div className="relative min-h-screen">
        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          className="fixed right-4 top-4 z-50 bg-white/80 hover:bg-white shadow-md"
          onClick={() => navigate('/')}
        >
          <X className="h-5 w-5" />
        </Button>

        <div className="container-padding py-8 md:py-16">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <ProductImageGallery images={product.images} title={product.title} />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
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
              
              <div className="border-t border-gray-100 p-8">
                <ProductReviews reviews={product.reviews} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductView;