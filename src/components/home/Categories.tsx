"use client";

import { IndianRupee, Laptop, Monitor, Gamepad2, Cpu, Printer, MousePointer2, Battery, Camera } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const categories = [
  { name: "Cash Counters", icon: IndianRupee, href: "/products#cash-counters" },
  { name: "Laptops", icon: Laptop, href: "/products#laptops" },
  { name: "Desktops", icon: Monitor, href: "/products#desktops" },
  { name: "Gaming Setup", icon: Gamepad2, href: "/products#gaming-setup" },
  { name: "Imported Laptops", icon: Cpu, href: "/products#imported-laptops" },
  { name: "Printers & Toners", icon: Printer, href: "/products#printers" },
  { name: "Laptop Accessories", icon: MousePointer2, href: "/products#laptop-accessories" },
  { name: "UPS Backups", icon: Battery, href: "/products#ups-backups" },
  { name: "CCTV Cameras", icon: Camera, href: "/products#cctv-cameras" },
];

export default function Categories() {
  return (
    <section className="bg-white border-b border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-0 border border-gray-200 divide-x divide-y divide-gray-200">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <Link className="flex flex-col items-center gap-3 p-6 text-center hover:bg-[#e8f0fe] group transition-colors h-full" href={cat.href}>
                <div className="text-[#0050d1] group-hover:scale-110 transition-transform">
                  <cat.icon className="w-8 h-8" />
                </div>
                <span className="text-xs font-bold text-gray-700 group-hover:text-[#0050d1] transition-colors leading-tight">
                  {cat.name}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
