"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-400 mt-0">
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-[#0050d1] flex items-center justify-center flex-shrink-0">
              <span className="text-white font-black text-sm">SC</span>
            </div>
            <div>
              <div className="text-base font-black text-white leading-none">
                SRINIVASA <span className="text-[#0050d1]">COMPUTERS</span>
              </div>
              <div className="text-[10px] text-gray-500 font-medium leading-none mt-0.5">
                Cash Handling & IT Solutions
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-xs">
            Telangana's most trusted dealer for industrial cash handling machines, printers, CCTV cameras, and office IT solutions.
          </p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#0050d1] mt-0.5 flex-shrink-0" />
              <span>Beside Kapila Hotel, Hyd-Road, Pragati Nagar, Nizamabad, Telangana</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#0050d1] flex-shrink-0" />
              <a href="tel:9440502488" className="hover:text-white transition-colors">9440502488</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#0050d1] flex-shrink-0" />
              <a href="mailto:srinivasasomputers@hotmail.com" className="hover:text-white transition-colors">srinivasasomputers@hotmail.com</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Products</h4>
          <ul className="space-y-2.5">
            {[
              { name: "Cash Counters", path: "cash-counters" },
              { name: "Laptops", path: "laptops" },
              { name: "Desktops", path: "desktops" },
              { name: "Gaming Setup", path: "gaming-setup" },
              { name: "Printers & Toners", path: "printers" },
              { name: "CCTV Cameras", path: "cctv-cameras" }
            ].map((item) => (
              <li key={item.name}>
                <Link className="text-sm text-gray-500 hover:text-[#0050d1] transition-colors flex items-center gap-1 group" href={`/products#${item.path}`}>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -ml-1" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Services</h4>
          <ul className="space-y-2.5">
            {[
              "Annual Maintenance (AMC)", "Machine Repair", 
              "On-site Installation", "Free Demo Booking"
            ].map((item) => (
              <li key={item}>
                <Link className="text-sm text-gray-500 hover:text-[#0050d1] transition-colors flex items-center gap-1 group" href="/services">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -ml-1" />
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Company</h4>
          <ul className="space-y-2.5">
            {[
              { name: "About Us", href: "/about" },
              { name: "Contact Us", href: "/contact" },
              { name: "Our Location", href: "/contact" }
            ].map((item) => (
              <li key={item.name}>
                <Link className="text-sm text-gray-500 hover:text-[#0050d1] transition-colors flex items-center gap-1 group" href={item.href}>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -ml-1" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-600">
          <span>© {new Date().getFullYear()} Srinivasa Computers. All rights reserved.</span>
          <span>Made with ❤️ in Nizamabad, Telangana</span>
        </div>
      </div>
    </footer>
  );
}
