import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingCart, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect } from "react";
import ProductImageGallery from "@/components/ProductImageGallery";
import ProductReviews from "@/components/ProductReviews";
import ProductHeader from "@/components/product/ProductHeader";
import ProductDetails from "@/components/product/ProductDetails";
import { Product } from "@/types/product";

const products: Product[] = [
  {
    id: 1,
    title: "Sony WH-1000XM4 Wireless Headphones",
    price: 299.99,
    discount: 20,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
      "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?w=800&q=80",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80",
    ],
    category: "Electronics",
    description:
      "Industry-leading noise canceling with Dual Noise Sensor technology...",
    features: [
      "Industry-leading noise cancellation",
      "Exceptional sound quality with LDAC technology",
      "Multipoint connection for seamless device switching",
      "Touch sensor controls for easy operation",
      "Speak-to-chat technology automatically reduces volume during conversations",
    ],
    specs: {
      batteryLife: "30 hours",
      connectivity: "Bluetooth 5.0",
      weight: "254g",
      color: "Black",
    },
    reviews: [
      {
        id: "1",
        rating: 5,
        author: "John D.",
        date: "2024-02-15",
        verified: true,
        comment:
          "Best headphones I've ever owned. The noise cancellation is incredible!",
      },
      {
        id: "2",
        rating: 4,
        author: "Sarah M.",
        date: "2024-02-10",
        verified: true,
        comment: "Great sound quality and comfortable for long periods.",
      },
    ],
  },
  {
    id: 2,
    title: "Fitbit Versa 3 Smart Watch",
    price: 199.99,
    discount: 15,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&q=80",
    ],
    category: "Wearables",
    description:
      "Advanced fitness tracking with built-in GPS and heart rate monitoring...",
    features: [
      "Built-in GPS",
      "24/7 heart rate tracking",
      "6+ day battery life",
      "Water resistant to 50m",
      "Voice assistant compatibility",
    ],
    specs: {
      batteryLife: "6+ days",
      connectivity: "Bluetooth 5.0",
      weight: "40g",
      color: "Black/Gray",
    },
    reviews: [
      {
        id: "1",
        rating: 5,
        author: "Mike R.",
        date: "2024-02-14",
        verified: true,
        comment: "Perfect fitness companion! The GPS is very accurate.",
      },
    ],
  },
  {
    id: 4,
    title: "Apple AirPods Pro",
    price: 249.99,
    rating: 4.9,
    discount: 25,
    image:
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800&q=80",
      "https://images.unsplash.com/photo-1588156979435-379b9d802b0a?w=800&q=80",
    ],
    category: "Electronics",
    description:
      "Active noise cancellation for immersive sound. Transparency mode for hearing what's happening around you...",
    features: [
      "Active Noise Cancellation",
      "Transparency mode",
      "Adaptive EQ",
      "Spatial audio",
      "Water and sweat resistant",
    ],
    specs: {
      batteryLife: "4.5 hours",
      connectivity: "Bluetooth 5.0",
      weight: "5.4g per pod",
      color: "White",
    },
    reviews: [
      {
        id: "1",
        rating: 5,
        author: "James P.",
        date: "2024-02-16",
        verified: true,
        comment: "Amazing sound quality and noise cancellation!",
      },
    ],
  },
  {
    id: 5,
    title: "Samsung Galaxy Watch 4",
    price: 279.99,
    rating: 4.7,
    discount: 10,
    image:
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    ],
    category: "Wearables",
    description: "Advanced health monitoring with body composition analysis...",
    features: [
      "Body composition analysis",
      "Advanced sleep tracking",
      "ECG monitoring",
      "40+ workout modes",
      "5ATM water resistance",
    ],
    specs: {
      batteryLife: "40 hours",
      connectivity: "Bluetooth 5.0",
      weight: "30.3g",
      color: "Black",
    },
    reviews: [
      {
        id: "1",
        rating: 4,
        author: "Emily R.",
        date: "2024-02-15",
        verified: true,
        comment: "Great fitness tracking features and comfortable to wear!",
      },
    ],
  },
];

const ProductView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));

  useEffect(() => {
    if (product) {
      document.title = `${product.title} - Best Price & Reviews`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute(
          "content",
          product.description?.slice(0, 155) + "..."
        );
      }
    }
  }, [product]);

  if (!product) {
    return (
      <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Product Not Found</h2>
          <Button onClick={() => navigate("/")}>Return to Home</Button>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-background z-50"
    >
      <Button
        variant="ghost"
        size="icon"
        className="fixed right-4 top-4 z-50 bg-white/80 hover:bg-white shadow-md rounded-full"
        onClick={() => navigate("/")}
      >
        <X className="h-5 w-5" />
      </Button>

      <div className="h-screen grid lg:grid-cols-[1fr_1.5fr] overflow-hidden">
        <div className="bg-gray-50 p-8 overflow-auto">
          <ProductImageGallery images={product.images || [product.image]} title={product.title} />
        </div>

        <ScrollArea className="h-full border-l border-gray-100">
          <div className="p-8 space-y-8">
            <ProductHeader product={product} />
            
            <Button
              size="lg"
              className="w-full bg-amazon-yellow hover:bg-amazon-orange text-black font-semibold h-14 text-lg"
            >
              <ShoppingCart className="h-6 w-6 mr-2" />
              View on Amazon
            </Button>

            <ProductDetails product={product} />
            
            <div className="pt-6">
              <ProductReviews reviews={product.reviews || []} />
            </div>
          </div>
        </ScrollArea>
      </div>
    </motion.div>
  );
};

export default ProductView;
