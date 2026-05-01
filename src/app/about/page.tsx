import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Cog, Headphones } from 'lucide-react';

export const metadata = {
  title: 'About Us | Srinivasa Computers',
  description: 'Learn about Srinivasa Computers, the leading provider of cash counting machines and AMC services in Nizamabad.',
};

export default function AboutPage() {
  return (
    <div className="bg-[#f9f9f9] min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 pt-10 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Home / About Us</p>
          <h1 className="text-4xl font-black text-[#1a1a1a] mb-2 uppercase tracking-tighter">Our Story</h1>
          <p className="text-gray-500 font-medium max-w-2xl leading-relaxed">Telangana's most trusted partner for cash handling and IT solutions.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative h-[480px] bg-[#e5e5e5]">
            <Image
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80"
              alt="Our Workspace"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#0050d1] text-white p-8 hidden md:block">
              <div className="text-4xl font-black mb-1 italic">15+</div>
              <div className="text-[10px] font-bold uppercase tracking-widest">Years of Excellence</div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-black text-[#1a1a1a] mb-6 uppercase tracking-tighter">Empowering Businesses in Nizamabad</h2>
            <p className="text-gray-500 font-medium leading-relaxed mb-6 text-base">
              Founded with a vision to provide world-class office automation and IT solutions, Srinivasa Computers has grown into the leading distributor of industrial cash management technology in the Telangana region.
            </p>
            <p className="text-gray-500 font-medium leading-relaxed mb-8 text-base">
              We specialize in high-performance currency counters, surveillance systems, and enterprise IT hardware. Our reputation is built on one simple principle: **Genuine products combined with unmatched service.**
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-200">
              <div>
                <div className="text-2xl font-black text-[#0050d1] mb-1">5000+</div>
                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Happy Clients</div>
              </div>
              <div>
                <div className="text-2xl font-black text-[#0050d1] mb-1">24/7</div>
                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Technical Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-200 divide-x divide-y md:divide-y-0 divide-gray-200">
          {[
            { 
              title: "Quality Products", 
              desc: "We exclusively partner with global leaders like EASE, INX, and CP Plus to bring you the most reliable hardware.", 
              icon: ShieldCheck 
            },
            { 
              title: "Expert AMC", 
              desc: "Our Annual Maintenance Contracts ensure your critical business machines never stop due to equipment failure.", 
              icon: Cog 
            },
            { 
              title: "Local Presence", 
              desc: "Located in the heart of Nizamabad, we provide rapid on-site support and same-day installation across the district.", 
              icon: Headphones 
            }
          ].map((item) => (
            <div key={item.title} className="bg-white p-10 hover:bg-[#e8f0fe] transition-colors group">
              <div className="w-12 h-12 bg-[#f4f4f4] flex items-center justify-center mb-6 group-hover:bg-[#0050d1] transition-colors">
                <item.icon className="w-6 h-6 text-[#0050d1] group-hover:text-white" />
              </div>
              <h3 className="text-sm font-black text-[#1a1a1a] uppercase tracking-widest mb-3">{item.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#1a1a1a] py-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-black text-white uppercase tracking-tighter mb-4 italic">Ready to Upgrade Your Business?</h2>
          <p className="text-gray-500 mb-8 font-medium">Connect with our experts today for a free consultation and product demo.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#0050d1] hover:bg-[#003d9e] text-white font-black px-10 py-4 text-xs transition-all uppercase tracking-widest">
            Contact Us Now <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

