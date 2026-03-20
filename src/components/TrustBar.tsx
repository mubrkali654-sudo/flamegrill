import { ShieldCheck, Truck, RotateCcw, HeadphonesIcon } from 'lucide-react';

export default function TrustBar() {
  const features = [
    {
      icon: Truck,
      title: "Free Shipping",
      desc: "On orders over $500"
    },
    {
      icon: ShieldCheck,
      title: "Secure Payment",
      desc: "100% secure checkout"
    },
    {
      icon: RotateCcw,
      title: "30-Day Returns",
      desc: "No questions asked"
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      desc: "Dedicated help desk"
    }
  ];

  return (
    <div className="bg-tech-white border-y border-tech-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div key={i} className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 bg-tech-gray-100 rounded-full flex items-center justify-center text-tech-accent mb-2">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="font-display font-semibold text-tech-black">{feature.title}</h4>
                <p className="text-sm text-tech-gray-800/60 font-medium">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
