/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import ProductGrid from './components/ProductGrid';
import ProductDetail from './components/ProductDetail';
import CartDrawer from './components/CartDrawer';
import TrustBar from './components/TrustBar';
import Footer from './components/Footer';
import { products } from './data';
import { Product, CartItem } from './types';
import { AnimatePresence } from 'motion/react';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (product: Product, quantity: number = 1, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
    
    setIsCartOpen(true);
    
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    setCart(prev => prev.map(item => 
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const handleRemoveFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const trendingProducts = products.filter(p => p.isTrending);
  const newProducts = products.filter(p => p.isNew);

  return (
    <div className="min-h-screen bg-tech-gray-100 font-sans selection:bg-tech-accent selection:text-tech-white">
      <Navbar 
        cartCount={cartCount} 
        onCartClick={() => setIsCartOpen(true)} 
        onHomeClick={() => setSelectedProduct(null)}
      />
      
      <main>
        <AnimatePresence mode="wait">
          {selectedProduct ? (
            <ProductDetail 
              product={selectedProduct} 
              onBack={() => setSelectedProduct(null)}
              onAddToCart={(p, q) => handleAddToCart(p, q)}
            />
          ) : (
            <div key="home">
              <Hero onShopNow={() => {
                window.scrollTo({ top: document.getElementById('trending')?.offsetTop || 0, behavior: 'smooth' });
              }} />
              <TrustBar />
              <CategorySection />
              <div id="trending">
                <ProductGrid 
                  title="Trending Now" 
                  products={trendingProducts} 
                  onProductClick={setSelectedProduct}
                  onAddToCart={(p, e) => handleAddToCart(p, 1, e)}
                />
              </div>
              <ProductGrid 
                title="New Arrivals" 
                products={newProducts} 
                onProductClick={setSelectedProduct}
                onAddToCart={(p, e) => handleAddToCart(p, 1, e)}
              />
            </div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
      
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemoveFromCart}
      />
    </div>
  );
}
