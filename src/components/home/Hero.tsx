"use client";

import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#f4f4f4] overflow-hidden">
      {/* Background decoration matching original */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#0050d1]/5 -skew-x-12 transform origin-top z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 py-20 lg:py-0 grid grid-cols-1 lg:grid-cols-2 items-center min-h-[600px] relative z-10">
        {/* Left: Text Content */}
        <div className="flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 text-[#0050d1] text-[13px] font-black tracking-widest mb-6">
            <span className="w-2.5 h-2.5 bg-[#0050d1] rounded-full"></span>
            NO. 1 IN TELANGANA
          </div>
          
          <h1 className="text-[44px] md:text-[56px] lg:text-[68px] font-black text-[#1a1a1a] leading-[1.1] tracking-tight mb-6">
            India's Most<br />
            <span className="text-[#0050d1]">Trusted</span> Cash<br />
            Handling Partner
          </h1>
          
          <p className="text-[17px] text-gray-500 mb-10 max-w-[500px] leading-relaxed font-medium">
            Premium industrial cash counting machines, printers, CCTV cameras and more — backed by expert AMC support across Nizamabad and Telangana.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/products" className="bg-[#0050d1] hover:bg-[#003d9e] text-white font-bold px-10 py-4 text-base transition-all flex items-center justify-center gap-2 group">
              Shop All Products <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="tel:9440502488" className="bg-white border-2 border-[#0050d1] text-[#0050d1] hover:bg-[#0050d1] hover:text-white font-bold px-10 py-4 text-base transition-all flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" /> Book Free Demo
            </a>
          </div>
          
          <div className="mt-14 flex items-center gap-8 text-[13px] font-bold text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#0050d1]"></div>
              <span>500+ Happy Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#0050d1]"></div>
              <span>10+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#0050d1]"></div>
              <span>Same Day Service</span>
            </div>
          </div>
        </div>

        {/* Right: Image Content with Blue Card Background */}
        <div className="hidden lg:flex justify-end relative h-full items-center">
          <div className="relative w-[500px] h-[500px] flex items-center justify-center">
            {/* The blue square background card */}
            <div className="absolute inset-0 bg-[#0050d1] shadow-2xl rounded-sm transform rotate-3 scale-95 opacity-10"></div>
            <div className="absolute inset-0 bg-[#0050d1] shadow-2xl rounded-sm"></div>
            
            <div className="relative z-10 w-[420px] h-[420px]">
              <Image 
                alt="Velocity V-5500 PRO" 
                src="/inx-4000.png" 
                fill
                sizes="420px"
                className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                priority
              />
            </div>
            
            {/* Tagline on image if any */}
            <div className="absolute bottom-10 left-10 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-sm">
              <p className="text-white font-bold text-sm tracking-widest uppercase">Professional Grade</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

