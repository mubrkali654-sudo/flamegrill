import { motion } from 'motion/react';
import { categories } from '../data';
import * as Icons from 'lucide-react';

export default function CategorySection() {
  return (
    <section className="py-16 bg-tech-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-display font-bold text-tech-black mb-2">Shop by Category</h2>
            <p className="text-tech-gray-800/70">Find exactly what you're looking for</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((cat, i) => {
            const Icon = (Icons as any)[cat.icon];
            return (
              <motion.div 
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-tech-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-tech-accent hover:text-tech-white transition-all group"
              >
                <div className="w-16 h-16 bg-tech-white rounded-full flex items-center justify-center mb-4 group-hover:bg-tech-white/20 transition-colors">
                  {Icon && <Icon className="w-8 h-8 text-tech-accent group-hover:text-tech-white transition-colors" />}
                </div>
                <h3 className="font-display font-semibold text-lg">{cat.name}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
