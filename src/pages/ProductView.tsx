import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, X, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductImageGallery from '@/components/ProductImageGallery';
import ProductReviews from '@/components/ProductReviews';
import { Separator } from '@/components/ui/separator';
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

  // Update document title for SEO
  useEffect(() => {
    document.title = `${product.title} - Best Price & Reviews`;
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', `${product.description.slice(0, 155)}...`);
    }
  }, [product.title, product.description]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 overflow-y-auto"
    >
      <Button
        variant="ghost"
        size="icon"
        className="fixed right-4 top-4 z-50 bg-white/80 hover:bg-white shadow-md"
        onClick={() => navigate('/')}
      >
        <X className="h-5 w-5" />
      </Button>

      <div className="container-padding py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <article className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 p-8">
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
                  <span className="inline-block px-3 py-1 bg-amazon-orange/10 text-amazon-orange rounded-full text-sm font-medium">
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
                        className={`h-4 w-4 ${
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
                  className="w-full bg-amazon-yellow hover:bg-amazon-orange text-black font-semibold"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  View on Amazon
                </Button>

                <Separator className="my-6" />

                <div className="prose prose-sm max-w-none">
                  <h2 className="text-xl font-semibold mb-3">Product Description</h2>
                  <p className="text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Key Features</h2>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-600">
                        <span className="text-amazon-orange">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Technical Specifications</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key} className="space-y-1">
                        <dt className="text-sm text-gray-500 capitalize">{key}</dt>
                        <dd className="font-medium text-amazon-dark">{value}</dd>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="border-t border-gray-100 p-8">
              <ProductReviews reviews={product.reviews} />
            </div>
          </article>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductView;