"use client";

import { motion } from "framer-motion";
import { CalendarCheck, ShieldCheck, Wrench, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: <CalendarCheck className="w-8 h-8" />,
    title: "Book Service",
    desc: "Call us or book online. We schedule a visit within 24 hours.",
    color: "text-blue-500",
    bg: "bg-blue-50"
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Expert Visit",
    desc: "Our certified technician arrives at your doorstep to inspect.",
    color: "text-indigo-500",
    bg: "bg-indigo-50"
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Problem Fixed",
    desc: "Resolution provided on-site with genuine parts & warranty.",
    color: "text-emerald-500",
    bg: "bg-emerald-50"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-primary/5 rounded-full text-primary text-xs font-black tracking-widest uppercase mb-4"
          >
            OUR PROCESS
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-brand-dark"
          >
            3 Steps to Peace of Mind
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-1 bg-gradient-to-r from-blue-100 via-indigo-100 to-emerald-100 -z-10" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="flex flex-col items-center text-center group"
            >
              <div className={`w-24 h-24 ${step.bg} ${step.color} rounded-[32px] flex items-center justify-center mb-8 shadow-xl shadow-gray-100 group-hover:scale-110 transition-transform duration-500 relative`}>
                {step.icon}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-brand-dark text-white rounded-full flex items-center justify-center font-black text-xs">
                  {i + 1}
                </div>
              </div>
              
              <h3 className="text-xl font-black text-brand-dark mb-4 group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs font-medium">
                {step.desc}
              </p>

              {i < 2 && (
                <div className="md:hidden my-8 text-gray-200">
                  <ArrowRight className="w-8 h-8 rotate-90" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <a 
              href="tel:9440502488" 
              className="inline-flex items-center gap-3 bg-brand-dark text-white px-10 py-4 rounded-2xl font-black shadow-2xl hover:scale-105 active:scale-95 transition-all"
            >
              Start Booking Now <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
