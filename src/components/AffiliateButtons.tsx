import { ShoppingCart, MessageCircle, Facebook } from 'lucide-react';
import { Button } from './ui/button';

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
    { name: 'Amazon', link: affiliateLinks?.amazon, color: 'bg-amazon-yellow hover:bg-amazon-orange', icon: ShoppingCart },
    { name: 'eBay', link: affiliateLinks?.ebay, color: 'bg-[#e53238] hover:bg-[#c92b31]', icon: ShoppingCart },
    { name: 'AliExpress', link: affiliateLinks?.aliexpress, color: 'bg-[#ff4747] hover:bg-[#e63e3e]', icon: ShoppingCart }
  ];

  const socialPlatforms = [
    { name: 'Telegram Group', link: socialLinks?.telegram, color: 'bg-[#0088cc] hover:bg-[#0077b3]', icon: MessageCircle },
    { name: 'Facebook Group', link: socialLinks?.facebook, color: 'bg-[#1877f2] hover:bg-[#0d65d9]', icon: Facebook }
  ];

  const availablePlatforms = platforms.filter(platform => platform.link);
  const availableSocialPlatforms = socialPlatforms.filter(platform => platform.link);

  if (availablePlatforms.length === 0 && availableSocialPlatforms.length === 0) return null;

  return (
    <div className={`space-y-3 ${className}`}>
      {availablePlatforms.map((platform) => (
        <a
          key={platform.name}
          href={platform.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full"
        >
          <Button
            className={`w-full ${platform.color} text-white font-semibold h-14 text-lg`}
          >
            <platform.icon className="h-6 w-6 mr-2" />
            View on {platform.name}
          </Button>
        </a>
      ))}
      
      {availableSocialPlatforms.length > 0 && (
        <div className="pt-2">
          <div className="text-sm text-gray-500 mb-3">Join our community:</div>
          {availableSocialPlatforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full mb-3 last:mb-0"
            >
              <Button
                className={`w-full ${platform.color} text-white font-semibold h-12 text-base`}
                variant="outline"
              >
                <platform.icon className="h-5 w-5 mr-2" />
                Join {platform.name}
              </Button>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default AffiliateButtons;