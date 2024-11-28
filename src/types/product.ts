export interface Product {
  id: number;
  title: string;
  price: number;
  rating: number;
  image: string;
  images?: string[];
  category: string;
  description?: string;
  discount?: number;
  features?: string[];
  specs?: {
    [key: string]: string;
  };
  reviews?: {
    id: string;
    rating: number;
    comment: string;
    author: string;
    date: string;
    verified: boolean;
  }[];
}