import { motion } from 'motion/react';
import { Plus, Star } from 'lucide-react';
import { useState } from 'react';

const categories = ["All", "Burgers", "Chicken", "Fries", "Drinks"];

const menuItems = [
  { id: 1, name: "The Double Flame", cat: "Burgers", price: 8.99, rating: 4.9, img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop" },
  { id: 2, name: "Crispy Chicken Deluxe", cat: "Chicken", price: 7.49, rating: 4.8, img: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop" },
  { id: 3, name: "Loaded Cheese Fries", cat: "Fries", price: 4.99, rating: 4.7, img: "https://images.unsplash.com/photo-1576107232684-1279f390859f?q=80&w=800&auto=format&fit=crop" },
  { id: 4, name: "Spicy Inferno Burger", cat: "Burgers", price: 9.49, rating: 4.9, img: "https://images.unsplash.com/photo-1594212691516-436f8f6c582f?q=80&w=800&auto=format&fit=crop" },
  { id: 5, name: "Classic Cola", cat: "Drinks", price: 2.49, rating: 4.5, img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop" },
  { id: 6, name: "Onion Rings", cat: "Fries", price: 3.99, rating: 4.6, img: "https://images.unsplash.com/photo-1639024471283-03518883512d?q=80&w=800&auto=format&fit=crop" },
];

export default function Menu({ onAdd }: { onAdd: () => void }) {
  const [activeCat, setActiveCat] = useState("All");

  const filtered = activeCat === "All" ? menuItems : menuItems.filter(i => i.cat === activeCat);

  return (
    <section id="menu" className="py-24 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display text-brand-dark mb-4">OUR MENU</h2>
          <p className="text-xl text-brand-dark/70 font-medium max-w-2xl mx-auto">
            Fresh ingredients, flame-grilled perfection, and flavors that will blow your mind.
          </p>
        </div>

        {/* Categories */}
        <div className="flex overflow-x-auto hide-scrollbar gap-4 mb-12 pb-4 justify-start md:justify-center">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`whitespace-nowrap px-8 py-3 rounded-full font-display text-xl transition-all ${
                activeCat === cat 
                  ? 'bg-brand-red text-brand-white shadow-lg shadow-brand-red/30' 
                  : 'bg-brand-light text-brand-dark hover:bg-brand-yellow hover:text-brand-dark'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item, i) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-brand-light rounded-3xl p-6 flex flex-col items-center text-center group hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-brand-yellow/50"
            >
              <div className="relative w-48 h-48 mb-6">
                <div className="absolute inset-0 bg-brand-yellow/20 rounded-full blur-2xl group-hover:bg-brand-red/20 transition-colors"></div>
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover rounded-full drop-shadow-xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
                />
              </div>
              
              <div className="flex items-center gap-1 text-brand-orange mb-2">
                <Star className="w-5 h-5 fill-current" />
                <span className="font-bold text-brand-dark">{item.rating}</span>
              </div>
              
              <h3 className="text-2xl font-display text-brand-dark mb-2">{item.name}</h3>
              <p className="text-brand-red font-display text-3xl mb-6">${item.price}</p>
              
              <button 
                onClick={onAdd}
                className="w-full py-4 rounded-xl bg-brand-dark text-brand-white font-display text-xl flex items-center justify-center gap-2 hover:bg-brand-red transition-colors active:scale-95"
              >
                <Plus className="w-6 h-6" /> ADD TO ORDER
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
