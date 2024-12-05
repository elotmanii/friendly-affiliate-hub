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
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Product Not Found</h2>
          <Button onClick={() => navigate("/")}>Return to Home</Button>
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
        onClick={() => navigate("/")}
      >
        <Home className="h-5 w-5" />
      </Button>

      {/* Desktop Layout */}
      <div className="hidden lg:block h-screen max-h-screen overflow-hidden">
        <div className="h-full grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] bg-white">
          <div className="relative h-full bg-gray-50 p-8 overflow-hidden">
            <div className="h-full max-w-2xl mx-auto">
              <ProductImageGallery
                images={product.images || [product.image]}
                title={product.title}
              />
            </div>
          </div>

          <ScrollArea className="h-full relative">
            <div className="px-8 py-12 max-w-3xl">
              <div className="space-y-8">
                <ProductHeader
                  product={product}
                  discountedPrice={discountedPrice}
                />

                <AffiliateButtons
                  affiliateLinks={product.affiliateLinks}
                  socialLinks={socialLinks}
                />

                {product.description && (
                  <div className="prose prose-lg max-w-none">
                    <h2 className="text-2xl font-semibold text-amazon-dark">
                      Product Description
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                )}

                {product.features && (
                  <div className="pt-8 border-t border-gray-100">
                    <ProductFeatures features={product.features} />
                  </div>
                )}

                {product.specs && (
                  <div className="pt-8 border-t border-gray-100">
                    <ProductSpecs specs={product.specs} />
                  </div>
                )}

                {product.reviews && product.reviews.length > 0 && (
                  <div className="pt-8 border-t border-gray-100">
                    <ProductReviews reviews={product.reviews} />
                  </div>
                )}
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden h-full w-full overflow-y-auto bg-white">
        <ScrollArea className="h-full">
          <div className="w-full max-w-[400px] mx-auto">
            {/* Product Images */}
            <div className="bg-gradient-to-b from-gray-50 to-white pt-12">
              <div className="px-4">
                <ProductImageGallery
                  images={product.images || [product.image]}
                  title={product.title}
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="px-4 -mt-6">
              <div className="bg-white rounded-t-3xl shadow-lg border border-gray-100">
                {/* Header Section */}
                <div className="p-6 space-y-6">
                  <ProductHeader
                    product={product}
                    discountedPrice={discountedPrice}
                  />

                  {/* Affiliate Buttons */}
                  <div className="py-2">
                    <AffiliateButtons
                      affiliateLinks={product.affiliateLinks}
                      socialLinks={socialLinks}
                      className="space-y-4"
                    />
                  </div>

                  {/* Description */}
                  {product.description && (
                    <div className="prose prose-sm max-w-none pt-4">
                      <h2 className="text-xl font-semibold text-amazon-dark mb-3">
                        Product Description
                      </h2>
                      <p className="text-gray-600 leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                  )}
                </div>

                {/* Features Section */}
                {product.features && (
                  <div className="px-6 py-8 border-t border-gray-100 bg-gray-50/50">
                    <ProductFeatures features={product.features} />
                  </div>
                )}

                {/* Specs Section */}
                {product.specs && (
                  <div className="px-6 py-8 border-t border-gray-100">
                    <ProductSpecs specs={product.specs} />
                  </div>
                )}

                {/* Reviews Section */}
                {product.reviews && product.reviews.length > 0 && (
                  <div className="px-6 py-8 border-t border-gray-100 bg-gray-50/50">
                    <ProductReviews reviews={product.reviews} />
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Spacing */}
            <div className="h-8" />
          </div>
        </ScrollArea>
      </div>
    </motion.div>
  );
};

export default ProductView;