import Image from "next/image";
import { MessageCircle, CheckCircle2, ShieldCheck, ArrowRight, Zap, Printer, HardDrive, Cpu, Camera } from "lucide-react";

export const metadata = {
  title: "Products | Srinivasa Computers",
  description: "Browse our premium money counting machines, printers, CCTV cameras, and office automation products.",
};

const productCategories = [
  {
    id: "printers",
    title: "Printers",
    icon: <Printer className="w-6 h-6 mr-3 text-cyan-400" />,
    items: [
      { id: 1, name: "Epson EcoTank L3250 Wi-Fi All-in-One", price: "₹14,500", image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=400&q=80" },
      { id: 2, name: "HP LaserJet Pro M126nw", price: "₹18,200", image: "/hp_laserjet_m126nw.png" },
      { id: 3, name: "Canon PIXMA G3000 All-in-One", price: "₹12,800", image: "/canon_pixma_g3000.png" },
      { id: 4, name: "Brother HL-L2321D Single-Function", price: "₹9,500", image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=400&q=80" },
    ]
  },
  {
    id: "toners",
    title: "Toners & Ink",
    icon: <HardDrive className="w-6 h-6 mr-3 text-purple-400" />,
    items: [
      { id: 1, name: "HP 88A Original Black LaserJet Toner", price: "₹3,500", image: "/hp_88a_toner.png" },
      { id: 2, name: "Epson 003 Ink Bottle (Black)", price: "₹450", image: "/epson_003_ink.png" },
      { id: 3, name: "Canon NPG-59 Toner", price: "₹2,100", image: "/canon_npg59_toner.png" },
      { id: 4, name: "Brother TN-2365 Toner Cartridge", price: "₹2,800", image: "/brother_tn2365_toner.png" },
    ]
  },
  {
    id: "smps",
    title: "SMPS & Power Supplies",
    icon: <Cpu className="w-6 h-6 mr-3 text-green-400" />,
    items: [
      { id: 1, name: "Zebronics 450W SMPS", price: "₹850", image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=400&q=80" },
      { id: 2, name: "Corsair CV550 550 Watt 80 Plus", price: "₹3,800", image: "/corsair_cv550_smps.png" },
      { id: 3, name: "Cooler Master MWE 450 Bronze", price: "₹2,900", image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=400&q=80" },
      { id: 4, name: "Ant Esports VS500L Power Supply", price: "₹1,500", image: "/ant_esports_vs500l.png" },
    ]
  },
  {
    id: "cctv",
    title: "CCTV Cameras",
    icon: <Camera className="w-6 h-6 mr-3 text-red-400" />,
    items: [
      { id: 1, name: "CP Plus 2.4MP Dome Camera", price: "₹1,200", image: "/cpplus_dome_camera.png" },
      { id: 2, name: "Hikvision 4 Channel DVR", price: "₹3,500", image: "/hikvision_4ch_dvr.png" },
      { id: 3, name: "Dahua 2MP Bullet Camera", price: "₹1,350", image: "/dahua_bullet_camera.png" },
      { id: 4, name: "CP Plus 8 Channel NVR", price: "₹5,200", image: "/cpplus_8ch_nvr.png" },
    ]
  }
];

export default function ProductsPage() {
  return (
    <div className="bg-[#050B14] min-h-screen pb-20 font-sans text-gray-200">
      {/* Hero Section */}
      <div className="relative bg-[#02050A] text-white py-24 overflow-hidden border-b border-gray-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-[#02050A] to-[#02050A] z-0" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Our Premium Products</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Industry-leading technology for your business and personal computing needs. Experience reliability like never before.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-20">
        {/* Money Counting Machines Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-white mb-4 tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">Money Counting Machines</h2>
            <div className="w-24 h-1 bg-brand-red mx-auto rounded-full shadow-[0_0_10px_rgba(255,0,0,0.8)]"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product 1: Cash Counter */}
            <div className="group relative bg-[#0B1320] rounded-3xl shadow-xl hover:shadow-[0_0_30px_rgba(0,150,255,0.2)] transition-all duration-500 overflow-hidden border border-gray-800 flex flex-col backdrop-blur-xl">
              <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-[0_0_15px_rgba(255,0,0,0.5)]">
                BEST SELLER
              </div>
              <div className="relative h-80 w-full overflow-hidden bg-gradient-to-b from-[#111A2C] to-[#0B1320] flex items-center justify-center p-4">
                <Image 
                  src="/ease-1000.png" 
                  alt="EASE 1000 Semi Value Counter" 
                  fill 
                  className="object-contain group-hover:scale-105 transition-transform duration-700 ease-in-out p-4 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-8 flex flex-col flex-grow relative z-10 border-t border-gray-800">
                <div className="flex items-center gap-2 mb-3 text-cyan-400 font-semibold text-sm drop-shadow-[0_0_5px_rgba(0,255,255,0.5)]">
                  <ShieldCheck className="w-5 h-5" />
                  <span>3 Year Warranty</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors drop-shadow-md">EASE 1000 Semi Value Counter</h3>
                <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                  Offer Reliability, Accuracy and Speed to Business Owners. Advanced detection (UV, MG, MT, IR) with total value calculation and LCD color change on fake notes.
                </p>
                <ul className="text-gray-300 mb-8 space-y-3 font-medium">
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" /> <span>≥1000 notes/min speed with batch & add function</span></li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" /> <span>Total Value Calculation for INR, USD, EUR</span></li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" /> <span>Automatic half-note, chained-note, double-note detection</span></li>
                </ul>
                <a href="tel:9440502488" className="w-full bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-4 rounded-xl font-bold text-center transition-all duration-300 flex items-center justify-center group/btn shadow-[0_0_15px_rgba(0,200,255,0.3)] hover:shadow-[0_0_25px_rgba(0,200,255,0.5)] hover:-translate-y-1">
                  Request Demo <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Product 2: Mix Value Counter */}
            <div className="group relative bg-[#0B1320] rounded-3xl shadow-xl hover:shadow-[0_0_30px_rgba(255,0,50,0.2)] transition-all duration-500 overflow-hidden border border-gray-800 flex flex-col backdrop-blur-xl">
              <div className="relative h-80 w-full overflow-hidden bg-gradient-to-b from-[#111A2C] to-[#0B1320] flex items-center justify-center p-4">
                <Image 
                  src="/inx-4000.png" 
                  alt="INX 4000 Mix Value Counter" 
                  fill 
                  className="object-contain group-hover:scale-105 transition-transform duration-700 ease-in-out p-4 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-8 flex flex-col flex-grow relative z-10 border-t border-gray-800">
                <div className="flex items-center gap-2 mb-3 text-red-400 font-semibold text-sm drop-shadow-[0_0_5px_rgba(255,0,0,0.5)]">
                  <Zap className="w-5 h-5" />
                  <span>Advanced Technology</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors drop-shadow-md">INX 4000 Mix Value Counter</h3>
                <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                  Count mixed denominations effortlessly. Features a large LCD color display, total value calculation, and professional-grade counterfeit detection for peace of mind.
                </p>
                <ul className="text-gray-300 mb-8 space-y-3 font-medium">
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" /> <span>Counts mixed notes & shows total value instantly</span></li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" /> <span>Multi-currency support (INR, USD, etc.)</span></li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" /> <span>Advanced fake note detection sensors</span></li>
                </ul>
                <a href="tel:9440502488" className="w-full bg-brand-red hover:bg-red-500 text-white px-6 py-4 rounded-xl font-bold text-center transition-all duration-300 flex items-center justify-center group/btn shadow-[0_0_15px_rgba(255,0,0,0.4)] hover:shadow-[0_0_25px_rgba(255,0,0,0.6)] hover:-translate-y-1">
                  Request Demo <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Categories */}
        {productCategories.map((category) => (
          <div key={category.id} className="mb-20">
            <div className="flex flex-col md:flex-row items-center justify-between mb-10 pb-6 border-b border-gray-800">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight flex items-center drop-shadow-md">
                {category.icon}
                {category.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {category.items.map((item) => (
                <div key={item.id} className="bg-[#0B1320]/80 backdrop-blur-md rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(0,150,255,0.15)] border border-gray-800 overflow-hidden group transition-all duration-300 flex flex-col h-full hover:-translate-y-2">
                  <div className="relative h-56 w-full overflow-hidden bg-white flex items-center justify-center p-3">
                    <Image 
                      src={item.image} 
                      alt={item.name} 
                      fill 
                      className="object-contain group-hover:scale-105 transition-transform duration-500 p-3"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320] via-transparent to-transparent opacity-100" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow relative z-10">
                    <h3 className="font-bold text-gray-100 text-lg mb-2 leading-tight flex-grow group-hover:text-cyan-400 transition-colors">{item.name}</h3>
                    <p className="text-brand-red font-extrabold text-xl mb-5 drop-shadow-[0_0_5px_rgba(255,0,0,0.4)]">{item.price}</p>
                    <a 
                      href={`https://wa.me/919440502488?text=Hi,%20I%20am%20interested%20in%20ordering%20${encodeURIComponent(item.name)}.`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#1ebd5a] hover:to-[#0f7a6d] text-white py-3 px-4 rounded-xl font-bold flex items-center justify-center transition-all shadow-[0_0_10px_rgba(37,211,102,0.3)] hover:shadow-[0_0_20px_rgba(37,211,102,0.6)]"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Order via WhatsApp
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
