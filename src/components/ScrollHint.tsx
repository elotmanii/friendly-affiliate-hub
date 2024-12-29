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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/80 text-white px-4 py-2 rounded-l-lg flex items-center gap-2 shadow-lg sm:hidden"
        >
          <span className="text-sm font-medium">Swipe</span>
          <ChevronRight className="w-4 h-4 animate-bounce" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollHint;