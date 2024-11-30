import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Facebook, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

interface ProductImageGalleryProps {
  images: string[];
  title: string;
  socialLinks?: {
    telegram?: string;
    facebook?: string;
  };
}

const ProductImageGallery = ({ images, title, socialLinks }: ProductImageGalleryProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 flex gap-4">
        {/* Thumbnails Column - Desktop */}
        <div className="hidden lg:flex flex-col gap-3 w-24">
          {images.map((image, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`relative rounded-lg overflow-hidden aspect-square border-2 transition-all duration-200 ${
                index === currentImageIndex
                  ? 'border-amazon-orange ring-2 ring-amazon-orange/20'
                  : 'border-transparent hover:border-amazon-blue'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={image}
                alt={`${title} thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.button>
          ))}
        </div>

        {/* Main Image Container */}
        <div className="flex-1 relative bg-white rounded-xl overflow-hidden border border-gray-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="aspect-square lg:aspect-auto lg:h-full relative"
            >
              <img
                src={images[currentImageIndex]}
                alt={`${title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-contain p-4"
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-md rounded-full"
                onClick={previousImage}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-md rounded-full"
                onClick={nextImage}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </>
          )}

          {/* Mobile Thumbnails */}
          <div className="lg:hidden absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 px-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                  index === currentImageIndex
                    ? 'bg-amazon-orange scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Social Links */}
      {(socialLinks?.telegram || socialLinks?.facebook) && (
        <div className="flex justify-center gap-4 mt-4 px-4 lg:px-0">
          {socialLinks.telegram && (
            <motion.a
              href={socialLinks.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2 border-[#0088cc] text-[#0088cc] hover:bg-[#0088cc] hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="h-5 w-5" />
              <span className="font-medium">Join on Telegram</span>
            </motion.a>
          )}
          {socialLinks.facebook && (
            <motion.a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2 border-[#1877f2] text-[#1877f2] hover:bg-[#1877f2] hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Facebook className="h-5 w-5" />
              <span className="font-medium">Join on Facebook</span>
            </motion.a>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductImageGallery;