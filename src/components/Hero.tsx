import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero({ onShopNow }: { onShopNow: () => void }) {
  return (
    <section className="relative overflow-hidden bg-tech-black text-tech-white min-h-[80vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=2000&auto=format&fit=crop" 
          alt="Tech Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-tech-black via-tech-black/80 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="pt-12 lg:pt-0"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-tech-accent/20 text-tech-accent border border-tech-accent/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-tech-accent animate-pulse"></span>
              <span className="font-semibold text-xs tracking-wider uppercase">New Arrival</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
              Latest Tech. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-accent to-cyan-400">Best Prices.</span> <br/>
              Delivered Fast.
            </h1>
            
            <p className="text-lg text-tech-gray-100/80 mb-8 max-w-lg font-medium">
              Upgrade your lifestyle with the newest smartphones, premium audio, and smart accessories. Unbeatable deals inside.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button 
                onClick={onShopNow}
                className="w-full sm:w-auto px-8 py-4 bg-tech-accent text-tech-white font-semibold rounded-lg hover:bg-tech-accent-hover transition-all flex items-center justify-center gap-2 shadow-lg shadow-tech-accent/20"
              >
                Shop Now <ArrowRight className="w-5 h-5" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-tech-gray-800 text-tech-white font-semibold rounded-lg hover:bg-tech-gray-900 transition-all border border-tech-gray-800 hover:border-tech-gray-100/20">
                View Deals
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
