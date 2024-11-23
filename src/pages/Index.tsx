import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ShoppingCart } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import Newsletter from '../components/Newsletter';
import { Button } from '../components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

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

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-amazon-dark to-amazon-light py-16 sm:py-24">
        <div className="container-padding">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-4 text-white">
              Discover Amazing Products at Great Prices
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              Handpicked selection of the best products from Amazon, curated just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amazon-yellow text-black hover:bg-amazon-orange">
                Shop Now
                <ShoppingCart className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
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
