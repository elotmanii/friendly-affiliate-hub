import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, X, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductImageGallery from '@/components/ProductImageGallery';
import ProductReviews from '@/components/ProductReviews';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useEffect } from 'react';

const ProductView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // For demo purposes, using static data
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
    description: "Industry-leading noise canceling with Dual Noise Sensor technology. Next-level music with Edge-AI, co-developed with Sony Music Studios Tokyo. Up to 30-hour battery life with quick charging (10 min charge for 5 hours of playback).",
    features: [
      "Industry-leading noise cancellation",
      "Exceptional sound quality with LDAC technology",
      "Multipoint connection for seamless device switching",
      "Touch sensor controls for easy operation",
      "Speak-to-chat technology automatically reduces volume during conversations"
    ],
    specs: {
      batteryLife: "30 hours",
      connectivity: "Bluetooth 5.0",
      weight: "254g",
      color: "Black"
    },
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

  useEffect(() => {
    document.title = `${product.title} - Best Price & Reviews`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', product.description.slice(0, 155) + '...');
    }
  }, [product.title, product.description]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 overflow-hidden"
    >
      <Button
        variant="ghost"
        size="icon"
        className="fixed right-4 top-4 z-50 bg-white/80 hover:bg-white shadow-md rounded-full"
        onClick={() => navigate('/')}
      >
        <X className="h-5 w-5" />
      </Button>

      <div className="container-padding h-screen py-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[400px_1fr] h-full">
            <div className="p-6 bg-gray-50">
              <ProductImageGallery images={product.images} title={product.title} />
            </div>
            
            <ScrollArea className="h-full border-l border-gray-100">
              <div className="p-6 space-y-6">
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

                <div className="text-3xl font-bold text-amazon-dark">
                  ${product.price.toFixed(2)}
                </div>

                <Button
                  size="lg"
                  className="w-full bg-amazon-yellow hover:bg-amazon-orange text-black font-semibold h-14 text-lg"
                >
                  <ShoppingCart className="h-6 w-6 mr-2" />
                  View on Amazon
                </Button>

                <div className="prose prose-lg max-w-none">
                  <h2 className="text-2xl font-semibold text-amazon-dark">Product Description</h2>
                  <p className="text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-amazon-dark">Key Features</h2>
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-600">
                        <span className="text-amazon-orange text-xl">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-amazon-dark">Technical Specifications</h2>
                  <div className="grid grid-cols-2 gap-6">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key} className="space-y-1">
                        <dt className="text-gray-500 capitalize">{key}</dt>
                        <dd className="font-medium text-amazon-dark">{value}</dd>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <ProductReviews reviews={product.reviews} />
                </div>
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductView;