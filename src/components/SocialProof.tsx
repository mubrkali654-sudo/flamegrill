import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Sarah Jenkins",
    text: "Best burger I've had in years. The flame-grilled flavor is unbeatable. Delivery was super fast too!",
    rating: 5,
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Mike Thompson",
    text: "The app is so easy to use. I love the rewards program, already got a free meal after just a few orders.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    text: "Those loaded cheese fries are my new obsession. Always hot and crispy when they arrive.",
    rating: 4,
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
  }
];

export default function SocialProof() {
  return (
    <section className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display text-brand-dark mb-4">DON'T JUST TAKE OUR WORD</h2>
          <p className="text-xl text-brand-dark/70 font-medium max-w-2xl mx-auto">
            See what our hungry customers have to say about their FlameGrill experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div 
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-brand-white p-8 rounded-3xl shadow-xl relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-brand-yellow/20" />
              
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star 
                    key={j} 
                    className={`w-5 h-5 ${j < review.rating ? 'fill-brand-yellow text-brand-yellow' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              
              <p className="text-brand-dark/80 text-lg font-medium mb-8 italic">"{review.text}"</p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={review.img} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-brand-red"
                />
                <div>
                  <h4 className="font-bold text-brand-dark">{review.name}</h4>
                  <p className="text-sm text-brand-dark/50">Verified Buyer</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
