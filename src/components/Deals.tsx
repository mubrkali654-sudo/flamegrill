import { motion } from 'motion/react';
import { Timer, Tag } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Deals() {
  const [timeLeft, setTimeLeft] = useState({ h: 2, m: 45, s: 30 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { h, m, s } = prev;
        if (s > 0) s--;
        else {
          s = 59;
          if (m > 0) m--;
          else {
            m = 59;
            if (h > 0) h--;
          }
        }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const deals = [
    {
      id: 1,
      title: "BOGO WHOPPER",
      desc: "Buy one get one free on our signature flame-grilled burger.",
      img: "https://images.unsplash.com/photo-1594212691516-436f8f6c582f?q=80&w=800&auto=format&fit=crop",
      color: "bg-brand-red",
      textColor: "text-brand-white"
    },
    {
      id: 2,
      title: "FAMILY BUNDLE",
      desc: "4 Burgers, 4 Fries, 4 Drinks. The perfect feast.",
      img: "https://images.unsplash.com/photo-1610440042657-612c34d95e9f?q=80&w=800&auto=format&fit=crop",
      color: "bg-brand-yellow",
      textColor: "text-brand-dark"
    },
    {
      id: 3,
      title: "$5 LUNCH MEAL",
      desc: "Crispy Chicken Sandwich + Small Fries + Drink.",
      img: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop",
      color: "bg-brand-dark",
      textColor: "text-brand-white"
    }
  ];

  return (
    <section id="deals" className="py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-5xl md:text-6xl font-display text-brand-dark mb-2">HOT DEALS</h2>
            <p className="text-lg text-brand-dark/70 font-medium">Grab them before they're gone!</p>
          </div>
          
          <div className="flex items-center gap-3 bg-brand-red text-brand-white px-6 py-3 rounded-full shadow-lg">
            <Timer className="w-6 h-6 animate-pulse" />
            <div className="font-display text-2xl tracking-widest">
              {String(timeLeft.h).padStart(2, '0')}:{String(timeLeft.m).padStart(2, '0')}:{String(timeLeft.s).padStart(2, '0')}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deals.map((deal, i) => (
            <motion.div 
              key={deal.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className={`rounded-3xl overflow-hidden shadow-2xl ${deal.color} ${deal.textColor} relative group cursor-pointer`}
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <img 
                  src={deal.img} 
                  alt={deal.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 z-20 bg-brand-white text-brand-dark px-3 py-1 rounded-full font-bold text-sm flex items-center gap-1">
                  <Tag className="w-4 h-4" /> LIMITED
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-3xl font-display mb-2">{deal.title}</h3>
                <p className="opacity-90 font-medium mb-6">{deal.desc}</p>
                <button className={`w-full py-4 rounded-xl font-display text-xl transition-all active:scale-95 ${
                  deal.color === 'bg-brand-dark' ? 'bg-brand-yellow text-brand-dark hover:bg-white' : 
                  deal.color === 'bg-brand-yellow' ? 'bg-brand-dark text-brand-white hover:bg-black' : 
                  'bg-brand-white text-brand-red hover:bg-brand-yellow hover:text-brand-dark'
                }`}>
                  CLAIM DEAL
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
