import { Menu, ShoppingBag, User } from 'lucide-react';
import { motion } from 'motion/react';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
}

export default function Navbar({ cartCount, onCartClick }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 bg-brand-light/90 backdrop-blur-md border-b border-brand-dark/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-4">
            <button className="p-2 -ml-2 text-brand-dark hover:bg-brand-dark/5 rounded-full md:hidden">
              <Menu className="w-6 h-6" />
            </button>
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center">
                <span className="font-display text-brand-white text-xl leading-none pt-1">F</span>
              </div>
              <span className="font-display text-2xl text-brand-red tracking-wide pt-1 hidden sm:block">FLAMEGRILL</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#menu" className="font-bold text-brand-dark hover:text-brand-red transition-colors">Menu</a>
            <a href="#deals" className="font-bold text-brand-dark hover:text-brand-red transition-colors">Deals</a>
            <a href="#locations" className="font-bold text-brand-dark hover:text-brand-red transition-colors">Locations</a>
            <a href="#rewards" className="font-bold text-brand-dark hover:text-brand-red transition-colors">Rewards</a>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <button className="p-2 text-brand-dark hover:bg-brand-dark/5 rounded-full hidden sm:block">
              <User className="w-6 h-6" />
            </button>
            <button 
              onClick={onCartClick}
              className="relative p-2 text-brand-dark hover:bg-brand-dark/5 rounded-full flex items-center gap-2 bg-brand-yellow/20"
            >
              <ShoppingBag className="w-6 h-6" />
              {cartCount > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  key={cartCount}
                  className="absolute -top-1 -right-1 bg-brand-red text-brand-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full"
                >
                  {cartCount}
                </motion.span>
              )}
              <span className="font-bold hidden sm:block pr-2">${(cartCount * 8.99).toFixed(2)}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
