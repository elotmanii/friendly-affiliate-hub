import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const ScrollHint = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if user has swiped before
    const hasSwipedBefore = localStorage.getItem('hasSwipedProducts');
    if (hasSwipedBefore) {
      setIsVisible(false);
    }

    const handleScroll = () => {
      if (isVisible) {
        setIsVisible(false);
        // Store that user has swiped
        localStorage.setItem('hasSwipedProducts', 'true');
      }
    };

    const handleTouch = () => {
      if (isVisible) {
        setIsVisible(false);
        // Store that user has swiped
        localStorage.setItem('hasSwipedProducts', 'true');
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchmove', handleTouch);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchmove', handleTouch);
    };
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-24 left-1/2 -translate-x-1/2 bg-black/90 text-white px-6 py-3 rounded-full flex items-center gap-3 shadow-lg z-50 sm:hidden"
        >
          <span className="text-sm font-medium whitespace-nowrap">Swipe to see more</span>
          <ChevronRight className="w-5 h-5 animate-pulse" />
          <div className="absolute -inset-0.5 bg-gradient-to-r from-amazon-orange to-amazon-yellow rounded-full blur opacity-30 -z-10" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollHint;