export interface Restaurant {
  id: number;
  name: string;
  res_id: string;
  category: string;
  city: string;
  rating: number;
  rating_count: number;
  description: string;
  price_range: string;
  is_favorite: boolean;
  images: string[];
  featured: {
    icon: string;
    text: string;
  };
}