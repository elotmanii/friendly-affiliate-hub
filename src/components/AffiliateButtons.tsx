import { ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';

interface AffiliateButtonsProps {
  affiliateLinks?: {
    amazon?: string;
    ebay?: string;
    aliexpress?: string;
  };
  className?: string;
}

const AffiliateButtons = ({ affiliateLinks, className = '' }: AffiliateButtonsProps) => {
  if (!affiliateLinks) return null;

  const platforms = [
    { name: 'Amazon', link: affiliateLinks.amazon, color: 'bg-amazon-yellow hover:bg-amazon-orange' },
    { name: 'eBay', link: affiliateLinks.ebay, color: 'bg-[#e53238] hover:bg-[#c92b31]' },
    { name: 'AliExpress', link: affiliateLinks.aliexpress, color: 'bg-[#ff4747] hover:bg-[#e63e3e]' }
  ];

  const availablePlatforms = platforms.filter(platform => platform.link);

  if (availablePlatforms.length === 0) return null;

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
            <ShoppingCart className="h-6 w-6 mr-2" />
            View on {platform.name}
          </Button>
        </a>
      ))}
    </div>
  );
};

export default AffiliateButtons;