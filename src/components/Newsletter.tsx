import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success!",
      description: "Thank you for subscribing to our newsletter.",
    });
    setEmail('');
  };

  return (
    <section className="py-16 bg-amazon-dark">
      <div className="container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Stay Updated</h2>
          <p className="text-gray-300 mb-8">
            Subscribe to our newsletter for exclusive deals and product updates.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border border-gray-600 bg-amazon-light text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amazon-orange focus:border-transparent"
              required
            />
            <Button type="submit" className="bg-amazon-yellow hover:bg-amazon-orange text-black">
              Subscribe
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;