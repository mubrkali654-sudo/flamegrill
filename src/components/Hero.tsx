import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-dark text-brand-light min-h-[85vh] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, var(--color-brand-light) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center lg:text-left pt-12 lg:pt-0"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-red/20 text-brand-red border border-brand-red/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
              <span className="font-bold text-sm tracking-wider uppercase">Limited Time Offer</span>
            </div>
            
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-display leading-[0.85] mb-6 text-brand-white">
              FLAME-GRILLED <br/>
              <span className="text-brand-yellow">PERFECTION</span> <br/>
              DELIVERED FAST.
            </h1>
            
            <p className="text-lg sm:text-xl text-brand-light/80 mb-8 max-w-lg mx-auto lg:mx-0 font-medium">
              Crush your hunger with our signature 100% beef burgers, flame-grilled to perfection. Order now and get it hot and fresh.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-brand-red text-brand-white font-display text-2xl rounded-xl hover:bg-brand-red/90 transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-brand-red/30 flex items-center justify-center gap-2">
                ORDER NOW <ChevronRight className="w-6 h-6" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-brand-yellow text-brand-yellow font-display text-2xl rounded-xl hover:bg-brand-yellow hover:text-brand-dark transition-all">
                VIEW DEALS
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            {/* Decorative elements behind burger */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-red/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-yellow/30 rounded-full blur-2xl -z-10"></div>
            
            <motion.img 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1599&auto=format&fit=crop" 
              alt="Massive Flame-Grilled Burger" 
              className="w-full max-w-2xl mx-auto drop-shadow-2xl rounded-full object-cover aspect-square border-8 border-brand-dark/50"
              style={{ maskImage: 'radial-gradient(circle, black 60%, transparent 100%)', WebkitMaskImage: 'radial-gradient(circle, black 60%, transparent 100%)' }}
            />
            
            {/* Floating Badges */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-4 -right-4 sm:bottom-10 sm:right-10 bg-brand-yellow text-brand-dark p-4 rounded-2xl shadow-xl transform rotate-6 border-4 border-brand-dark"
            >
              <p className="font-display text-3xl leading-none">ONLY</p>
              <p className="font-display text-5xl leading-none text-brand-red">$8.99</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
