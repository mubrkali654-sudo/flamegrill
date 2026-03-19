/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Deals from './components/Deals';
import Menu from './components/Menu';
import BurgerBuilder from './components/BurgerBuilder';
import SocialProof from './components/SocialProof';
import LocationFinder from './components/LocationFinder';
import AppPromo from './components/AppPromo';
import Footer from './components/Footer';
import StickyCart from './components/StickyCart';

export default function App() {
  const [cartCount, setCartCount] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
    // Optional: Add a subtle vibration or sound here
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
  };

  return (
    <div className="min-h-screen bg-brand-light font-sans selection:bg-brand-red selection:text-brand-white">
      <Navbar cartCount={cartCount} onCartClick={() => setIsCartOpen(true)} />
      
      <main>
        <Hero />
        <Deals />
        <Menu onAdd={handleAddToCart} />
        <BurgerBuilder onAdd={handleAddToCart} />
        <SocialProof />
        <LocationFinder />
        <AppPromo />
      </main>

      <Footer />
      
      <StickyCart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartCount={cartCount} 
      />
    </div>
  );
}
