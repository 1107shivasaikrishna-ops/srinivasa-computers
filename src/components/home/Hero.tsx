"use client";

import { ArrowRight, Phone, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    tagline: "NO. 1 IN TELANGANA",
    title: <>India's Most <span className="text-[#0050d1]">Trusted</span> Cash Handling Partner</>,
    description: "Premium industrial cash counting machines and mix value counters backed by expert AMC support.",
    image: "/inx-4000.png",
    accent: "bg-[#0050d1]",
    cta: "Shop Cash Counters",
    link: "/products#cash-counters"
  },
  {
    id: 2,
    tagline: "BUSINESS & GAMING",
    title: <>Premium <span className="text-[#0050d1]">Laptops</span> & IT Infrastructure</>,
    description: "Latest models from Dell, HP, and Lenovo. New & genuine hardware with official warranties.",
    image: "/cat_laptops.png",
    accent: "bg-[#1a1a1a]",
    cta: "Explore Laptops",
    link: "/products#laptops"
  },
  {
    id: 3,
    tagline: "SECURITY SOLUTIONS",
    title: <>Advanced <span className="text-[#0050d1]">CCTV</span> Surveillance Systems</>,
    description: "Protect your assets with HD security cameras and NVR/DVR systems from CP Plus and Hikvision.",
    image: "/cpplus_dome_camera.png",
    accent: "bg-[#cc0000]",
    cta: "View Security Gear",
    link: "/products#cctv-cameras"
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prev = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className="relative w-full bg-[#f4f4f4] overflow-hidden min-h-[600px] lg:min-h-[700px] flex items-center">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#0050d1]/5 -skew-x-12 transform origin-top z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
        <AnimatePresence mode="wait">
          <motion.div 
            key={current}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12"
          >
            {/* Left: Text Content */}
            <div className="flex flex-col justify-center">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 text-[#0050d1] text-[13px] font-black tracking-widest mb-6"
              >
                <span className={`w-2.5 h-2.5 ${slides[current].accent} rounded-full`}></span>
                {slides[current].tagline}
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-[40px] md:text-[56px] lg:text-[72px] font-black text-[#1a1a1a] leading-[1.05] tracking-tight mb-6"
              >
                {slides[current].title}
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-[17px] text-gray-500 mb-10 max-w-[500px] leading-relaxed font-medium"
              >
                {slides[current].description}
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a href={slides[current].link} className="bg-[#0050d1] hover:bg-[#003d9e] text-white font-bold px-10 py-4 text-base transition-all flex items-center justify-center gap-2 group shadow-lg shadow-[#0050d1]/20">
                  {slides[current].cta} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="tel:9440502488" className="bg-white border-2 border-gray-200 text-[#1a1a1a] hover:border-[#0050d1] hover:text-[#0050d1] font-bold px-10 py-4 text-base transition-all flex items-center justify-center gap-2 shadow-sm">
                  <Phone className="w-5 h-5" /> Free Consultation
                </a>
              </motion.div>
            </div>

            {/* Right: Image Content */}
            <div className="flex justify-center lg:justify-end relative h-[400px] lg:h-[500px] items-center">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                className="relative w-full max-w-[450px] h-full flex items-center justify-center"
              >
                {/* Decorative background for image */}
                <div className={`absolute inset-0 ${slides[current].accent} shadow-2xl rounded-sm transform rotate-3 scale-95 opacity-5`}></div>
                <div className={`absolute inset-0 ${slides[current].accent} shadow-2xl rounded-sm opacity-10 blur-3xl`}></div>
                
                <div className="relative z-10 w-full h-full p-4">
                  <Image 
                    alt="Featured Product" 
                    src={slides[current].image} 
                    fill
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
                    priority
                  />
                </div>
                
                {/* Floating badge */}
                <motion.div 
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="absolute -bottom-4 -left-4 z-20 bg-white shadow-xl p-5 border-l-4 border-[#0050d1]"
                >
                  <p className="text-[#1a1a1a] font-black text-sm tracking-tight leading-none mb-1">BEST PRICE</p>
                  <p className="text-gray-400 font-bold text-[10px] tracking-widest uppercase">Guarantee</p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-6 z-20">
        <button onClick={prev} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-white transition-all text-gray-400 hover:text-[#0050d1] shadow-sm">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="flex gap-2">
          {slides.map((_, idx) => (
            <button 
              key={idx} 
              onClick={() => setCurrent(idx)}
              className={`h-1.5 transition-all duration-500 rounded-full ${idx === current ? "w-10 bg-[#0050d1]" : "w-3 bg-gray-300"}`}
            />
          ))}
        </div>
        <button onClick={next} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-white transition-all text-gray-400 hover:text-[#0050d1] shadow-sm">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}


