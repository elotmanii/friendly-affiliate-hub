import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ProductImageGallery from '@/components/ProductImageGallery';
import ProductReviews from '@/components/ProductReviews';
import { ScrollArea } from '@/components/ui/scroll-area';
import AffiliateButtons from '@/components/AffiliateButtons';
import ProductHeader from '@/components/ProductHeader';
import ProductFeatures from '@/components/ProductFeatures';
import ProductSpecs from '@/components/ProductSpecs';
import { useEffect } from 'react';
import { products } from '../data/products';

const ProductView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Product Not Found</h2>
          <Button onClick={() => navigate('/')}>Return to Home</Button>
        </div>
      </div>
    );
  }

  const discountedPrice = product.discount 
    ? product.price * (1 - product.discount / 100)
    : product.price;

  useEffect(() => {
    document.title = `${product.title} - Best Price & Reviews`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', product.description?.slice(0, 155) + '...');
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
            <div className="p-6 bg-gray-50 relative">
              {product.discount && (
                <Badge className="absolute top-8 right-8 z-10 bg-amazon-orange text-black font-bold">
                  {product.discount}% OFF
                </Badge>
              )}
              <ProductImageGallery images={product.images || [product.image]} title={product.title} />
            </div>
            
            <ScrollArea className="h-full border-l border-gray-100">
              <div className="p-6 space-y-6">
                <ProductHeader product={product} discountedPrice={discountedPrice} />

                <AffiliateButtons 
                  affiliateLinks={product.affiliateLinks}
                  className="max-w-md"
                />

                {product.description && (
                  <div className="prose prose-lg max-w-none">
                    <h2 className="text-2xl font-semibold text-amazon-dark">Product Description</h2>
                    <p className="text-gray-600 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                )}

                {product.features && <ProductFeatures features={product.features} />}
                
                {product.specs && <ProductSpecs specs={product.specs} />}

                {product.reviews && product.reviews.length > 0 && (
                  <div className="pt-6">
                    <ProductReviews reviews={product.reviews} />
                  </div>
                )}
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductView;
