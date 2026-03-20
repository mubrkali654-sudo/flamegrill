import { ShoppingCart, Search, Menu, User, Heart } from 'lucide-react';
import { motion } from 'motion/react';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  onHomeClick: () => void;
}

export default function Navbar({ cartCount, onCartClick, onHomeClick }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 bg-tech-white/90 backdrop-blur-md border-b border-tech-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-4">
            <button className="p-2 -ml-2 text-tech-black hover:bg-tech-gray-100 rounded-full md:hidden">
              <Menu className="w-6 h-6" />
            </button>
            <div 
              className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
              onClick={onHomeClick}
            >
              <div className="w-8 h-8 bg-tech-accent rounded-lg flex items-center justify-center">
                <span className="font-display text-tech-white font-bold text-xl leading-none">T</span>
              </div>
              <span className="font-display font-bold text-xl text-tech-black tracking-tight hidden sm:block">TechNova</span>
            </div>
          </div>

          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <input 
                type="text" 
                placeholder="Search for smartphones, accessories..." 
                className="w-full bg-tech-gray-100 border-none rounded-full py-2.5 pl-12 pr-4 text-sm focus:ring-2 focus:ring-tech-accent focus:bg-tech-white transition-all outline-none"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-tech-gray-800/50" />
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <button className="p-2 text-tech-black hover:bg-tech-gray-100 rounded-full hidden sm:block">
              <User className="w-5 h-5" />
            </button>
            <button className="p-2 text-tech-black hover:bg-tech-gray-100 rounded-full hidden sm:block relative">
              <Heart className="w-5 h-5" />
            </button>
            <button 
              onClick={onCartClick}
              className="relative p-2 text-tech-black hover:bg-tech-gray-100 rounded-full flex items-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  key={cartCount}
                  className="absolute -top-1 -right-1 bg-tech-accent text-tech-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full"
                >
                  {cartCount}
                </motion.span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
