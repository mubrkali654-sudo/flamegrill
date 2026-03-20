import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, X, ChevronRight, Trash2, Truck } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

export default function CartDrawer({ isOpen, onClose, items, onUpdateQuantity, onRemove }: CartDrawerProps) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const freeShippingThreshold = 500;
  const progress = Math.min((subtotal / freeShippingThreshold) * 100, 100);
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-tech-black/60 backdrop-blur-sm z-50"
          />
          
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[450px] bg-tech-white shadow-2xl z-50 flex flex-col"
          >
            <div className="p-6 border-b border-tech-gray-100 flex justify-between items-center">
              <h2 className="font-display text-2xl font-bold text-tech-black flex items-center gap-3">
                <ShoppingCart className="w-6 h-6 text-tech-accent" /> Your Cart
              </h2>
              <button 
                onClick={onClose}
                className="p-2 text-tech-gray-800 hover:text-tech-black hover:bg-tech-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Free Shipping Progress */}
            <div className="p-6 bg-tech-gray-100/50 border-b border-tech-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <Truck className={`w-5 h-5 ${remainingForFreeShipping === 0 ? 'text-tech-success' : 'text-tech-accent'}`} />
                <p className="text-sm font-medium text-tech-black">
                  {remainingForFreeShipping === 0 
                    ? "You've unlocked free shipping!" 
                    : `Add $${remainingForFreeShipping.toFixed(2)} more for free shipping`}
                </p>
              </div>
              <div className="h-2 w-full bg-tech-gray-100 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  className={`h-full rounded-full ${remainingForFreeShipping === 0 ? 'bg-tech-success' : 'bg-tech-accent'}`}
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-tech-gray-800/50">
                  <ShoppingCart className="w-16 h-16 mb-4 opacity-20" />
                  <p className="font-display text-xl font-semibold text-tech-black mb-2">Your cart is empty</p>
                  <p className="text-sm text-center mb-8">Looks like you haven't added any tech goodies yet.</p>
                  <button 
                    onClick={onClose}
                    className="px-8 py-3 bg-tech-accent text-tech-white font-semibold rounded-lg hover:bg-tech-accent-hover transition-colors"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4 group">
                      <div className="w-24 h-24 bg-tech-gray-100 rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center p-2">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-contain mix-blend-multiply"
                        />
                      </div>
                      
                      <div className="flex-1 flex flex-col">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-semibold text-tech-black line-clamp-2 pr-4">{item.name}</h4>
                          <button 
                            onClick={() => onRemove(item.id)}
                            className="text-tech-gray-800/40 hover:text-tech-danger transition-colors p-1"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        
                        <p className="text-sm text-tech-gray-800/60 mb-auto">{item.brand}</p>
                        
                        <div className="flex justify-between items-end mt-2">
                          <div className="flex items-center gap-3 bg-tech-gray-100 rounded-lg px-2 py-1">
                            <button 
                              onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                              className="w-6 h-6 flex items-center justify-center text-tech-black hover:bg-tech-white rounded transition-colors font-bold"
                            >
                              -
                            </button>
                            <span className="font-semibold text-sm w-4 text-center">{item.quantity}</span>
                            <button 
                              onClick={() => onUpdateQuantity(item.id, Math.min(item.stockCount, item.quantity + 1))}
                              className="w-6 h-6 flex items-center justify-center text-tech-black hover:bg-tech-white rounded transition-colors font-bold"
                            >
                              +
                            </button>
                          </div>
                          <p className="font-bold text-tech-black">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 bg-tech-white border-t border-tech-gray-100 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center text-sm font-medium text-tech-gray-800/70">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-medium text-tech-gray-800/70">
                    <span>Shipping</span>
                    <span>{remainingForFreeShipping === 0 ? 'Free' : '$15.00'}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-medium text-tech-gray-800/70">
                    <span>Estimated Tax</span>
                    <span>${(subtotal * 0.08).toFixed(2)}</span>
                  </div>
                  
                  <div className="pt-3 border-t border-tech-gray-100 flex justify-between items-center">
                    <span className="font-display font-bold text-xl text-tech-black">Total</span>
                    <span className="font-display font-bold text-2xl text-tech-accent">
                      ${(subtotal + (remainingForFreeShipping === 0 ? 0 : 15) + (subtotal * 0.08)).toFixed(2)}
                    </span>
                  </div>
                </div>
                
                <button className="w-full py-4 bg-tech-black text-tech-white font-bold text-lg rounded-xl hover:bg-tech-gray-900 transition-all flex items-center justify-center gap-2 active:scale-[0.98] shadow-lg">
                  Proceed to Checkout <ChevronRight className="w-5 h-5" />
                </button>
                
                <div className="mt-4 flex justify-center items-center gap-4 opacity-60">
                  {/* Mock payment icons */}
                  <div className="h-6 w-10 bg-tech-gray-800 rounded"></div>
                  <div className="h-6 w-10 bg-tech-gray-800 rounded"></div>
                  <div className="h-6 w-10 bg-tech-gray-800 rounded"></div>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
