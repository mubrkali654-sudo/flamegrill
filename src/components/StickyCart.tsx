import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, X, ChevronRight } from 'lucide-react';

interface StickyCartProps {
  isOpen: boolean;
  onClose: () => void;
  cartCount: number;
}

export default function StickyCart({ isOpen, onClose, cartCount }: StickyCartProps) {
  const total = (cartCount * 8.99).toFixed(2);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-dark/50 backdrop-blur-sm z-50"
          />
          
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full sm:w-96 bg-brand-light shadow-2xl z-50 flex flex-col"
          >
            <div className="p-6 border-b border-brand-dark/10 flex justify-between items-center bg-brand-white">
              <h2 className="font-display text-3xl text-brand-dark flex items-center gap-3">
                <ShoppingBag className="w-8 h-8 text-brand-red" /> YOUR ORDER
              </h2>
              <button 
                onClick={onClose}
                className="p-2 text-brand-dark/50 hover:text-brand-dark hover:bg-brand-dark/5 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {cartCount === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-brand-dark/50">
                  <ShoppingBag className="w-16 h-16 mb-4 opacity-20" />
                  <p className="font-display text-2xl">YOUR CART IS EMPTY</p>
                  <p className="font-medium mt-2 text-center">Looks like you haven't added any flame-grilled goodness yet.</p>
                  <button 
                    onClick={onClose}
                    className="mt-8 px-8 py-3 bg-brand-red text-brand-white font-display text-xl rounded-xl hover:bg-brand-dark transition-colors"
                  >
                    START ORDERING
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {[...Array(cartCount)].map((_, i) => (
                    <div key={i} className="flex gap-4 bg-brand-white p-4 rounded-2xl shadow-sm">
                      <img 
                        src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=200&auto=format&fit=crop" 
                        alt="Burger" 
                        className="w-20 h-20 object-cover rounded-xl"
                      />
                      <div className="flex-1">
                        <h4 className="font-display text-xl text-brand-dark">The Double Flame</h4>
                        <p className="text-sm text-brand-dark/60 font-medium mb-2">Extra Cheese, No Onions</p>
                        <div className="flex justify-between items-center">
                          <p className="font-bold text-brand-red text-lg">$8.99</p>
                          <div className="flex items-center gap-3 bg-brand-light rounded-full px-3 py-1">
                            <button className="text-brand-dark/50 hover:text-brand-dark font-bold">-</button>
                            <span className="font-bold text-brand-dark">1</span>
                            <button className="text-brand-dark/50 hover:text-brand-dark font-bold">+</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cartCount > 0 && (
              <div className="p-6 bg-brand-white border-t border-brand-dark/10 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
                <div className="flex justify-between items-center mb-4 font-medium text-brand-dark/70">
                  <span>Subtotal</span>
                  <span>${total}</span>
                </div>
                <div className="flex justify-between items-center mb-6 font-medium text-brand-dark/70">
                  <span>Taxes & Fees</span>
                  <span>${(cartCount * 0.8).toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center mb-6">
                  <span className="font-display text-2xl text-brand-dark">TOTAL</span>
                  <span className="font-display text-3xl text-brand-red">${(parseFloat(total) + cartCount * 0.8).toFixed(2)}</span>
                </div>
                
                <button className="w-full py-4 bg-brand-red text-brand-white font-display text-2xl rounded-xl hover:bg-brand-dark transition-colors flex items-center justify-center gap-2 active:scale-95">
                  CHECKOUT <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
