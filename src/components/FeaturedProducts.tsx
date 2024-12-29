import { useState } from 'react';
import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "./ui/carousel";
import ProductCard from './ProductCard';
import CategoryFilters from './CategoryFilters';
import ScrollHint from './ScrollHint';
import { Product } from '../types/product';

interface FeaturedProductsProps {
  products: Product[];
}

const FeaturedProducts = ({ products }: FeaturedProductsProps) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter((product) => product.category === selectedCategory);

  return (
    <section className="py-16 bg-white">
      <div className="container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h2 className="section-title text-center mb-12">Featured Products</h2>
          
          <CategoryFilters
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          <div className="max-w-5xl mx-auto relative">
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent>
                {filteredProducts.map((product) => (
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
            <ScrollHint />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;