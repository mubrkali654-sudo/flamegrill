import { motion } from 'motion/react';
import { useState } from 'react';

const ingredients = [
  { id: 'patty', name: 'Extra Patty', price: 2.50, color: 'bg-amber-900' },
  { id: 'cheese', name: 'Cheese', price: 0.50, color: 'bg-yellow-400' },
  { id: 'bacon', name: 'Bacon', price: 1.50, color: 'bg-red-800' },
  { id: 'lettuce', name: 'Lettuce', price: 0.00, color: 'bg-green-500' },
  { id: 'tomato', name: 'Tomato', price: 0.00, color: 'bg-red-500' },
  { id: 'onion', name: 'Onion', price: 0.00, color: 'bg-purple-200' },
];

export default function BurgerBuilder({ onAdd }: { onAdd: () => void }) {
  const [selected, setSelected] = useState<string[]>(['patty', 'cheese', 'lettuce', 'tomato']);
  const basePrice = 5.99;

  const toggleIngredient = (id: string) => {
    setSelected(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const totalPrice = basePrice + selected.reduce((sum, id) => {
    const item = ingredients.find(i => i.id === id);
    return sum + (item?.price || 0);
  }, 0);

  return (
    <section className="py-24 bg-brand-dark text-brand-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1">
            <h2 className="text-5xl md:text-6xl font-display text-brand-yellow mb-4">BUILD YOUR OWN</h2>
            <p className="text-xl text-brand-light/80 font-medium mb-12">
              Customize your flame-grilled masterpiece exactly how you like it.
            </p>

            <div className="space-y-4 mb-12">
              {ingredients.map(ing => (
                <div 
                  key={ing.id}
                  onClick={() => toggleIngredient(ing.id)}
                  className={`flex items-center justify-between p-4 rounded-2xl cursor-pointer border-2 transition-all ${
                    selected.includes(ing.id) 
                      ? 'border-brand-yellow bg-brand-yellow/10' 
                      : 'border-brand-light/10 hover:border-brand-light/30'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-6 h-6 rounded-full ${ing.color}`}></div>
                    <span className="font-display text-2xl">{ing.name}</span>
                  </div>
                  <span className="font-bold text-lg">
                    {ing.price > 0 ? `+$${ing.price.toFixed(2)}` : 'FREE'}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between p-6 bg-brand-red rounded-3xl shadow-2xl shadow-brand-red/20">
              <div>
                <p className="font-bold text-brand-white/80 uppercase tracking-wider text-sm">Total Price</p>
                <p className="font-display text-5xl text-brand-white">${totalPrice.toFixed(2)}</p>
              </div>
              <button 
                onClick={onAdd}
                className="px-8 py-4 bg-brand-yellow text-brand-dark font-display text-2xl rounded-xl hover:bg-brand-white transition-colors active:scale-95"
              >
                ADD TO CART
              </button>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center items-center relative h-[500px]">
            <div className="absolute inset-0 bg-brand-yellow/10 rounded-full blur-3xl -z-10"></div>
            
            <div className="relative w-64 flex flex-col items-center justify-center gap-1">
              {/* Top Bun */}
              <motion.div 
                layout
                className="w-full h-24 bg-amber-500 rounded-t-[100px] rounded-b-xl shadow-inner relative overflow-hidden"
                style={{ backgroundImage: 'radial-gradient(circle at 50% 10%, #fcd34d 0%, transparent 50%)' }}
              >
                {/* Sesame seeds */}
                <div className="absolute top-4 left-1/4 w-2 h-1 bg-amber-100 rounded-full rotate-45"></div>
                <div className="absolute top-6 left-1/2 w-2 h-1 bg-amber-100 rounded-full -rotate-12"></div>
                <div className="absolute top-5 right-1/4 w-2 h-1 bg-amber-100 rounded-full rotate-12"></div>
                <div className="absolute top-10 left-1/3 w-2 h-1 bg-amber-100 rounded-full rotate-90"></div>
                <div className="absolute top-12 right-1/3 w-2 h-1 bg-amber-100 rounded-full -rotate-45"></div>
              </motion.div>

              {/* Ingredients */}
              {selected.includes('lettuce') && (
                <motion.div layout initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} className="w-[105%] h-6 bg-green-500 rounded-full shadow-sm z-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)' }}></motion.div>
              )}
              {selected.includes('tomato') && (
                <motion.div layout initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} className="w-full flex gap-1 z-10">
                  <div className="w-1/2 h-4 bg-red-500 rounded-full"></div>
                  <div className="w-1/2 h-4 bg-red-500 rounded-full"></div>
                </motion.div>
              )}
              {selected.includes('onion') && (
                <motion.div layout initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} className="w-[95%] h-3 bg-purple-200 rounded-full border border-purple-300 z-10"></motion.div>
              )}
              {selected.includes('bacon') && (
                <motion.div layout initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} className="w-[110%] h-4 bg-red-800 rounded-sm rotate-2 z-10" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(255,255,255,0.2) 20px, rgba(255,255,255,0.2) 40px)' }}></motion.div>
              )}
              {selected.includes('cheese') && (
                <motion.div layout initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} className="w-[105%] h-4 bg-yellow-400 rounded-sm z-10 translate-y-2"></motion.div>
              )}
              {selected.includes('patty') && (
                <motion.div layout initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} className="w-full h-12 bg-amber-900 rounded-2xl shadow-md z-0" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(0,0,0,0.2) 0%, transparent 100%)' }}></motion.div>
              )}

              {/* Bottom Bun */}
              <motion.div layout className="w-full h-16 bg-amber-500 rounded-b-[40px] rounded-t-xl shadow-inner mt-1"></motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
