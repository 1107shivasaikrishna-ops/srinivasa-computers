"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Phone, MessageCircle, Star, ShoppingCart, IndianRupee, Laptop, Monitor, Gamepad2, Cpu, Printer, MousePointer2, Battery, Camera } from "lucide-react";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";

const allProducts = [
  // Cash Counting Machines
  { id: 1, category: "cash-counters", brand: "EASE", name: "EASE 1000 Semi Value Counter", tag: "Best Seller", tagColor: "#cc0000", image: "/ease-1000.png", rating: 4.9, features: ["1000 notes/min", "UV/MG/IR Detection", "3 Year Warranty"], price: "Call for Price" },
  { id: 2, category: "cash-counters", brand: "INX", name: "INX 4000 Mix Value Counter", tag: "New Arrival", tagColor: "#0050d1", image: "/inx-4000.png", rating: 4.9, features: ["Mix Note Counting", "Multi-Currency", "Color LCD Display"], price: "Call for Price" },
  { id: 5, category: "cash-counters", brand: "BANKOMAT", name: "BANKOMAT CURRENCY COUNTER", image: "/ease-1000.png", rating: 5.0, features: ["Heavy Duty", "Advanced UV Detection", "Bank Grade"], price: "Call for Price" },
  { id: 6, category: "cash-counters", brand: "MARC", name: "MARC NOTE COUNTING MACHINE", image: "/ease-1000.png", rating: 5.0, features: ["Fast Counting", "Counterfeit Alert", "Compact Design"], price: "Call for Price" },
  { id: 7, category: "cash-counters", brand: "GODREJ", name: "GODREJ CASH COUNTER", image: "/ease-1000.png", rating: 5.0, features: ["Reliable Service", "Dual Display", "Godrej Warranty"], price: "Call for Price" },

  // Laptops
  { id: 24, category: "laptops", brand: "DELL", name: "Dell Inspiron 15 Laptop", image: "/cat_laptops.png", rating: 4.7, features: ["Latest Processors", "8GB/16GB RAM", "Full HD Display"], price: "Call for Price" },
  { id: 25, category: "laptops", brand: "HP", name: "HP Pavilion 15 Laptop", image: "/cat_laptops.png", rating: 4.8, features: ["Sleek Modern Design", "Fast Charging", "Premium Audio"], price: "Call for Price" },
  { id: 26, category: "laptops", brand: "LENOVO", name: "Lenovo IdeaPad Slim 3", image: "/cat_laptops.png", rating: 4.6, features: ["Thin & Light", "Great Battery Life", "Multiple Colors"], price: "Call for Price" },
  { id: 27, category: "laptops", brand: "MSI", name: "MSI Modern 14 Laptop", image: "/cat_laptops.png", rating: 4.8, features: ["Ultra-Portable", "Backlit Keyboard", "Military-Grade"], price: "Call for Price" },
  { id: 28, category: "laptops", brand: "ACER", name: "Acer Aspire 5 Laptop", image: "/cat_laptops.png", rating: 4.5, features: ["Full HD IPS Display", "Multiple USB Ports", "Great Value"], price: "Call for Price" },

  // Desktops
  { id: 8, category: "desktops", brand: "DELL", name: "DELL OPTIPLEX DESKTOP", image: "/cat_laptops.png", rating: 5.0, features: ["Intel Core i5", "8GB RAM / 256GB SSD", "Professional Grade"], price: "Call for Price" },
  { id: 9, category: "desktops", brand: "HP", name: "HP ELITEDESK DESKTOP", image: "/cat_laptops.png", rating: 5.0, features: ["Sleek Design", "Powerful Performance", "Business Ready"], price: "Call for Price" },
  { id: 10, category: "desktops", brand: "LENOVO", name: "LENOVO THINKCENTRE DESKTOP", image: "/cat_laptops.png", rating: 5.0, features: ["Space Saving", "Military Grade Tech", "Trusted Reliability"], price: "Call for Price" },

  // Gaming & Imported
  { id: 11, category: "gaming-setup", brand: "DELL GAMING", name: "Dell Latitude (Imported) i5/i7", image: "/cat_laptops.png", rating: 4.8, features: ["Business Class", "Reliable Performance", "Durable Build"], price: "Call for Price" },
  { id: 12, category: "gaming-setup", brand: "HP", name: "HP EliteBook (Imported) i5/i7", image: "/cat_laptops.png", rating: 4.9, features: ["Premium Sleek Build", "Fast Performance", "Ideal for Professionals"], price: "Call for Price" },
  { id: 13, category: "gaming-setup", brand: "ENTERPRISE", name: "Lenovo ThinkPad (Imported)", image: "/cat_laptops.png", rating: 4.9, features: ["Legendary Keyboard", "Rugged Durability", "High Security"], price: "Call for Price" },
  { id: 14, category: "gaming-setup", brand: "MSI GAMING", name: "MSI Gaming GF63", image: "/cat_laptops.png", rating: 4.7, features: ["Dedicated Graphics", "High Refresh Rate", "Gaming Performance"], price: "Call for Price" },
  { id: 15, category: "gaming-setup", brand: "DELL GAMING", name: "Dell G15 Gaming", image: "/cat_laptops.png", rating: 4.8, features: ["Powerful Specs", "RTX Graphics", "Advanced Cooling"], price: "Call for Price" },
  { id: 101, category: "gaming-setup", brand: "ROG", name: "ASUS ROG STRIX G15", image: "/cat_laptops.png", rating: 4.9, features: ["AMD Ryzen 9", "RTX 3070", "300Hz Display"], price: "Call for Price" },
  { id: 102, category: "gaming-setup", brand: "ALIENWARE", name: "Alienware m15 R7", image: "/cat_laptops.png", rating: 5.0, features: ["Intel i9", "RTX 3080 Ti", "Legendary Design"], price: "Call for Price" },

  // CCTV
  { id: 4, category: "cctv-cameras", brand: "CPPLUS", name: "CP Plus 2.4MP Dome Camera", image: "/cpplus_dome_camera.png", rating: 4.9, features: ["Night Vision IR", "HD 2.4MP", "Weatherproof"], price: "₹1,200" },

  // Laptop Accessories
  { id: 16, category: "laptop-accessories", brand: "FINGERS", name: "Fingers Wireless Mouse", image: "/cat_laptops.png", rating: 4.5, features: ["Ergonomic Design", "Long Battery Life", "Precise Tracking"], price: "₹450" },
  { id: 17, category: "laptop-accessories", brand: "ZEBRONICS", name: "Gaming Keyboard RGB", image: "/cat_laptops.png", rating: 4.6, features: ["Multi-color Backlight", "Mechanical Feel", "Durable Build"], price: "₹1,200" },
  
  // UPS Backups
  { id: 20, category: "ups-backups", brand: "CYBERPOWER", name: "CyberPower 600VA UPS", image: "/cat_ups.png", rating: 4.7, features: ["Reliable Battery Backup", "Surge Protection", "Home/Office use"], price: "Call for Price" },
  { id: 21, category: "ups-backups", brand: "CYBERPOWER", name: "CyberPower 1000VA UPS", image: "/cat_ups.png", rating: 4.8, features: ["Extended Runtime", "LCD Status Display", "Professional Grade"], price: "Call for Price" },

  // Printers & Toners
  { id: 3, category: "printers", brand: "HP", name: "HP LaserJet Pro M126nw", image: "/hp_laserjet_m126nw.png", rating: 4.9, features: ["Wi-Fi Enabled", "Multi-Function", "Fast Print Speed"], price: "₹18,200" },
  { id: 29, category: "printers", brand: "CANON", name: "Canon Pixma G3000", image: "/canon_pixma_g3000.png", rating: 4.8, features: ["Ink Tank system", "Wireless printing", "High yield"], price: "₹14,500" },
  { id: 30, category: "printers", brand: "HP", name: "HP Original Toner 88A", image: "/hp_88a_toner.png", rating: 4.9, features: ["Genuine HP product", "1500 page yield", "Black"], price: "₹4,200" },
  { id: 31, category: "printers", brand: "EPSON", name: "Epson 003 Ink Bottle (Black)", image: "/epson_003_ink.png", rating: 4.7, features: ["Genuine Epson Ink", "4500 page yield", "Spill-free bottle"], price: "₹650" },
  { id: 32, category: "printers", brand: "BROTHER", name: "Brother TN-2365 Toner Cartridge", image: "/brother_tn2365_toner.png", rating: 4.8, features: ["High Yield 2600 pages", "Original Brother quality", "Sharp Black prints"], price: "₹3,800" },
  { id: 33, category: "printers", brand: "CANON", name: "Canon NPG-59 Toner Black", image: "/canon_npg59_toner.png", rating: 4.9, features: ["For iR2002/2202 series", "Original Canon Toner", "Reliable Performance"], price: "₹2,500" }
];

const sections = [
  { id: "cash-counters", title: "CASH COUNTING MACHINES", subtitle: "BRANDS: BANKOMAT, MARC, GODREJ, EASE, INX", brands: ["BANKOMAT", "MARC", "GODREJ", "EASE", "INX"], icon: IndianRupee },
  { id: "laptops", title: "LAPTOPS", subtitle: "BRANDS: DELL, HP, LENOVO, MSI, ACER — NEW & GENUINE", brands: ["DELL", "HP", "LENOVO", "MSI", "ACER"], icon: Laptop },
  { id: "desktops", title: "DESKTOPS", subtitle: "BUSINESS & PERSONAL GRADE DESKTOPS", brands: ["DELL", "HP", "LENOVO", "MSI", "ACER"], icon: Monitor },
  { id: "gaming-setup", title: "GAMING SETUP & IMPORTED HARDWARE", subtitle: "PREMIUM GAMING LAPTOPS & REFURBISHED ENTERPRISE GEAR", brands: ["DELL GAMING", "MSI GAMING", "ROG", "ALIENWARE", "ENTERPRISE"], icon: Gamepad2 },
  { id: "cctv-cameras", title: "CCTV CAMERAS & SECURITY", subtitle: "BRANDS: CPPLUS, TRUE VIEW, ACTIVEPIXEL, DAYTONIC — INSTALLATION INCLUDED", brands: ["CPPLUS", "TRUE VIEW", "ACTIVEPIXEL", "DAYTONIC", "HIKVISION", "DAHUA"], icon: Camera },
  { id: "laptop-accessories", title: "LAPTOP ACCESSORIES", subtitle: "ESSENTIAL ADD-ONS & PERIPHERALS", brands: ["DELL", "HP", "ZEBRONICS", "FINGERS", "LOGITECH"], icon: MousePointer2 },
  { id: "ups-backups", title: "UPS BACKUPS", subtitle: "POWER SOLUTIONS & PROTECTION", brands: ["CYBERPOWER", "APC", "LUMINOUS", "MICROTEK"], icon: Battery },
  { id: "printers", title: "PRINTERS & TONERS", subtitle: "OFFICE SOLUTIONS & HIGH-QUALITY CONSUMABLES", brands: ["HP", "CANON", "EPSON", "BROTHER", "PANTUM"], icon: Printer },
];

import { useCart } from "@/context/CartContext";
import { X } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

function ProductEnquiryModal({ product, isOpen, onClose }: { product: any, isOpen: boolean, onClose: () => void }) {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const supabase = createClient();

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!supabase) {
      alert("Database connection not configured.");
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase.from("enquiries").insert([{
        name: formData.name,
        phone: formData.phone,
        message: `Product Enquiry for: ${product.name}. \nMessage: ${formData.message}`,
        product_id: product.id,
        status: "new"
      }]);
      if (error) throw error;

      // WhatsApp Alert
      const whatsappMsg = `Hi Srinivasa Computers! I am interested in ${product.name}.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
      window.open(`https://wa.me/919440502488?text=${encodeURIComponent(whatsappMsg)}`, '_blank');
      
      setSubmitted(true);
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white max-w-md w-full p-8 border border-gray-200 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-black">
          <IndianRupee className="w-5 h-5 rotate-45" /> {/* Using an icon as X since IndianRupee was imported and is similar shape in some fonts, or just use X from lucide */}
          <X className="w-6 h-6" />
        </button>
        
        {submitted ? (
          <div className="text-center py-6">
            <h3 className="text-xl font-black uppercase mb-2">Thank You!</h3>
            <p className="text-gray-500 text-sm font-bold">Your enquiry has been sent. We will contact you soon.</p>
            <button onClick={onClose} className="mt-6 bg-[#0050d1] text-white px-8 py-3 font-black text-xs uppercase tracking-widest">Close</button>
          </div>
        ) : (
          <>
            <h2 className="text-xl font-black uppercase tracking-tighter mb-1 italic">Product Enquiry</h2>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-6">{product.name}</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <input 
                type="text" placeholder="Your Name" required
                className="w-full border border-gray-200 p-4 text-sm font-bold outline-none focus:border-[#0050d1]"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
              <input 
                type="tel" placeholder="Phone Number" required
                className="w-full border border-gray-200 p-4 text-sm font-bold outline-none focus:border-[#0050d1]"
                value={formData.phone}
                onChange={e => setFormData({...formData, phone: e.target.value})}
              />
              <textarea 
                placeholder="How can we help?" required
                className="w-full border border-gray-200 p-4 text-sm font-bold outline-none focus:border-[#0050d1] h-24"
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
              ></textarea>
              <button type="submit" disabled={loading} className="w-full bg-[#1a1a1a] text-white py-4 font-black uppercase tracking-widest hover:bg-[#0050d1] transition-all">
                {loading ? "Sending..." : "Submit & Chat on WhatsApp"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: any }) {
  const { addToCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white border border-gray-100 flex flex-col group transition-all duration-300 hover:shadow-2xl hover:z-10 relative">
        {product.tag && (
          <div className="absolute top-0 left-0 z-20 text-[10px] font-black text-white px-3 py-1 uppercase tracking-tighter" style={{ backgroundColor: product.tagColor || "#0050d1" }}>
            {product.tag}
          </div>
        )}
        
        <div className="relative h-60 w-full bg-white flex items-center justify-center p-8 overflow-hidden">
          <Image 
            src={product.image_url || product.image} 
            alt={product.name} 
            fill 
            className="object-contain p-6 transition-transform duration-500 group-hover:scale-110" 
            sizes="300px"
          />
        </div>

        <div className="p-6 pt-0 flex flex-col flex-grow">
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-[#f5a623] text-[#f5a623]" />
            ))}
            <span className="text-[11px] text-gray-400 ml-1 font-bold">({product.rating || "4.9"})</span>
          </div>

          <h3 className="text-sm font-black text-[#1a1a1a] mb-2 leading-snug group-hover:text-[#0050d1] transition-colors uppercase tracking-tight">
            {product.name}
          </h3>

          <div className="mt-auto">
            <p className="text-base font-black text-[#0050d1] mb-4">
              {typeof product.price === 'number' ? `₹${product.price}` : product.price}
            </p>
            
            <div className="grid grid-cols-2 gap-2 mb-2">
              <button 
                onClick={() => addToCart(product)}
                className="text-[11px] font-black border border-gray-200 py-2.5 hover:bg-gray-50 transition-colors uppercase flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-3.5 h-3.5 text-[#0050d1]" />
                <span className="text-gray-800">Add to Cart</span>
              </button>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="text-[11px] font-black bg-[#1a1a1a] text-white py-2 hover:bg-[#0050d1] transition-colors uppercase"
              >
                Buy Now
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <a 
                href={`https://wa.me/919440502488?text=I am interested in ${product.name}`}
                target="_blank"
                className="text-[11px] font-black bg-[#25D366] text-white py-2 hover:bg-[#128C7E] transition-colors uppercase flex items-center justify-center gap-1"
              >
                <MessageCircle className="w-3 h-3 fill-white" /> WhatsApp
              </a>
              <a 
                href="tel:9440502488"
                className="text-[11px] font-black bg-gray-100 text-gray-700 py-2 hover:bg-gray-200 transition-colors uppercase flex items-center justify-center gap-1"
              >
                <Phone className="w-3 h-3 fill-gray-700" /> Call
              </a>
            </div>
          </div>
        </div>
      </div>
      <ProductEnquiryModal product={product} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

function ProductsContent() {
  const searchParams = useSearchParams();
  const [selectedBrands, setSelectedBrands] = useState<Record<string, string>>({});
  const [dbProducts, setDbProducts] = useState<any[]>([]);
  const supabase = createClient();

  useEffect(() => {
    const fetchProducts = async () => {
      if (!supabase) return;
      const { data } = await supabase.from("products").select("*");
      if (data && data.length > 0) {
        setDbProducts(data);
      }
    };
    fetchProducts();
  }, []);

  const mergedProducts = [...dbProducts, ...allProducts.filter(p => !dbProducts.find(dp => dp.name === p.name))];

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [searchParams]);

  const toggleBrand = (sectionId: string, brand: string) => {
    setSelectedBrands(prev => ({
      ...prev,
      [sectionId]: prev[sectionId] === brand ? "" : brand
    }));
  };

  return (
    <div className="bg-[#f9f9f9] min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 pt-10 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Home / Our Products</p>
          <h1 className="text-4xl font-black text-[#1a1a1a] mb-2 uppercase tracking-tighter">Our Products</h1>
          <p className="text-gray-500 font-medium max-w-2xl leading-relaxed">Genuine products, best prices, expert support in Nizamabad.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="mb-24 scroll-mt-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-[#0050d1] flex items-center justify-center text-white rounded-sm">
                <section.icon className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-[#1a1a1a] uppercase tracking-tighter">{section.title}</h2>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{section.subtitle}</p>
              </div>
            </div>

            {section.brands && (
              <div className="flex flex-wrap gap-2 mb-8">
                {mergedProducts
                  .filter(p => p.category === section.id)
                  .reduce((brands: string[], p) => {
                    if (p.brand && !brands.includes(p.brand)) brands.push(p.brand);
                    return brands;
                  }, [])
                  .map(brand => (
                    <button 
                      key={brand} 
                      onClick={() => toggleBrand(section.id, brand)}
                      className={`text-[10px] font-black px-4 py-1.5 border transition-all uppercase tracking-wider ${
                        selectedBrands[section.id] === brand 
                          ? "bg-[#0050d1] border-[#0050d1] text-white" 
                          : "bg-white border-gray-200 text-gray-500 hover:bg-gray-50"
                      }`}
                    >
                      {brand}
                    </button>
                  ))}
                {selectedBrands[section.id] && (
                  <button 
                    onClick={() => toggleBrand(section.id, "")}
                    className="text-[10px] font-black px-4 py-1.5 border border-red-200 bg-red-50 text-red-600 hover:bg-red-100 transition-all uppercase tracking-wider"
                  >
                    Clear Filter
                  </button>
                )}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-px bg-gray-200 border border-gray-200">
              {mergedProducts
                .filter(p => {
                  const categoryMatch = p.category === section.id || (section.id === "gaming-setup" && p.category === "imported-laptops");
                  const brandMatch = !selectedBrands[section.id] || p.brand === selectedBrands[section.id];
                  return categoryMatch && brandMatch;
                })
                .map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="p-20 text-center font-black">LOADING PRODUCTS...</div>}>
      <ProductsContent />
    </Suspense>
  );
}

