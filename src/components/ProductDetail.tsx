import { motion } from 'motion/react';
import { Product } from '../types';
import { Star, ShieldCheck, Truck, RotateCcw, ShoppingCart, Heart, CheckCircle2, ChevronLeft } from 'lucide-react';
import { useState } from 'react';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export default function ProductDetail({ product, onBack, onAddToCart }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-tech-white min-h-screen pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-tech-gray-800 hover:text-tech-accent transition-colors mb-8 font-medium"
        >
          <ChevronLeft className="w-5 h-5" /> Back to Products
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-tech-gray-100 rounded-3xl overflow-hidden relative flex items-center justify-center p-8 group">
              <img 
                src={product.images[activeImage] || product.image} 
                alt={product.name} 
                className="w-full h-full object-contain mix-blend-multiply transform group-hover:scale-110 transition-transform duration-500 cursor-zoom-in"
              />
              {product.originalPrice && (
                <div className="absolute top-6 left-6 bg-tech-danger text-tech-white px-3 py-1.5 rounded-lg font-bold text-sm tracking-wide uppercase shadow-lg">
                  Save ${(product.originalPrice - product.price).toFixed(2)}
                </div>
              )}
            </div>
            
            {product.images.length > 1 && (
              <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
                {product.images.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`w-24 h-24 rounded-xl overflow-hidden border-2 transition-all ${
                      activeImage === idx ? 'border-tech-accent shadow-md' : 'border-transparent hover:border-tech-gray-800/20'
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover mix-blend-multiply bg-tech-gray-100" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-6">
              <p className="text-tech-accent font-semibold tracking-wide uppercase text-sm mb-2">{product.brand}</p>
              <h1 className="text-4xl sm:text-5xl font-display font-bold text-tech-black mb-4 leading-tight">{product.name}</h1>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1 text-tech-warning">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-tech-gray-800/20'}`} />
                  ))}
                </div>
                <span className="font-bold text-tech-black">{product.rating}</span>
                <span className="text-tech-gray-800/60 font-medium underline cursor-pointer hover:text-tech-accent">({product.reviews} reviews)</span>
              </div>

              <div className="flex items-end gap-4 mb-8">
                <span className="text-5xl font-display font-bold text-tech-black">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="text-2xl text-tech-gray-800/40 line-through mb-1">${product.originalPrice.toFixed(2)}</span>
                )}
              </div>
            </div>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="bg-tech-gray-100 p-4 rounded-xl">
                  <p className="text-xs text-tech-gray-800/60 uppercase tracking-wider font-semibold mb-1">{key}</p>
                  <p className="font-medium text-tech-black">{value}</p>
                </div>
              ))}
            </div>

            {/* Stock & Delivery */}
            <div className="space-y-4 mb-8 p-6 border border-tech-gray-100 rounded-2xl bg-tech-white shadow-sm">
              <div className="flex items-center gap-3 text-tech-success font-medium">
                <CheckCircle2 className="w-5 h-5" />
                <span>In Stock ({product.stockCount} available)</span>
              </div>
              <div className="flex items-center gap-3 text-tech-gray-800 font-medium">
                <Truck className="w-5 h-5 text-tech-accent" />
                <span>Free delivery by <strong className="text-tech-black">Tomorrow</strong></span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <div className="flex items-center justify-between bg-tech-gray-100 rounded-xl p-2 w-full sm:w-32">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-tech-black hover:bg-tech-white rounded-lg transition-colors font-bold text-xl"
                >
                  -
                </button>
                <span className="font-bold text-lg w-8 text-center">{quantity}</span>
                <button 
                  onClick={() => setQuantity(Math.min(product.stockCount, quantity + 1))}
                  className="w-10 h-10 flex items-center justify-center text-tech-black hover:bg-tech-white rounded-lg transition-colors font-bold text-xl"
                >
                  +
                </button>
              </div>
              
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-tech-accent text-tech-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-tech-accent-hover transition-all shadow-lg shadow-tech-accent/20 active:scale-[0.98]"
              >
                <ShoppingCart className="w-5 h-5" /> Add to Cart
              </button>
              
              <button className="w-14 h-14 sm:w-auto sm:px-6 bg-tech-gray-100 text-tech-gray-800 rounded-xl flex items-center justify-center hover:bg-tech-danger/10 hover:text-tech-danger transition-colors">
                <Heart className="w-6 h-6" />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-tech-gray-100">
              <div className="flex flex-col items-center text-center gap-2">
                <ShieldCheck className="w-6 h-6 text-tech-gray-800/60" />
                <span className="text-xs font-medium text-tech-gray-800/80">1 Year Warranty</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <RotateCcw className="w-6 h-6 text-tech-gray-800/60" />
                <span className="text-xs font-medium text-tech-gray-800/80">30-Day Returns</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-tech-gray-800/60" />
                <span className="text-xs font-medium text-tech-gray-800/80">Genuine Product</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
}
