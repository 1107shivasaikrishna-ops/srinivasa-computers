"use client";

import { ArrowRight, Star, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

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
  },
  {
    id: 5,
    name: "Dell Inspiron 15 Laptop",
    tag: "Best Buy",
    tagColor: "#0050d1",
    image: "/cat_laptops.png",
    rating: 4.8,
    features: ["Intel Core i5", "8GB RAM / 512GB SSD", "Windows 11"],
    price: "Call for Price"
  }
];

export default function FeaturedProducts() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[10px] font-black text-[#0050d1] uppercase tracking-[0.3em] mb-2">Curated Collection</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a] uppercase tracking-tighter italic">Featured Products</h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-2 mr-4">
              <button onClick={() => scroll('left')} className="w-10 h-10 border border-gray-200 flex items-center justify-center hover:bg-[#0050d1] hover:text-white transition-all">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={() => scroll('right')} className="w-10 h-10 border border-gray-200 flex items-center justify-center hover:bg-[#0050d1] hover:text-white transition-all">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <Link className="text-xs font-black text-[#0050d1] uppercase tracking-widest hover:underline flex items-center gap-2" href="/products">
              Explore Store <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-px bg-gray-200 border border-gray-200 hide-scrollbar snap-x snap-mandatory"
        >
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group bg-white relative flex flex-col min-w-[280px] md:min-w-[320px] flex-shrink-0 snap-start"
            >
              {product.tag && (
                <div 
                  className="absolute top-4 left-4 z-10 text-white text-[9px] font-black px-3 py-1 uppercase tracking-widest"
                  style={{ backgroundColor: product.tagColor }}
                >
                  {product.tag}
                </div>
              )}
              
              <Link className="relative h-64 bg-[#fcfcfc] flex items-center justify-center p-8 overflow-hidden border-b border-gray-50" href={`/products#${product.id}`}>
                <div className="relative w-full h-full transition-transform duration-700 group-hover:scale-110">
                  <Image 
                    alt={product.name} 
                    src={product.image} 
                    fill
                    sizes="(max-width: 768px) 300px, 400px"
                    className="object-contain"
                  />
                </div>
                <div className="absolute inset-0 bg-[#0050d1]/0 group-hover:bg-[#0050d1]/5 transition-colors duration-500"></div>
              </Link>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[#f5a623] text-[#f5a623]" />
                  ))}
                  <span className="text-[10px] text-gray-400 ml-1 font-bold">({product.rating})</span>
                </div>
                
                <h3 className="text-[15px] font-black text-[#1a1a1a] mb-3 leading-snug group-hover:text-[#0050d1] transition-colors uppercase tracking-tight">
                  {product.name}
                </h3>
                
                <ul className="mb-6 space-y-1.5 flex-grow">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-[11px] text-gray-500 font-medium">
                      <div className="w-1.5 h-1.5 bg-[#0050d1] flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-lg font-black text-[#0050d1]">{product.price}</span>
                  <Link className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-[#0050d1] flex items-center gap-1 transition-colors" href="/contact">
                    Details <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

