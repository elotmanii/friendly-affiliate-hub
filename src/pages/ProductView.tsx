import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductImageGallery from "@/components/ProductImageGallery";
import ProductReviews from "@/components/ProductReviews";
import { ScrollArea } from "@/components/ui/scroll-area";
import AffiliateButtons from "@/components/AffiliateButtons";
import ProductHeader from "@/components/ProductHeader";
import ProductFeatures from "@/components/ProductFeatures";
import ProductSpecs from "@/components/ProductSpecs";
import { products } from "../data/products";

const ProductView = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === Number(id));

  const socialLinks = {
    telegram: "https://t.me/your_telegram_community",
    facebook: "https://facebook.com/groups/your_facebook_group",
  };

  if (!product) {
    return (
      <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4 text-amazon-dark">Product Not Found</h2>
          <Button 
            onClick={() => navigate("/")}
            className="bg-amazon-orange hover:bg-amazon-yellow text-black font-semibold"
          >
            Return to Home
          </Button>
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
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
    >
      <Button
        variant="ghost"
        size="icon"
        className="fixed right-4 top-4 z-50 bg-white/80 hover:bg-white shadow-md rounded-full lg:right-6 lg:top-6"
        onClick={() => navigate("/")}
      >
        <Home className="h-5 w-5" />
      </Button>

      {/* Desktop Layout */}
      <div className="hidden lg:block min-h-screen">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 max-w-[2000px] mx-auto">
          <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white p-8">
            <div className="sticky top-8 max-w-2xl mx-auto">
              <ProductImageGallery
                images={product.images || [product.image]}
                title={product.title}
              />
            </div>
          </div>

          <ScrollArea className="h-screen">
            <div className="px-8 py-12 max-w-3xl">
              <div className="space-y-10">
                <ProductHeader
                  product={product}
                  discountedPrice={discountedPrice}
                />

                <AffiliateButtons
                  affiliateLinks={product.affiliateLinks}
                  socialLinks={socialLinks}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
                />

                {product.description && (
                  <div className="prose prose-lg max-w-none bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                    <h2 className="text-2xl font-semibold text-amazon-dark mb-4">
                      Product Description
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                )}

                {product.features && (
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                    <ProductFeatures features={product.features} />
                  </div>
                )}

                {product.specs && (
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                    <ProductSpecs specs={product.specs} />
                  </div>
                )}

                {product.reviews && product.reviews.length > 0 && (
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                    <ProductReviews reviews={product.reviews} />
                  </div>
                )}
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-50">
        <ScrollArea className="h-screen">
          <div className="pb-20 pt-16 max-w-xl mx-auto">
            <div className="space-y-6 px-4">
              <div className="bg-white rounded-2xl shadow-lg p-4 animate-fade-up">
                <ProductImageGallery
                  images={product.images || [product.image]}
                  title={product.title}
                />
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl shadow-lg p-6 space-y-6"
              >
                <ProductHeader
                  product={product}
                  discountedPrice={discountedPrice}
                />

                <div className="border-t border-gray-100 pt-6">
                  <AffiliateButtons
                    affiliateLinks={product.affiliateLinks}
                    socialLinks={socialLinks}
                    className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl shadow-sm"
                  />
                </div>
              </motion.div>

              {product.description && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl shadow-lg p-6"
                >
                  <h2 className="text-xl font-semibold text-amazon-dark mb-4">
                    About This Product
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                </motion.div>
              )}

              {product.features && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl shadow-lg p-6"
                >
                  <ProductFeatures features={product.features} />
                </motion.div>
              )}

              {product.specs && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl shadow-lg p-6"
                >
                  <ProductSpecs specs={product.specs} />
                </motion.div>
              )}

              {product.reviews && product.reviews.length > 0 && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl shadow-lg p-6"
                >
                  <ProductReviews reviews={product.reviews} />
                </motion.div>
              )}
            </div>
          </div>
        </ScrollArea>
      </div>
    </motion.div>
  );
};

export default ProductView;