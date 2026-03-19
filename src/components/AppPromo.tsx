import { motion } from 'motion/react';
import { Smartphone, Gift, Zap } from 'lucide-react';

export default function AppPromo() {
  return (
    <section id="rewards" className="py-24 bg-brand-yellow relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-red -skew-x-12 translate-x-32 -z-10 hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 flex justify-center lg:justify-start"
          >
            <div className="relative w-72 h-[600px] bg-brand-dark rounded-[3rem] border-8 border-brand-dark shadow-2xl overflow-hidden transform -rotate-6 hover:rotate-0 transition-transform duration-500">
              {/* Phone Screen Mockup */}
              <div className="absolute inset-0 bg-brand-light flex flex-col">
                <div className="h-48 bg-brand-red rounded-b-3xl p-6 text-brand-white flex flex-col justify-end">
                  <h3 className="font-display text-3xl mb-1">HELLO, ALEX!</h3>
                  <p className="font-bold text-brand-white/80">You have 450 points</p>
                </div>
                
                <div className="p-6 flex-1 flex flex-col gap-4">
                  <div className="bg-brand-white p-4 rounded-2xl shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center">
                      <Gift className="w-6 h-6 text-brand-dark" />
                    </div>
                    <div>
                      <p className="font-bold text-brand-dark">Free Fries</p>
                      <p className="text-sm text-brand-dark/60">Redeem for 200 pts</p>
                    </div>
                  </div>
                  
                  <div className="bg-brand-white p-4 rounded-2xl shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center">
                      <Zap className="w-6 h-6 text-brand-white" />
                    </div>
                    <div>
                      <p className="font-bold text-brand-dark">Flash Deal</p>
                      <p className="text-sm text-brand-dark/60">50% off next order</p>
                    </div>
                  </div>
                  
                  <button className="mt-auto w-full py-4 bg-brand-dark text-brand-white font-display text-xl rounded-xl">
                    ORDER NOW
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="order-1 lg:order-2 text-center lg:text-left lg:text-brand-white">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display mb-6 text-brand-dark lg:text-brand-white">
              DOWNLOAD THE APP. <br/>
              <span className="text-brand-red lg:text-brand-yellow">GET REWARDED.</span>
            </h2>
            
            <p className="text-xl font-medium mb-12 max-w-lg mx-auto lg:mx-0 text-brand-dark/80 lg:text-brand-white/90">
              Join the FlameGrill Rewards program. Earn points on every order, get exclusive app-only deals, and skip the line when you order ahead.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-brand-dark text-brand-white font-display text-2xl rounded-xl hover:bg-brand-dark/90 transition-all flex items-center justify-center gap-3">
                <Smartphone className="w-6 h-6" /> APP STORE
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-brand-white text-brand-dark font-display text-2xl rounded-xl hover:bg-brand-light transition-all flex items-center justify-center gap-3">
                <Smartphone className="w-6 h-6" /> GOOGLE PLAY
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
