import { Facebook, Instagram, Twitter, Youtube, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-tech-black text-tech-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-tech-gray-800 pb-16">
          
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-tech-accent rounded-lg flex items-center justify-center">
                <span className="font-display text-tech-white font-bold text-2xl leading-none">T</span>
              </div>
              <span className="font-display font-bold text-2xl tracking-tight">TechNova</span>
            </div>
            <p className="text-tech-gray-100/60 font-medium mb-8 leading-relaxed">
              Your ultimate destination for the latest electronics, smart gadgets, and premium accessories. Delivered fast, guaranteed genuine.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-tech-gray-800 flex items-center justify-center hover:bg-tech-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-tech-gray-800 flex items-center justify-center hover:bg-tech-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-tech-gray-800 flex items-center justify-center hover:bg-tech-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-tech-gray-800 flex items-center justify-center hover:bg-tech-accent transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Shop Categories</h4>
            <ul className="space-y-4 font-medium text-tech-gray-100/70">
              <li><a href="#" className="hover:text-tech-accent transition-colors">Smartphones</a></li>
              <li><a href="#" className="hover:text-tech-accent transition-colors">Laptops & PCs</a></li>
              <li><a href="#" className="hover:text-tech-accent transition-colors">Audio & Headphones</a></li>
              <li><a href="#" className="hover:text-tech-accent transition-colors">Smart Watches</a></li>
              <li><a href="#" className="hover:text-tech-accent transition-colors">Accessories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Customer Service</h4>
            <ul className="space-y-4 font-medium text-tech-gray-100/70">
              <li><a href="#" className="hover:text-tech-accent transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-tech-accent transition-colors">Returns & Refunds</a></li>
              <li><a href="#" className="hover:text-tech-accent transition-colors">Warranty Info</a></li>
              <li><a href="#" className="hover:text-tech-accent transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-tech-accent transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Newsletter</h4>
            <p className="text-tech-gray-100/70 font-medium mb-4">
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>
            <form className="flex gap-2">
              <div className="relative flex-1">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-tech-gray-800 border border-tech-gray-800 rounded-lg py-3 pl-10 pr-4 text-sm focus:ring-2 focus:ring-tech-accent focus:border-transparent transition-all outline-none"
                />
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-tech-gray-100/40" />
              </div>
              <button className="bg-tech-accent text-tech-white px-6 py-3 rounded-lg font-semibold hover:bg-tech-accent-hover transition-colors">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-tech-gray-100/50 text-sm font-medium">
            &copy; {new Date().getFullYear()} TechNova Electronics. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-medium text-tech-gray-100/50">
            <a href="#" className="hover:text-tech-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-tech-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-tech-white transition-colors">Cookie Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
