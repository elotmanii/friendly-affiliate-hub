import { ShoppingCart, MessageCircle, Facebook } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

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

const AffiliateButtons = ({
  affiliateLinks,
  socialLinks,
  className = "",
}: AffiliateButtonsProps) => {
  const platforms = [
    {
      name: "Amazon",
      link: affiliateLinks?.amazon,
      color: "bg-gradient-to-br from-amazon-yellow via-amazon-orange to-[#ff8b3d]",
      icon: ShoppingCart,
    },
    {
      name: "eBay",
      link: affiliateLinks?.ebay,
      color: "bg-gradient-to-br from-[#e53238] via-[#c92b31] to-[#ab242a]",
      icon: ShoppingCart,
    },
    {
      name: "AliExpress",
      link: affiliateLinks?.aliexpress,
      color: "bg-gradient-to-br from-[#ff4747] via-[#e63e3e] to-[#cc3737]",
      icon: ShoppingCart,
    },
  ];

  const availablePlatforms = platforms.filter((platform) => platform.link);
  const availableSocialPlatforms = [
    socialLinks?.telegram && {
      name: "Join Telegram",
      link: socialLinks.telegram,
      icon: MessageCircle,
      className:
        "bg-white text-[#0088cc] hover:bg-[#0088cc] hover:text-white border border-[#0088cc] transition-colors",
    },
    socialLinks?.facebook && {
      name: "Join Facebook",
      link: socialLinks.facebook,
      icon: Facebook,
      className:
        "bg-white text-[#1877f2] hover:bg-[#1877f2] hover:text-white border border-[#1877f2] transition-colors",
    },
  ].filter(Boolean);

  if (availablePlatforms.length === 0 && availableSocialPlatforms.length === 0)
    return null;

  return (
    <div className={`space-y-8 ${className}`}>
      {availablePlatforms.length > 0 && (
        <div className="space-y-3">
          <div className="grid gap-4">
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
                  className={`w-full ${platform.color} text-black font-bold h-14 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5`}
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
        <div className="flex gap-3 justify-center">
          {availableSocialPlatforms.map((platform) => (
            <motion.a
              key={platform.name}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 max-w-[180px]"
            >
              <Button
                className={`w-full h-10 text-sm font-medium rounded-full ${platform.className}`}
                variant="outline"
              >
                <platform.icon className="h-4 w-4 mr-2" />
                {platform.name}
              </Button>
            </motion.a>
          ))}
        </div>
      )}
    </div>
  );
};

export default AffiliateButtons;