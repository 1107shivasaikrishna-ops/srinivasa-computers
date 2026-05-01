"use client";

import { Calendar, Wrench, Shield, ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="bg-[#f9f9f9] min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 pt-10 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Home / Our Services</p>
          <h1 className="text-4xl font-black text-[#1a1a1a] mb-2 uppercase tracking-tighter">Service & Support</h1>
          <p className="text-gray-500 font-medium max-w-2xl leading-relaxed">Expert maintenance and repair solutions for your critical business equipment.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Information Section */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-black text-[#1a1a1a] mb-6 uppercase tracking-tighter">Why Maintenance Matters?</h2>
              <p className="text-gray-500 font-medium leading-relaxed mb-8 text-base">
                Your cash handling machines are the backbone of your retail or banking operations. Regular maintenance prevents costly downtime and ensures 100% accuracy in your financial reporting.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 border border-gray-200 hover:border-[#0050d1] transition-colors group">
                <div className="w-12 h-12 bg-[#f4f4f4] flex items-center justify-center mb-6 group-hover:bg-[#0050d1] transition-colors">
                  <Shield className="w-6 h-6 text-[#0050d1] group-hover:text-white" />
                </div>
                <h3 className="text-xs font-black text-[#1a1a1a] uppercase tracking-widest mb-3">AMC Contracts</h3>
                <p className="text-xs text-gray-500 leading-relaxed font-medium">Preventive maintenance, priority support, and 4-hour response times for our AMC partners.</p>
              </div>

              <div className="bg-white p-8 border border-gray-200 hover:border-[#0050d1] transition-colors group">
                <div className="w-12 h-12 bg-[#f4f4f4] flex items-center justify-center mb-6 group-hover:bg-[#0050d1] transition-colors">
                  <Wrench className="w-6 h-6 text-[#0050d1] group-hover:text-white" />
                </div>
                <h3 className="text-xs font-black text-[#1a1a1a] uppercase tracking-widest mb-3">On-Site Repair</h3>
                <p className="text-xs text-gray-500 leading-relaxed font-medium">Our mobile technicians carry all critical spares to fix your machines right at your premises.</p>
              </div>
            </div>

            <div className="bg-[#1a1a1a] p-8 text-white">
              <h3 className="text-sm font-black uppercase tracking-widest mb-4 italic">Emergency Service?</h3>
              <p className="text-gray-400 text-xs mb-6 font-medium">Is your machine causing a bottleneck? Call our emergency support line for immediate assistance.</p>
              <a href="tel:9440502488" className="inline-flex items-center gap-2 text-[#0050d1] font-black uppercase tracking-widest hover:text-white transition-colors">
                Call +91 9440502488 <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-white p-10 border border-gray-200 shadow-xl">
            <h3 className="text-2xl font-black text-[#1a1a1a] mb-8 uppercase tracking-tighter italic flex items-center gap-3">
              <Calendar className="w-6 h-6 text-[#0050d1]" />
              Book a Technician
            </h3>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Your Name</label>
                  <input type="text" className="w-full border border-gray-200 rounded-sm px-4 py-3 focus:border-[#0050d1] outline-none transition-all font-bold text-sm" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Phone Number</label>
                  <input type="tel" className="w-full border border-gray-200 rounded-sm px-4 py-3 focus:border-[#0050d1] outline-none transition-all font-bold text-sm" placeholder="9876543210" />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Required Service</label>
                <select className="w-full border border-gray-200 rounded-sm px-4 py-3 focus:border-[#0050d1] outline-none transition-all font-bold text-sm bg-white cursor-pointer uppercase">
                  <option>AMC Inquiry</option>
                  <option>Machine Repair</option>
                  <option>New Installation</option>
                  <option>General Servicing</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Preferred Date</label>
                <input type="date" className="w-full border border-gray-200 rounded-sm px-4 py-3 focus:border-[#0050d1] outline-none transition-all font-bold text-sm" />
              </div>

              <div>
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Machine Model & Issue</label>
                <textarea rows={4} className="w-full border border-gray-200 rounded-sm px-4 py-3 focus:border-[#0050d1] outline-none transition-all font-bold text-sm resize-none" placeholder="e.g. EASE 1000 - Sensor Error..."></textarea>
              </div>

              <button type="submit" className="w-full bg-[#0050d1] hover:bg-[#003d9e] text-white font-black py-4 rounded-sm transition-all uppercase text-xs tracking-widest flex items-center justify-center gap-2">
                Submit Request <ArrowRight className="w-4 h-4" />
              </button>
              
              <div className="text-center mt-4">
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-3">Or chat with us directly</p>
                <a href="https://wa.me/919440502488" className="inline-flex items-center gap-2 text-[#25D366] font-black uppercase tracking-widest hover:underline">
                  <MessageCircle className="w-4 h-4 fill-[#25D366]" /> WhatsApp Business
                </a>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

