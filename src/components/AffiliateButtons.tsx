import { ShoppingCart, MessageCircle, Facebook } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

interface AffiliateButtonsProps {
  affiliateLinks?: {
    amazon?: string;
    ebay?: string;
    aliexpress?: string;
  };
  socialLinks?: {
    telegram?: string;
    facebook?: string;
  };
  className?: string;
}

const AffiliateButtons = ({ affiliateLinks, socialLinks, className = '' }: AffiliateButtonsProps) => {
  const platforms = [
    { name: 'Amazon', link: affiliateLinks?.amazon, color: 'bg-gradient-to-r from-amazon-yellow to-amazon-orange', icon: ShoppingCart },
    { name: 'eBay', link: affiliateLinks?.ebay, color: 'bg-gradient-to-r from-[#e53238] to-[#c92b31]', icon: ShoppingCart },
    { name: 'AliExpress', link: affiliateLinks?.aliexpress, color: 'bg-gradient-to-r from-[#ff4747] to-[#e63e3e]', icon: ShoppingCart }
  ];

  const availablePlatforms = platforms.filter(platform => platform.link);
  const availableSocialPlatforms = [
    socialLinks?.telegram && {
      name: 'Join Telegram Community',
      link: socialLinks.telegram,
      icon: MessageCircle,
      className: 'group relative overflow-hidden bg-white border-2 border-[#0088cc] text-[#0088cc] hover:text-white transition-colors duration-300 before:content-[""] before:absolute before:inset-0 before:bg-[#0088cc] before:transform before:scale-x-0 before:origin-right hover:before:scale-x-100 hover:before:origin-left before:transition-transform before:duration-300 before:-z-10'
    },
    socialLinks?.facebook && {
      name: 'Join Facebook Group',
      link: socialLinks.facebook,
      icon: Facebook,
      className: 'group relative overflow-hidden bg-white border-2 border-[#1877f2] text-[#1877f2] hover:text-white transition-colors duration-300 before:content-[""] before:absolute before:inset-0 before:bg-[#1877f2] before:transform before:scale-x-0 before:origin-right hover:before:scale-x-100 hover:before:origin-left before:transition-transform before:duration-300 before:-z-10'
    }
  ].filter(Boolean);

  if (availablePlatforms.length === 0 && availableSocialPlatforms.length === 0) return null;

  return (
    <div className={`space-y-6 ${className}`}>
      {availablePlatforms.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-900">Shop Now</h3>
          <div className="grid gap-3">
            {availablePlatforms.map((platform) => (
              <motion.a
                key={platform.name}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  className={`w-full ${platform.color} text-black font-bold h-14 text-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:brightness-110`}
                >
                  <platform.icon className="h-6 w-6 mr-3" />
                  View on {platform.name}
                </Button>
              </motion.a>
            ))}
          </div>
        </div>
      )}
      
      {availableSocialPlatforms.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-900">Join Our Community</h3>
          <div className="grid gap-3">
            {availableSocialPlatforms.map((platform) => (
              <motion.a
                key={platform.name}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block"
              >
                <Button
                  className={`w-full h-12 text-base font-semibold relative ${platform.className}`}
                  variant="outline"
                >
                  <platform.icon className="h-5 w-5 mr-2 relative z-10" />
                  <span className="relative z-10">{platform.name}</span>
                </Button>
              </motion.a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AffiliateButtons;