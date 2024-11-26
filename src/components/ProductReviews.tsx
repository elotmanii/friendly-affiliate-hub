import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface Review {
  id: string;
  rating: number;
  comment: string;
  author: string;
  date: string;
  verified: boolean;
}

interface ProductReviewsProps {
  reviews: Review[];
}

const ProductReviews = ({ reviews }: ProductReviewsProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-amazon-dark">Customer Reviews</h2>
      
      <div className="space-y-4">
        {reviews.map((review, index) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < review.rating
                          ? 'text-amazon-yellow fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="font-medium text-amazon-dark">
                  {review.author}
                </span>
              </div>
              <span className="text-sm text-gray-500">{review.date}</span>
            </div>
            
            {review.verified && (
              <div className="mb-2">
                <span className="text-xs bg-amazon-orange/10 text-amazon-orange px-2 py-1 rounded-full">
                  Verified Purchase
                </span>
              </div>
            )}
            
            <p className="text-gray-600">{review.comment}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductReviews;