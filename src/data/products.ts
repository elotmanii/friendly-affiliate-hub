import { Product } from "../types/product";

export const products: Product[] = [
  {
    id: 1,
    title: "Sony WH-1000XM4 Wireless Headphones",
    price: 299.99,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&q=80",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80",
    ],
    category: "Electronics",
    description:
      "Industry-leading noise canceling with Dual Noise Sensor technology. Next-level music with Edge-AI, co-developed with Sony Music Studios Tokyo.",
    discount: 20,
    features: [
      "Industry-leading noise cancellation",
      "Up to 30-hour battery life",
      "Touch Sensor controls",
      "Speak-to-chat technology",
      "Wearing detection",
    ],
    specs: {
      "Battery Life": "Up to 30 hours",
      "Bluetooth Version": "5.0",
      Weight: "254g",
      "Charging Time": "3 hours",
      "Driver Unit": "40mm",
    },
    reviews: [
      {
        id: "1",
        rating: 5,
        comment: "Best noise cancelling headphones I've ever used!",
        author: "John D.",
        date: "2024-02-15",
        verified: true,
      },
      {
        id: "2",
        rating: 4,
        comment: "Great sound quality but a bit pricey",
        author: "Sarah M.",
        date: "2024-02-10",
        verified: true,
      },
    ],
    affiliateLinks: {
      amazon: "https://amazon.com/example",
      ebay: "https://ebay.com/example",
      aliexpress: "https://aliexpress.com/example",
    },
    socialLinks: {
      telegram: "https://t.me/yourgroup",
      facebook: "https://facebook.com/groups/yourgroup",
    },
  },
  {
    id: 2,
    title: "Apple AirPods Pro",
    price: 249.99,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800&q=80",
    category: "Electronics",
    description:
      "Active Noise Cancellation for immersive sound. Transparency mode for hearing what's happening around you.",
    discount: 15,
    features: [
      "Active Noise Cancellation",
      "Transparency mode",
      "Adaptive EQ",
      "Spatial audio",
      "Water resistant",
    ],
    specs: {
      "Battery Life": "4.5 hours",
      "Charging Case": "24 hours total",
      Connectivity: "H1 chip",
      "Water Resistance": "IPX4",
      Weight: "5.4g each",
    },
    reviews: [
      {
        id: "3",
        rating: 5,
        comment: "Perfect integration with iPhone",
        author: "Mike R.",
        date: "2024-02-14",
        verified: true,
      },
    ],
    affiliateLinks: {
      amazon: "https://amazon.com/example2",
      ebay: "https://ebay.com/example2",
    },
  },
  {
    id: 3,
    title: "Apple AirPods Pro",
    price: 249.99,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800&q=80",
    category: "Electronics",
    description:
      "Active Noise Cancellation for immersive sound. Transparency mode for hearing what's happening around you.",
    discount: 15,
    features: [
      "Active Noise Cancellation",
      "Transparency mode",
      "Adaptive EQ",
      "Spatial audio",
      "Water resistant",
    ],
    specs: {
      "Battery Life": "4.5 hours",
      "Charging Case": "24 hours total",
      Connectivity: "H1 chip",
      "Water Resistance": "IPX4",
      Weight: "5.4g each",
    },
    reviews: [
      {
        id: "3",
        rating: 5,
        comment: "Perfect integration with iPhone",
        author: "Mike R.",
        date: "2024-02-14",
        verified: true,
      },
    ],
    affiliateLinks: {
      amazon: "https://amazon.com/example2",
      ebay: "https://ebay.com/example2",
    },
  },
];
