"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ServiceBanners() {
  return (
    <section className="py-12 bg-[#f4f4f4] border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Cash Management Banner */}
        <div className="bg-[#0050d1] p-8 flex items-center gap-6">
          <div className="w-20 h-20 bg-white/10 flex items-center justify-center flex-shrink-0">
             <Image src="/ease-1000.png" alt="Cash Counter" width={64} height={64} className="object-contain" />
          </div>
          <div>
            <p className="text-xs font-bold text-blue-200 uppercase tracking-widest mb-1">Cash Management</p>
            <h3 className="text-xl font-black text-white mb-2">Professional Cash Counters</h3>
            <p className="text-sm text-blue-100 mb-4">UV, MG, IR detection — perfect for banks, shops & businesses.</p>
            <Link className="inline-flex items-center gap-2 bg-white text-[#0050d1] hover:bg-gray-100 text-xs font-bold px-4 py-2 transition-colors" href="/products">
              Shop Now <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* Security Solutions Banner */}
        <div className="bg-[#1a1a1a] p-8 flex items-center gap-6">
          <div className="w-20 h-20 bg-white/10 flex items-center justify-center flex-shrink-0">
             <Image src="/cpplus_dome_camera.png" alt="CCTV" width={64} height={64} className="object-contain" />
          </div>
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Security Solutions</p>
            <h3 className="text-xl font-black text-white mb-2">CCTV & Surveillance</h3>
            <p className="text-sm text-gray-400 mb-4">CP Plus, Hikvision & Dahua — installation included.</p>
            <Link className="inline-flex items-center gap-2 bg-[#0050d1] text-white hover:bg-[#003d9e] text-xs font-bold px-4 py-2 transition-colors" href="/products">
              Learn More <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
