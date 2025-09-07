export interface Product {
  id: string;
  name: string;
  slug: string; // For clean in-app URLs
  images: string[]; // An array for multiple product images
  price: number;
  oldPrice?: number;
  rating: number;
  reviewsCount: number;
  category: string;
  tags: ('new' | 'sale' | 'hot')[]; // For dynamic badges
  stock: number; // To manage availability
  description: string;
  features: string[];
}
