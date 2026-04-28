"use client";

import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[calc(100vh-5rem)] bg-brand-dark flex items-center overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-[#081121] to-[#040810] z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-blue/20 via-transparent to-transparent z-0" />
      
      <div className="container mx-auto px-4 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
        {/* Text Content */}
        <div className="flex flex-col justify-center text-white pt-12 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Count Your Cash <br />
              <span className="text-brand-red">With Ease.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-lg leading-relaxed">
              No. 1 Cash Handling Products in Telangana. Experience precision, speed, and reliability with our industrial-grade machines.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:9440502488" className="bg-brand-red hover:bg-red-700 text-white px-8 py-4 rounded-md font-bold text-lg flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,0,0,0.3)]">
                <Phone className="w-5 h-5 mr-3" />
                Call for Free Demo
              </a>
              <a href="/products" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-md font-bold text-lg flex items-center justify-center transition-all backdrop-blur-sm">
                Explore Products
              </a>
            </div>
            
            <div className="mt-12 flex items-center space-x-6 text-sm text-gray-400 font-medium">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                AMC Services
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-brand-red rounded-full mr-2 shadow-[0_0_10px_rgba(255,0,0,0.5)]"></div>
                Expert Repair
              </div>
            </div>
          </motion.div>
        </div>

        {/* Image/Graphic Placeholder (Removed 3D) */}
        <div className="hidden lg:flex items-center justify-center relative w-full h-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full h-full max-h-[500px] flex items-center justify-center"
          >
            {/* Glowing background effect behind the machine */}
            <div className="absolute inset-0 bg-brand-red/20 blur-[100px] rounded-full w-3/4 h-3/4 m-auto z-0" />
            
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative z-10 w-full h-full"
            >
              <Image 
                src="/inx-4000.png" 
                alt="INX 4000 Mix Value Counter" 
                fill
                className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
