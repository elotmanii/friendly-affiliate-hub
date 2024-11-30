import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductImageGallery from '@/components/ProductImageGallery';
import ProductReviews from '@/components/ProductReviews';
import { ScrollArea } from '@/components/ui/scroll-area';
import AffiliateButtons from '@/components/AffiliateButtons';
import ProductHeader from '@/components/ProductHeader';
import ProductFeatures from '@/components/ProductFeatures';
import ProductSpecs from '@/components/ProductSpecs';
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

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-background z-50 overflow-hidden"
    >
      <Button
        variant="ghost"
        size="icon"
        className="fixed right-4 top-4 z-50 bg-white/80 hover:bg-white shadow-md rounded-full lg:right-6 lg:top-6"
        onClick={() => navigate('/')}
      >
        <X className="h-5 w-5" />
      </Button>

      <div className="h-screen max-h-screen overflow-hidden">
        <div className="h-full flex flex-col lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)]">
          {/* Left Column - Product Images */}
          <div className="relative h-[45vh] lg:h-full bg-gray-50">
            <ProductImageGallery 
              images={product.images || [product.image]} 
              title={product.title}
              socialLinks={product.socialLinks}
            />
          </div>

          {/* Right Column - Product Details */}
          <ScrollArea className="flex-1 lg:h-full">
            <div className="px-4 py-6 lg:px-8 lg:py-12 max-w-3xl">
              <div className="space-y-6 lg:space-y-8">
                <ProductHeader product={product} discountedPrice={discountedPrice} />

                {product.description && (
                  <div className="prose prose-lg max-w-none">
                    <h2 className="text-xl lg:text-2xl font-semibold text-amazon-dark">Product Description</h2>
                    <p className="text-gray-600 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                )}

                <AffiliateButtons 
                  affiliateLinks={product.affiliateLinks}
                  socialLinks={product.socialLinks}
                  className="max-w-md"
                />

                {product.features && (
                  <div className="pt-6 lg:pt-8 border-t border-gray-100">
                    <ProductFeatures features={product.features} />
                  </div>
                )}
                
                {product.specs && (
                  <div className="pt-6 lg:pt-8 border-t border-gray-100">
                    <ProductSpecs specs={product.specs} />
                  </div>
                )}

                {product.reviews && product.reviews.length > 0 && (
                  <div className="pt-6 lg:pt-8 border-t border-gray-100">
                    <ProductReviews reviews={product.reviews} />
                  </div>
                )}
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductView;