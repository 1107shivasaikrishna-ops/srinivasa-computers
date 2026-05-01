import Image from "next/image";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Contact Us | Srinivasa Computers",
  description: "Get in touch with Srinivasa Computers for sales, support, and inquiries in Nizamabad.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#f9f9f9] min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 pt-10 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Home / Contact Us</p>
          <h1 className="text-4xl font-black text-[#1a1a1a] mb-2 uppercase tracking-tighter">Get In Touch</h1>
          <p className="text-gray-500 font-medium max-w-2xl leading-relaxed">Have questions about our products or services? Our team is here to help.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Details */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 border border-gray-200 hover:border-[#0050d1] transition-colors group">
              <div className="w-10 h-10 bg-[#f4f4f4] flex items-center justify-center mb-6 group-hover:bg-[#0050d1] transition-colors">
                <MapPin className="w-5 h-5 text-[#0050d1] group-hover:text-white" />
              </div>
              <h3 className="text-xs font-black text-[#1a1a1a] uppercase tracking-widest mb-2">Our Location</h3>
              <p className="text-sm text-gray-500 font-medium leading-relaxed">
                Beside Kapila Hotel, Hyd-Road,<br/>Pragati Nagar, Nizamabad,<br/>Telangana - 503001
              </p>
            </div>

            <div className="bg-white p-8 border border-gray-200 hover:border-[#0050d1] transition-colors group">
              <div className="w-10 h-10 bg-[#f4f4f4] flex items-center justify-center mb-6 group-hover:bg-[#0050d1] transition-colors">
                <Phone className="w-5 h-5 text-[#0050d1] group-hover:text-white" />
              </div>
              <h3 className="text-xs font-black text-[#1a1a1a] uppercase tracking-widest mb-2">Call Us</h3>
              <p className="text-sm text-[#0050d1] font-black leading-relaxed">
                Sales: +91 9440502488<br/>Support: +91 9440502488
              </p>
            </div>

            <div className="bg-white p-8 border border-gray-200 hover:border-[#0050d1] transition-colors group">
              <div className="w-10 h-10 bg-[#f4f4f4] flex items-center justify-center mb-6 group-hover:bg-[#0050d1] transition-colors">
                <Mail className="w-5 h-5 text-[#0050d1] group-hover:text-white" />
              </div>
              <h3 className="text-xs font-black text-[#1a1a1a] uppercase tracking-widest mb-2">Email Address</h3>
              <p className="text-sm text-gray-500 font-medium leading-relaxed">
                srinivasasomputers@hotmail.com
              </p>
            </div>

            <div className="bg-[#25D366] p-8 text-white group cursor-pointer hover:bg-[#128C7E] transition-colors">
              <div className="flex items-center gap-4">
                <MessageCircle className="w-8 h-8 fill-white" />
                <div>
                  <h3 className="text-xs font-black uppercase tracking-widest">WhatsApp Us</h3>
                  <p className="text-sm font-bold opacity-90">Chat with an expert now</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-10 border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-black text-[#1a1a1a] mb-8 uppercase tracking-tighter italic">Send a Message</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Full Name</label>
                    <input type="text" className="w-full border border-gray-200 rounded-sm px-4 py-3 focus:border-[#0050d1] outline-none transition-all font-bold text-sm" placeholder="e.g. John Doe" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Email Address</label>
                    <input type="email" className="w-full border border-gray-200 rounded-sm px-4 py-3 focus:border-[#0050d1] outline-none transition-all font-bold text-sm" placeholder="e.g. john@company.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Subject</label>
                  <input type="text" className="w-full border border-gray-200 rounded-sm px-4 py-3 focus:border-[#0050d1] outline-none transition-all font-bold text-sm" placeholder="What can we help you with?" />
                </div>

                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Your Message</label>
                  <textarea rows={6} className="w-full border border-gray-200 rounded-sm px-4 py-3 focus:border-[#0050d1] outline-none transition-all font-bold text-sm resize-none" placeholder="Write your message here..."></textarea>
                </div>

                <button type="button" className="bg-[#1a1a1a] hover:bg-[#0050d1] text-white font-black py-4 px-10 transition-all uppercase text-xs tracking-widest flex items-center gap-2">
                  Send Inquiry <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>

      {/* Map Placeholder */}
      <div className="h-96 bg-[#e5e5e5] relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grayscale opacity-50">
           <Image 
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?auto=format&fit=crop&w=1200&q=80" 
            alt="Map Background" 
            fill 
            className="object-cover"
           />
        </div>
        <div className="relative z-10 bg-white p-6 border border-gray-200 shadow-xl max-w-xs text-center">
          <MapPin className="w-8 h-8 text-[#0050d1] mx-auto mb-4" />
          <h3 className="text-sm font-black text-[#1a1a1a] uppercase tracking-widest mb-2">Visit Our Store</h3>
          <p className="text-xs text-gray-500 font-medium mb-4">Pragati Nagar, Nizamabad, Telangana</p>
          <a href="https://maps.google.com" target="_blank" className="text-[10px] font-black text-[#0050d1] uppercase hover:underline">Get Directions</a>
        </div>
      </div>
    </div>
  );
}

