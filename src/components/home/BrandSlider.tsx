"use client";

import { motion } from "framer-motion";

const brands = [
  "DELL", "HP", "LENOVO", "MSI", "ACER", "CP PLUS", "HIKVISION", "CANON", "EPSON", "ZEBRONICS", "FINGERS", "CYBERPOWER"
];

export default function BrandSlider() {
  return (
    <div className="py-12 bg-white overflow-hidden border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 mb-6">
        <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] text-center">Authorized Sales & Service Partner For</p>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {/* Double the array for seamless infinite loop */}
          {[...brands, ...brands].map((brand, index) => (
            <div 
              key={index} 
              className="mx-12 text-2xl md:text-3xl font-black text-gray-200 hover:text-[#0050d1] transition-colors cursor-default tracking-tighter"
            >
              {brand}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
