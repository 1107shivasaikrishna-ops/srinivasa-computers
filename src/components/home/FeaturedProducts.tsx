"use client";

import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "EASE 1000 Semi Value Counter",
    tag: "Best Seller",
    tagColor: "#cc0000",
    image: "/ease-1000.png",
    rating: 4.9,
    features: ["1000 notes/min", "UV/MG/IR Detection", "3 Year Warranty"],
    price: "Call for Price"
  },
  {
    id: 2,
    name: "INX 4000 Mix Value Counter",
    tag: "New Arrival",
    tagColor: "#0050d1",
    image: "/inx-4000.png",
    rating: 4.9,
    features: ["Mix Note Counting", "Multi-Currency", "Color LCD Display"],
    price: "Call for Price"
  },
  {
    id: 3,
    name: "HP LaserJet Pro M126nw",
    tag: "Popular",
    tagColor: "#2e7d32",
    image: "/hp_laserjet_m126nw.png",
    rating: 4.9,
    features: ["Wi-Fi Enabled", "Multi-Function", "Fast Print Speed"],
    price: "₹18,200"
  },
  {
    id: 4,
    name: "CP Plus 2.4MP Dome Camera",
    tag: "Security",
    tagColor: "#6a1b9a",
    image: "/cpplus_dome_camera.png",
    rating: 4.9,
    features: ["Night Vision IR", "HD 2.4MP", "Weatherproof"],
    price: "₹1,200"
  }
];

export default function FeaturedProducts() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs font-bold text-[#0050d1] uppercase tracking-widest mb-1">Our Products</p>
            <h2 className="text-2xl font-black text-[#1a1a1a]">Featured Products</h2>
          </div>
          <Link className="text-sm font-semibold text-[#0050d1] hover:underline flex items-center gap-1" href="/products">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="w-full h-px bg-[#e5e5e5] mb-8"></div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-200 divide-x divide-y divide-gray-200">
          {products.map((product) => (
            <div key={product.id} className="group bg-white hover:shadow-lg transition-shadow relative flex flex-col">
              {product.tag && (
                <div 
                  className="absolute top-3 left-3 z-10 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wide"
                  style={{ backgroundColor: product.tagColor }}
                >
                  {product.tag}
                </div>
              )}
              
              <Link className="relative h-56 bg-[#f9f9f9] flex items-center justify-center p-4 overflow-hidden border-b border-gray-100" href={`/products/${product.id}`}>
                <div className="relative w-full h-full p-6 group-hover:scale-105 transition-transform duration-500">
                  <Image 
                    alt={product.name} 
                    src={product.image} 
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    priority={product.id <= 2}
                    className="object-contain"
                  />
                </div>
              </Link>
              
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[#f5a623] text-[#f5a623]" />
                  ))}
                  <span className="text-xs text-gray-400 ml-1">({product.rating})</span>
                </div>
                
                <h3 className="text-sm font-bold text-[#1a1a1a] mb-2 leading-snug group-hover:text-[#0050d1] transition-colors">
                  {product.name}
                </h3>
                
                <ul className="mb-4 space-y-1 flex-grow">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs text-gray-500">
                      <div className="w-1.5 h-1.5 bg-[#0050d1] flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between mb-3">
                  <span className="text-base font-black text-[#0050d1]">{product.price}</span>
                </div>
                
                <Link className="w-full text-center bg-[#0050d1] hover:bg-[#003d9e] text-white text-xs font-bold py-2.5 transition-colors" href="/contact">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
