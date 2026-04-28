import Link from "next/link";
import { Menu, Phone } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-brand-blue shadow-lg border-b border-white/10">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex flex-col">
          <span className="text-2xl font-bold text-white tracking-tight">
            SRINIVASA <span className="text-brand-red">COMPUTERS</span>
          </span>
          <span className="text-xs text-white/80 font-medium">
            No. 1 Cash Handling Products
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-white hover:text-brand-red transition-colors text-sm font-semibold tracking-wide">HOME</Link>
          <div className="relative group">
            <Link href="/products" className="text-white hover:text-brand-red transition-colors text-sm font-semibold tracking-wide flex items-center">
              PRODUCTS
            </Link>
          </div>
          <Link href="/services" className="text-white hover:text-brand-red transition-colors text-sm font-semibold tracking-wide">SERVICES</Link>
          <Link href="/about" className="text-white hover:text-brand-red transition-colors text-sm font-semibold tracking-wide">ABOUT</Link>
          <Link href="/contact" className="text-white hover:text-brand-red transition-colors text-sm font-semibold tracking-wide">CONTACT</Link>
        </nav>

        <div className="hidden md:flex items-center">
          <a href="tel:9440502488" className="bg-brand-red hover:bg-red-700 text-white px-5 py-2.5 rounded-md font-bold flex items-center transition-transform hover:scale-105 active:scale-95 shadow-md">
            <Phone className="w-4 h-4 mr-2" />
            Free Demo
          </a>
        </div>

        <button className="md:hidden text-white p-2">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
