import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ShoppingCart, ArrowRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import Newsletter from '../components/Newsletter';
import { Button } from '../components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const featuredProducts = [
    {
      id: 1,
      title: "Sony WH-1000XM4 Wireless Headphones",
      price: 299.99,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
      category: "Electronics"
    },
    {
      id: 2,
      title: "Fitbit Versa 3 Smart Watch",
      price: 199.99,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
      category: "Wearables"
    },
    {
      id: 3,
      title: "Anker PowerCore 26800mAh",
      price: 49.99,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1609592807597-7e1d57a9c2bf?w=800&q=80",
      category: "Accessories"
    },
    {
      id: 4,
      title: "Apple AirPods Pro",
      price: 249.99,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800&q=80",
      category: "Electronics"
    },
    {
      id: 5,
      title: "Samsung Galaxy Watch 4",
      price: 279.99,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&q=80",
      category: "Wearables"
    }
  ];

  const heroFeatures = [
    { title: "Curated Selection", description: "Hand-picked quality products" },
    { title: "Best Prices", description: "Competitive Amazon prices" },
    { title: "Trusted Reviews", description: "Real customer feedback" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-amazon-dark via-amazon-light to-amazon-orange/20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070')] bg-cover bg-center opacity-10" />
        </div>

        <div className="container-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white space-y-6"
            >
              <span className="inline-block px-4 py-2 bg-amazon-orange/20 rounded-full text-amazon-orange text-sm font-medium">
                Trusted Amazon Products
              </span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Discover Amazing Products at 
                <span className="text-amazon-orange"> Great Prices</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-300 max-w-xl">
                Handpicked selection of the best products from Amazon, curated just for you with verified reviews and competitive prices.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-amazon-yellow text-black hover:bg-amazon-orange group">
                  Start Shopping
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg" className="border-2 text-white border-white/20 hover:bg-white/10">
                  Learn More
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                {heroFeatures.map((feature, index) => (
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="lg:block hidden"
            >
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amazon-orange to-amazon-yellow rounded-lg blur opacity-30"></div>
                <div className="relative bg-amazon-dark/40 backdrop-blur-sm border border-white/10 p-8 rounded-lg">
                  <div className="relative max-w-2xl mx-auto">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="text"
                      placeholder="Search for products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 rounded-full border border-white/10 bg-white/5 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amazon-orange focus:border-transparent backdrop-blur-sm"
                    />
                  </div>
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    {featuredProducts.slice(0, 2).map((product) => (
                      <motion.div
                        key={product.id}
                        whileHover={{ scale: 1.02 }}
                        className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10"
                      >
                        <img src={product.image} alt={product.title} className="w-full h-32 object-cover rounded-md mb-3" />
                        <h3 className="text-white text-sm font-medium truncate">{product.title}</h3>
                        <p className="text-amazon-orange font-bold mt-1">${product.price}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rest of the sections */}
      <section className="py-8 bg-white shadow-sm sticky top-0 z-10">
        <div className="container-padding">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amazon-orange focus:border-transparent"
            />
          </div>
        </div>
      </section>

      {/* Featured Products Slider */}
      <section className="py-16 bg-white">
        <div className="container-padding">
          <h2 className="section-title text-center mb-12">Featured Products</h2>
          <div className="max-w-5xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true
              }}
              className="w-full"
            >
              <CarouselContent>
                {featuredProducts.map((product) => (
                  <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                    <ProductCard product={product} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden sm:block">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-background">
        <div className="container-padding">
          <h2 className="section-title text-center mb-12">Why Shop With Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Verified Products",
                description: "All products are carefully selected from Amazon"
              },
              {
                title: "Best Prices",
                description: "We find the best deals and discounts for you"
              },
              {
                title: "Secure Shopping",
                description: "Shop with confidence through Amazon's secure platform"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-4 text-amazon-dark">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
};

export default Index;
