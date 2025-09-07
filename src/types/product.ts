export interface Product {
  status: string;
  id: string;
  name: string;
  slug: string;
  images: string[];
  price: number;
  oldPrice?: number;
  rating: number;
  reviewsCount: number;
  category: string;
  tags: ('new' | 'sale' | 'hot')[];
  stock: number;
  description: string;
  features: string[];
}
