"use client";

import { ShieldCheck, Cog, Truck, Headphones } from "lucide-react";

const features = [
  {
    title: "Genuine Products",
    desc: "100% authentic brands with manufacturer warranty on every product.",
    icon: ShieldCheck
  },
  {
    title: "Expert AMC Service",
    desc: "Annual maintenance contracts to keep your machines running at peak performance.",
    icon: Cog
  },
  {
    title: "Fast Delivery",
    desc: "Same-day delivery and installation available across Nizamabad district.",
    icon: Truck
  },
  {
    title: "24/7 Support",
    desc: "Dedicated technical support team always ready to help you.",
    icon: Headphones
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <p className="text-xs font-bold text-[#0050d1] uppercase tracking-widest mb-1">Why Us</p>
          <h2 className="text-2xl font-black text-[#1a1a1a]">Why Choose Srinivasa Computers?</h2>
        </div>
        
        <div className="w-full h-px bg-[#e5e5e5] mb-8"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-200 divide-x divide-y divide-gray-200">
          {features.map((f) => (
            <div key={f.title} className="p-8 group hover:bg-[#e8f0fe] transition-colors">
              <div className="text-[#0050d1] mb-4 group-hover:scale-110 transition-transform inline-block">
                <f.icon className="w-7 h-7" />
              </div>
              <h3 className="text-sm font-bold text-[#1a1a1a] mb-2">{f.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
