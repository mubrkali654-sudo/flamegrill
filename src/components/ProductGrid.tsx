import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Star, Heart } from 'lucide-react';
import { Product } from '../types';

interface ProductGridProps {
  title: string;
  products: Product[];
  onProductClick: (product: Product) => void;
  onAddToCart: (product: Product, e: React.MouseEvent) => void;
}

export default function ProductGrid({ title, products, onProductClick, onAddToCart }: ProductGridProps) {
  return (
    <section className="py-16 bg-tech-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-display font-bold text-tech-black mb-2">{title}</h2>
            <p className="text-tech-gray-800/70">Discover our top picks</p>
          </div>
          <button className="text-tech-accent font-semibold hover:underline">View All</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-tech-white rounded-2xl p-4 flex flex-col group hover:shadow-xl transition-all duration-300 relative cursor-pointer"
              onClick={() => onProductClick(product)}
            >
              {/* Badges */}
              <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                {product.isNew && (
                  <span className="bg-tech-accent text-tech-white text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wide">New</span>
                )}
                {product.originalPrice && (
                  <span className="bg-tech-danger text-tech-white text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wide">
                    Sale
                  </span>
                )}
              </div>

              <button className="absolute top-4 right-4 z-10 p-2 bg-tech-gray-100 rounded-full text-tech-gray-800 hover:text-tech-danger hover:bg-tech-danger/10 transition-colors">
                <Heart className="w-5 h-5" />
              </button>

              <div className="relative w-full aspect-square mb-4 bg-tech-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover mix-blend-multiply transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="flex items-center gap-1 text-tech-warning mb-2">
                <Star className="w-4 h-4 fill-current" />
                <span className="font-bold text-sm text-tech-black">{product.rating}</span>
                <span className="text-xs text-tech-gray-800/50">({product.reviews})</span>
              </div>
              
              <h3 className="font-display font-semibold text-lg text-tech-black mb-1 line-clamp-2">{product.name}</h3>
              <p className="text-sm text-tech-gray-800/60 mb-4">{product.brand}</p>
              
              <div className="mt-auto flex items-end justify-between">
                <div>
                  {product.originalPrice && (
                    <p className="text-sm text-tech-gray-800/50 line-through mb-0.5">${product.originalPrice.toFixed(2)}</p>
                  )}
                  <p className="font-display font-bold text-xl text-tech-black">${product.price.toFixed(2)}</p>
                </div>
                <button 
                  onClick={(e) => onAddToCart(product, e)}
                  className="w-10 h-10 bg-tech-black text-tech-white rounded-full flex items-center justify-center hover:bg-tech-accent transition-colors shadow-md"
                >
                  <ShoppingCart className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
