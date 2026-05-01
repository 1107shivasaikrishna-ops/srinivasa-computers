"use client";

import Link from "next/link";
import { Phone, ChevronDown, Menu, ShoppingCart, MessageCircle, User, LogOut } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const router = useRouter();
  const { cartCount } = useCart();

  useEffect(() => {
    const checkAuth = () => {
      const storedUser = localStorage.getItem("mockUser");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      } else {
        setUser(null);
      }
    };

    checkAuth();
    window.addEventListener("auth-change", checkAuth);
    window.addEventListener("storage", checkAuth);
    
    return () => {
      window.removeEventListener("auth-change", checkAuth);
      window.removeEventListener("storage", checkAuth);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("mockUser");
    localStorage.removeItem("isLoggedIn");
    setUser(null);
    window.dispatchEvent(new Event("auth-change"));
    router.push("/login");
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      {/* Top Bar */}
      <div className="bg-[#1a1a1a] text-white text-[11px] py-1">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <span>No. 1 Cash Handling Products — Nizamabad, Telangana</span>
          <div className="flex items-center gap-4">
            <a href="tel:9440502488" className="flex items-center gap-1">
              <Phone className="w-3 h-3" /> 9440502488
            </a>
            <span className="text-gray-600">|</span>
            <Link href="/support">Support</Link>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link className="flex items-center gap-2" href="/">
          <div className="w-10 h-10 bg-[#0050d1] flex items-center justify-center rounded-sm">
            <span className="text-white font-black text-lg">SC</span>
          </div>
          <div>
            <div className="text-xl font-black text-[#1a1a1a] leading-none tracking-tight">
              SRINIVASA <span className="text-[#0050d1]">COMPUTERS</span>
            </div>
            <div className="text-[11px] text-gray-500 font-bold leading-none mt-1 uppercase">
              Cash Handling & IT Solutions
            </div>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-8">
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-bold text-gray-700 hover:text-[#0050d1] transition-colors">
              Products <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full left-0 hidden group-hover:block bg-white border border-gray-100 shadow-xl w-60 z-50 py-2">
              {[
                { name: "Cash Counters", id: "cash-counters" },
                { name: "Laptops", id: "laptops" },
                { name: "Desktops", id: "desktops" },
                { name: "Gaming & Imported", id: "gaming-setup" },
                { name: "Printers & Toners", id: "printers" },
                { name: "Laptop Accessories", id: "laptop-accessories" },
                { name: "UPS Backups", id: "ups-backups" },
                { name: "CCTV Cameras", id: "cctv-cameras" }
              ].map((item) => (
                <Link 
                  key={item.id}
                  className="block px-6 py-2.5 text-[13px] text-gray-700 hover:bg-[#f0f7ff] hover:text-[#0050d1] font-bold" 
                  href={`/products#${item.id}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <Link className="text-sm font-bold text-gray-700 hover:text-[#0050d1] transition-colors" href="/services">Services</Link>
          <Link className="text-sm font-bold text-gray-700 hover:text-[#0050d1] transition-colors" href="/about">About</Link>
          <Link className="text-sm font-bold text-gray-700 hover:text-[#0050d1] transition-colors" href="/contact">Contact</Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="https://wa.me/919440502488" target="_blank" rel="noreferrer" className="text-[13px] font-bold text-white bg-[#25D366] hover:bg-[#128C7E] px-5 py-2.5 flex items-center gap-2 rounded-sm transition-colors">
            <MessageCircle className="w-4 h-4 fill-white" /> WhatsApp Us
          </a>
          <Link className="p-2 text-gray-700 hover:text-[#0050d1] transition-colors relative" href="/cart">
            <ShoppingCart className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#0050d1] text-white text-[9px] font-black w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
          
          {user ? (
            <div className="relative group">
              <button className="flex items-center gap-2 text-[13px] font-black text-[#0050d1] bg-[#e8f0fe] px-6 py-2.5 rounded-sm transition-colors">
                <User className="w-4 h-4" /> {user.name.toUpperCase()} <ChevronDown className="w-3 h-3" />
              </button>
              <div className="absolute top-full right-0 hidden group-hover:block bg-white border border-gray-100 shadow-xl w-48 z-50 py-2 mt-px">
                <Link className="block px-6 py-2.5 text-[12px] text-gray-700 hover:bg-[#f0f7ff] hover:text-[#0050d1] font-bold uppercase tracking-widest" href="/profile">
                  My Profile
                </Link>
                {user.isAdmin && (
                  <Link className="block px-6 py-2.5 text-[12px] text-gray-700 hover:bg-[#f0f7ff] hover:text-[#0050d1] font-bold uppercase tracking-widest" href="/admin">
                    Admin Panel
                  </Link>
                )}
                <button 
                  onClick={handleLogout}
                  className="w-full text-left px-6 py-2.5 text-[12px] text-red-600 hover:bg-red-50 font-bold uppercase tracking-widest flex items-center gap-2"
                >
                  <LogOut className="w-3 h-3" /> Logout
                </button>
              </div>
            </div>
          ) : (
            <Link className="text-[13px] font-bold text-[#1a1a1a] hover:text-[#0050d1] px-6 py-2.5 transition-colors" href="/login">
              Login
            </Link>
          )}

          <Link href="/contact" className="text-[13px] font-bold text-white bg-[#0050d1] hover:bg-[#003d9e] px-6 py-2.5 rounded-sm transition-colors">
            Free Demo
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 p-6 flex flex-col gap-4 shadow-inner">
          {user && (
            <div className="pb-4 border-b border-gray-100 mb-2">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Signed in as</p>
              <p className="text-base font-black text-[#0050d1]">{user.name.toUpperCase()}</p>
            </div>
          )}
          <Link href="/products" className="font-bold text-gray-800 text-lg">Products</Link>
          <Link href="/services" className="font-bold text-gray-800 text-lg">Services</Link>
          <Link href="/about" className="font-bold text-gray-800 text-lg">About</Link>
          <Link href="/contact" className="font-bold text-gray-800 text-lg">Contact</Link>
          <Link href="/cart" className="font-bold text-gray-800 text-lg flex justify-between">
            Cart <span>({cartCount})</span>
          </Link>
          {user ? (
            <button onClick={handleLogout} className="text-left font-bold text-red-600 text-lg">Logout</button>
          ) : (
            <Link href="/login" className="font-bold text-[#0050d1] text-lg">Login</Link>
          )}
          <div className="flex flex-col gap-3 pt-6 border-t border-gray-100">
            <Link href="/contact" className="bg-[#0050d1] text-white text-center py-3.5 font-bold rounded-sm">Free Demo</Link>
            <a href="https://wa.me/919440502488" className="bg-[#25D366] text-white text-center py-3.5 font-bold rounded-sm">WhatsApp Us</a>
          </div>
        </div>
      )}
    </header>
  );
}

