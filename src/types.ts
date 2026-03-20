export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  images: string[];
  specs: { [key: string]: string };
  inStock: boolean;
  stockCount: number;
  isNew?: boolean;
  isTrending?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}
