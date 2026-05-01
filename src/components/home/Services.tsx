"use client";

import { motion } from "framer-motion";
import { Banknote, Laptop, Camera, Battery, ArrowRight, ShieldCheck, Zap, Monitor, HardDrive, Cpu, ShoppingCart, MousePointer2, Printer, Phone } from "lucide-react";
import Link from "next/link";

const mainCategories = [
  {
    title: "Cash Management",
    subtitle: "PROFESSIONAL CASH COUNTERS",
    desc: "UV, MG, IR detection — perfect for banks, shops & businesses.",
    image: "/ease-1000.png",
    color: "bg-[#0050d1]",
    href: "/products#cash-counters"
  },
  {
    title: "Security Solutions",
    subtitle: "CCTV & SURVEILLANCE",
    desc: "CP Plus, Hikvision & Dahua — installation included.",
    image: "/cpplus_dome_camera.png",
    color: "bg-[#1a1a1a]",
    href: "/products#cctv"
  }
];

const smallCategories = [
  { name: "Cash Counters", icon: <Banknote className="w-7 h-7" />, href: "/products#cash-counters" },
  { name: "Laptops", icon: <Laptop className="w-7 h-7" />, href: "/products#laptops" },
  { name: "Desktops", icon: <Monitor className="w-7 h-7" />, href: "/products#desktops" },
  { name: "Gaming Setup", icon: <GamepadIcon className="w-7 h-7" />, href: "/products#gaming-setup" },
  { name: "Imported Laptops", icon: <Cpu className="w-7 h-7" />, href: "/products#laptops" },
  { name: "Printers & Toners", icon: <Printer className="w-7 h-7" />, href: "/products#printers" },
  { name: "Laptop Accessories", icon: <MousePointer2 className="w-7 h-7" />, href: "/products#accessories" },
  { name: "UPS Backups", icon: <Battery className="w-7 h-7" />, href: "/products#ups" },
  { name: "CCTV Cameras", icon: <Camera className="w-7 h-7" />, href: "/products#cctv" },
];

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Main 2-Column Banner Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {mainCategories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`${cat.color} text-white p-12 relative overflow-hidden group min-h-[340px] flex flex-col justify-center`}
            >
              <div className="relative z-10 w-2/3">
                <p className="text-[11px] font-bold opacity-70 uppercase tracking-[0.2em] mb-4">{cat.subtitle}</p>
                <h3 className="text-4xl font-black mb-6 tracking-tight">{cat.title}</h3>
                <p className="text-white/70 font-medium mb-10 line-clamp-2">{cat.desc}</p>
                <Link href={cat.href} className="bg-white text-[#1a1a1a] px-8 py-3 rounded-sm font-bold text-sm uppercase tracking-wider inline-flex items-center gap-2 hover:bg-gray-100 transition-all">
                  Shop Now <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="absolute right-0 top-0 bottom-0 w-1/2 flex items-center justify-center p-8 bg-black/5">
                <img src={cat.image} alt={cat.title} className="max-w-[80%] max-h-[80%] object-contain group-hover:scale-110 transition-transform duration-700 drop-shadow-2xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Small Icon Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-gray-100 border border-gray-100 overflow-hidden mb-24">
          {smallCategories.map((cat, i) => (
            <Link 
              key={i} 
              href={cat.href}
              className="bg-white p-12 flex flex-col items-center text-center group hover:bg-gray-50 transition-all border-b border-r border-gray-100"
            >
              <div className="text-[#0050d1] mb-6 group-hover:scale-110 transition-transform duration-300">
                {cat.icon}
              </div>
              <span className="text-[11px] font-bold text-[#1a1a1a] uppercase tracking-widest">{cat.name}</span>
            </Link>
          ))}
          <div className="bg-white p-12 flex flex-col items-center justify-center hidden lg:flex border-b border-gray-100" />
        </div>

        {/* Blue Offer Bar */}
        <div className="bg-[#0050d1] text-white p-8 flex flex-col md:flex-row items-center justify-between gap-8 mb-32">
          <div className="flex items-center gap-4 text-center md:text-left">
            <span className="text-2xl">🎯</span>
            <p className="text-lg font-bold tracking-tight">Limited Offer: Free AMC for 1 Year on all Cash Counting Machine purchases above ₹15,000</p>
          </div>
          <a href="https://wa.me/919440502488?text=I%20want%20to%20claim%20the%20Free%20AMC%20Offer!" target="_blank" className="bg-white text-[#0050d1] px-10 py-3 rounded-sm font-bold text-sm uppercase tracking-widest hover:bg-gray-100 transition-all whitespace-nowrap">
            Claim Offer →
          </a>
        </div>

        {/* Why Us Section */}
        <div className="text-center md:text-left">
          <p className="text-[11px] font-bold text-[#0050d1] uppercase tracking-[0.2em] mb-4">Why Us</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] tracking-tight mb-20">Why Choose Srinivasa Computers?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { icon: <ShieldCheck className="w-10 h-10" />, title: "Premium Quality", desc: "Industrial-grade machines built for heavy-duty daily operations." },
              { icon: <Zap className="w-10 h-10" />, title: "Expert AMC", desc: "Comprehensive annual maintenance contracts to keep your business running." },
              { icon: <Monitor className="w-10 h-10" />, title: "Fast Delivery", desc: "Quick delivery and installation across Nizamabad and surrounding areas." },
              { icon: <Phone className="w-10 h-10" />, title: "Dedicated Support", desc: "Always available to assist with repairs and troubleshooting." }
            ].map((feature, i) => (
              <div key={i} className="space-y-4">
                <div className="text-[#0050d1]">{feature.icon}</div>
                <h4 className="text-lg font-bold text-[#1a1a1a]">{feature.title}</h4>
                <p className="text-sm text-gray-500 font-medium leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function GamepadIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="6" y1="12" x2="10" y2="12" />
      <line x1="8" y1="10" x2="8" y2="14" />
      <line x1="15" y1="13" x2="15.01" y2="13" />
      <line x1="18" y1="11" x2="18.01" y2="11" />
      <rect x="2" y="6" width="20" height="12" rx="2" />
    </svg>
  );
}
