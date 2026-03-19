import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-light pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center">
                <span className="font-display text-brand-white text-2xl leading-none pt-1">F</span>
              </div>
              <span className="font-display text-3xl text-brand-white tracking-wide pt-1">FLAMEGRILL</span>
            </div>
            <p className="text-brand-light/60 font-medium mb-8">
              Serving flame-grilled perfection since 1954. Quality ingredients, bold flavors, and fast service.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-brand-light/10 flex items-center justify-center hover:bg-brand-red transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-light/10 flex items-center justify-center hover:bg-brand-red transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-light/10 flex items-center justify-center hover:bg-brand-red transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-light/10 flex items-center justify-center hover:bg-brand-red transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-xl text-brand-yellow mb-6">EXPLORE</h4>
            <ul className="space-y-4 font-medium text-brand-light/80">
              <li><a href="#" className="hover:text-brand-white transition-colors">Our Menu</a></li>
              <li><a href="#" className="hover:text-brand-white transition-colors">Deals & Offers</a></li>
              <li><a href="#" className="hover:text-brand-white transition-colors">Locations</a></li>
              <li><a href="#" className="hover:text-brand-white transition-colors">Rewards Program</a></li>
              <li><a href="#" className="hover:text-brand-white transition-colors">Gift Cards</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl text-brand-yellow mb-6">COMPANY</h4>
            <ul className="space-y-4 font-medium text-brand-light/80">
              <li><a href="#" className="hover:text-brand-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-white transition-colors">Franchising</a></li>
              <li><a href="#" className="hover:text-brand-white transition-colors">Investor Relations</a></li>
              <li><a href="#" className="hover:text-brand-white transition-colors">Press Room</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl text-brand-yellow mb-6">SUPPORT</h4>
            <ul className="space-y-4 font-medium text-brand-light/80">
              <li><a href="#" className="hover:text-brand-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-brand-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-brand-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-white transition-colors">Accessibility</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-brand-light/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-light/50 text-sm font-medium">
            &copy; {new Date().getFullYear()} FlameGrill Corporation. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm font-medium text-brand-light/50">
            <a href="#" className="hover:text-brand-white">Do Not Sell My Info</a>
            <span>|</span>
            <a href="#" className="hover:text-brand-white">Cookie Settings</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
