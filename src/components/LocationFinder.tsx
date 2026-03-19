import { MapPin, Navigation, Search } from 'lucide-react';
import { motion } from 'motion/react';

export default function LocationFinder() {
  return (
    <section id="locations" className="py-24 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-5xl md:text-6xl font-display text-brand-dark mb-4">FIND YOUR NEAREST FLAMEGRILL</h2>
            <p className="text-xl text-brand-dark/70 font-medium mb-8">
              With over 5,000 locations worldwide, you're never far from flame-grilled perfection.
            </p>

            <div className="bg-brand-light p-2 rounded-2xl flex items-center shadow-lg mb-8">
              <Search className="w-6 h-6 text-brand-dark/50 ml-4" />
              <input 
                type="text" 
                placeholder="Enter zip code or city..." 
                className="w-full bg-transparent border-none focus:ring-0 px-4 py-3 text-lg font-medium text-brand-dark placeholder-brand-dark/40"
              />
              <button className="bg-brand-red text-brand-white px-6 py-3 rounded-xl font-display text-lg hover:bg-brand-dark transition-colors flex items-center gap-2">
                <Navigation className="w-5 h-5" /> LOCATE ME
              </button>
            </div>

            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-brand-light p-6 rounded-2xl flex justify-between items-center hover:shadow-xl transition-shadow cursor-pointer border border-transparent hover:border-brand-yellow/50"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-red/10 p-3 rounded-full text-brand-red">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-brand-dark">Downtown Branch</h4>
                      <p className="text-brand-dark/60 font-medium text-sm mb-1">123 Burger St, Foodville</p>
                      <p className="text-green-600 font-bold text-sm">Open until 11:00 PM</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-brand-dark mb-2">1.2 mi</p>
                    <button className="text-brand-red font-bold hover:underline text-sm uppercase tracking-wider">Order Here</button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="h-[600px] bg-gray-200 rounded-3xl overflow-hidden shadow-2xl relative">
            {/* Placeholder for actual map integration */}
            <div className="absolute inset-0 bg-brand-dark/5 flex items-center justify-center">
              <div className="text-center p-8 bg-brand-white/90 backdrop-blur-sm rounded-2xl shadow-xl">
                <MapPin className="w-12 h-12 text-brand-red mx-auto mb-4" />
                <h3 className="font-display text-2xl text-brand-dark mb-2">Interactive Map</h3>
                <p className="text-brand-dark/60 font-medium">Google Maps integration goes here.</p>
              </div>
            </div>
            
            {/* Decorative Map Pattern */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #1D3557 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>
          </div>

        </div>
      </div>
    </section>
  );
}
