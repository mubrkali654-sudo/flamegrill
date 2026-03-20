import { Product } from './types';

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Samsung Galaxy S24 Ultra',
    brand: 'Samsung',
    category: 'Smartphones',
    price: 1299.99,
    originalPrice: 1399.99,
    rating: 4.9,
    reviews: 1245,
    image: 'https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1707345566675-92ce525547e1?q=80&w=800&auto=format&fit=crop'
    ],
    specs: {
      'Screen': '6.8" AMOLED 2X',
      'Processor': 'Snapdragon 8 Gen 3',
      'Camera': '200MP Main',
      'Battery': '5000mAh'
    },
    inStock: true,
    stockCount: 45,
    isNew: true,
    isTrending: true
  },
  {
    id: 'p2',
    name: 'iPhone 15 Pro Max',
    brand: 'Apple',
    category: 'Smartphones',
    price: 1199.99,
    rating: 4.8,
    reviews: 3420,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=800&auto=format&fit=crop'
    ],
    specs: {
      'Screen': '6.7" Super Retina XDR',
      'Processor': 'A17 Pro',
      'Camera': '48MP Main',
      'Battery': '4422mAh'
    },
    inStock: true,
    stockCount: 12,
    isTrending: true
  },
  {
    id: 'p3',
    name: 'Sony WH-1000XM5',
    brand: 'Sony',
    category: 'Audio',
    price: 348.00,
    originalPrice: 399.99,
    rating: 4.7,
    reviews: 856,
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=800&auto=format&fit=crop'
    ],
    specs: {
      'Type': 'Over-ear',
      'Noise Cancelling': 'Industry Leading ANC',
      'Battery Life': '30 Hours',
      'Connection': 'Bluetooth 5.2'
    },
    inStock: true,
    stockCount: 89
  },
  {
    id: 'p4',
    name: 'Apple AirPods Pro (2nd Gen)',
    brand: 'Apple',
    category: 'Audio',
    price: 249.00,
    rating: 4.9,
    reviews: 5210,
    image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=800&auto=format&fit=crop'
    ],
    specs: {
      'Type': 'In-ear',
      'Noise Cancelling': 'Active Noise Cancellation',
      'Battery Life': '6 Hours (30 with case)',
      'Connection': 'Bluetooth 5.3'
    },
    inStock: true,
    stockCount: 150,
    isTrending: true
  },
  {
    id: 'p5',
    name: 'Anker 737 Power Bank',
    brand: 'Anker',
    category: 'Accessories',
    price: 149.99,
    originalPrice: 199.99,
    rating: 4.8,
    reviews: 432,
    image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?q=80&w=800&auto=format&fit=crop'
    ],
    specs: {
      'Capacity': '24,000mAh',
      'Output': '140W Max',
      'Ports': '2x USB-C, 1x USB-A',
      'Display': 'Smart Digital Display'
    },
    inStock: true,
    stockCount: 3
  },
  {
    id: 'p6',
    name: 'Logitech MX Master 3S',
    brand: 'Logitech',
    category: 'Accessories',
    price: 99.99,
    rating: 4.9,
    reviews: 1890,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=800&auto=format&fit=crop'
    ],
    specs: {
      'Sensor': '8000 DPI Darkfield',
      'Buttons': '7 Customizable',
      'Battery Life': '70 Days',
      'Connection': 'Bluetooth / Logi Bolt'
    },
    inStock: true,
    stockCount: 45
  }
];

export const categories = [
  { id: 'smartphones', name: 'Smartphones', icon: 'Smartphone' },
  { id: 'audio', name: 'Audio', icon: 'Headphones' },
  { id: 'accessories', name: 'Accessories', icon: 'BatteryCharging' },
  { id: 'wearables', name: 'Wearables', icon: 'Watch' },
];
