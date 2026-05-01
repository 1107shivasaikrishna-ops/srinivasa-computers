"use client";

import { Phone, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 right-0 z-[100] md:hidden p-4"
        >
          <div className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl p-2 flex gap-2">
            <a 
              href="tel:9440502488" 
              className="flex-1 flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-xl text-xs font-black shadow-lg shadow-primary/20"
            >
              <Phone className="w-4 h-4" /> CALL NOW
            </a>
            <a 
              href="https://wa.me/919440502488" 
              target="_blank"
              className="flex-1 flex items-center justify-center gap-2 bg-accent text-white py-3 rounded-xl text-xs font-black shadow-lg shadow-accent/20"
            >
              <MessageCircle className="w-4 h-4" /> WHATSAPP
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
