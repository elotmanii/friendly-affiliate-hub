import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const ScrollHint = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (isVisible) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-gray-500 sm:hidden"
        >
          <span className="text-sm">Scroll</span>
          <ChevronRight className="w-4 h-4 animate-bounce" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollHint;