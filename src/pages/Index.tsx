import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import Newsletter from '../components/Newsletter';
import { Button } from '../components/ui/button';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const featuredProducts = [
    {
      id: 1,
      title: "Premium Wireless Headphones",
      price: 299.99,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
      category: "Electronics"
    },
    {
      id: 2,
      title: "Smart Fitness Watch",
      price: 199.99,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
      category: "Wearables"
    },
    {
      id: 3,
      title: "Portable Power Bank",
      price: 49.99,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1609592807597-7e1d57a9c2bf?w=800&q=80",
      category: "Accessories"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-muted flex items-center">
        <div className="container-padding max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-6xl font-bold leading-tight mb-6">
              Discover Premium Products for Your Lifestyle
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Curated selection of high-quality products, handpicked for you.
            </p>
            <div className="flex gap-4">
              <Button size="lg">
                Browse Products
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-white">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container-padding max-w-7xl mx-auto">
          <h2 className="section-title text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-muted">
        <div className="container-padding max-w-7xl mx-auto text-center">
          <h2 className="section-title mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Curated Selection",
                description: "Hand-picked premium products that meet our quality standards"
              },
              {
                title: "Secure Shopping",
                description: "Safe and secure shopping experience with trusted partners"
              },
              {
                title: "Expert Reviews",
                description: "Detailed product reviews and recommendations from experts"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-white rounded-xl"
              >
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
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