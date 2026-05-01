"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phone: ""
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const supabase = createClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const { error: dbError } = await supabase.from("enquiries").insert([
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          phone: formData.phone,
          status: "new"
        }
      ]);

      if (dbError) throw dbError;

      // WhatsApp Alert
      const whatsappMessage = `New Enquiry from ${formData.name}!\n\nSubject: ${formData.subject}\nMessage: ${formData.message}\nEmail: ${formData.email}\nPhone: ${formData.phone}`;
      const whatsappUrl = `https://wa.me/919440502488?text=${encodeURIComponent(whatsappMessage)}`;
      
      setSubmitted(true);
      
      // Optionally open WhatsApp in a new tab
      // window.open(whatsappUrl, '_blank');

    } catch (err: any) {
      setError(err.message || "Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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

            <a 
              href={`https://wa.me/919440502488`}
              target="_blank"
              className="block bg-[#25D366] p-8 text-white group cursor-pointer hover:bg-[#128C7E] transition-colors"
            >
              <div className="flex items-center gap-4">
                <MessageCircle className="w-8 h-8 fill-white" />
                <div>
                  <h3 className="text-xs font-black uppercase tracking-widest">WhatsApp Us</h3>
                  <p className="text-sm font-bold opacity-90">Chat with an expert now</p>
                </div>
              </div>
            </a>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-10 border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-black text-[#1a1a1a] mb-8 uppercase tracking-tighter italic">Send a Message</h2>
              
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 uppercase mb-2">Message Sent!</h3>
                  <p className="text-gray-500 font-medium mb-8">Thank you for reaching out. We will get back to you shortly.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-[#0050d1] font-black uppercase text-xs tracking-widest hover:underline"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Full Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full border border-gray-200 rounded-sm px-4 py-3 focus:border-[#0050d1] outline-none transition-all font-bold text-sm" 
                        placeholder="e.g. John Doe" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Email Address</label>
                      <input 
                        type="email" 
                        required
                        className="w-full border border-gray-200 rounded-sm px-4 py-3 focus:border-[#0050d1] outline-none transition-all font-bold text-sm" 
                        placeholder="e.g. john@company.com" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        required
                        className="w-full border border-gray-200 rounded-sm px-4 py-3 focus:border-[#0050d1] outline-none transition-all font-bold text-sm" 
                        placeholder="e.g. +91 9876543210" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Subject</label>
                      <input 
                        type="text" 
                        required
                        className="w-full border border-gray-200 rounded-sm px-4 py-3 focus:border-[#0050d1] outline-none transition-all font-bold text-sm" 
                        placeholder="What can we help you with?" 
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Your Message</label>
                    <textarea 
                      rows={6} 
                      required
                      className="w-full border border-gray-200 rounded-sm px-4 py-3 focus:border-[#0050d1] outline-none transition-all font-bold text-sm resize-none" 
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>

                  {error && <p className="text-red-500 text-xs font-bold">{error}</p>}

                  <button 
                    type="submit" 
                    disabled={loading}
                    className="bg-[#1a1a1a] hover:bg-[#0050d1] disabled:opacity-50 text-white font-black py-4 px-10 transition-all uppercase text-xs tracking-widest flex items-center gap-2"
                  >
                    {loading ? "Sending..." : "Send Inquiry"} <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
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

