"use client";

import { motion } from "framer-motion";
import { Star, ShieldCheck, Award, Users, MapPin } from "lucide-react";

const testimonials = [
  {
    name: "Arjun Reddy",
    role: "Proprietor, Reddy Jewellers",
    text: "Srinivasa Computers has been our partner for 5 years. Their cash counting machines are top-notch and their AMC service is incredibly reliable.",
    rating: 5
  },
  {
    name: "Suresh Rao",
    role: "Admin, Private School",
    text: "The CCTV installation was seamless. Their team is professional and the after-sales support is the best in Nizamabad.",
    rating: 5
  },
  {
    name: "Priya Sharma",
    role: "Manager, Tech Hub",
    text: "Best place for laptop repairs. They fixed my MacBook motherboard which others couldn't. Very honest pricing.",
    rating: 5
  }
];

export default function TrustSection() {
  return (
    <section className="py-24 bg-brand-dark text-white overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Credibility */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-secondary text-xs font-black tracking-widest uppercase mb-8"
            >
              OUR CREDIBILITY
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black mb-6 leading-tight"
            >
              Trusted by 10,000+ <br />
              <span className="text-secondary">Happy Customers</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed font-medium"
            >
              Since 2014, we have been the cornerstone of technology and security in Telangana. 
              Our commitment to quality and transparency is what sets us apart.
            </motion.p>

            <div className="grid grid-cols-2 gap-8">
              <div className="flex items-center gap-4 p-4 rounded-3xl bg-white/5 border border-white/10">
                <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center text-white">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xl font-black">Certified</div>
                  <div className="text-xs text-gray-400 font-bold uppercase">Technicians</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-3xl bg-white/5 border border-white/10">
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xl font-black">Telangana</div>
                  <div className="text-xs text-gray-400 font-bold uppercase">Wide Service</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Testimonials Slider (Static Grid for simplicity, can be slider) */}
          <div className="space-y-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-white/5 backdrop-blur-md rounded-[32px] border border-white/10 hover:bg-white/10 transition-all group"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-6 font-medium leading-relaxed">&quot;{t.text}&quot;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-tr from-primary to-secondary rounded-full flex items-center justify-center text-white font-black text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-black text-white">{t.name}</div>
                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
