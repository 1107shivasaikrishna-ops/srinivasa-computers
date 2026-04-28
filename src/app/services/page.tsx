"use client";

import { Calendar, Wrench, Shield } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="bg-brand-light min-h-screen pb-20">
      <div className="bg-brand-dark text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional repair and maintenance for all your cash handling equipment.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Information Section */}
          <div>
            <h2 className="text-3xl font-bold text-brand-dark mb-6">Expert Maintenance & AMC</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We offer comprehensive Annual Maintenance Contracts (AMC) and on-demand repair services for cash counting machines, paper shredders, and other office automation tools. Ensure your business never stops due to equipment failure.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg text-brand-blue mr-4 mt-1">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-dark mb-2">Annual Maintenance Contracts (AMC)</h3>
                  <p className="text-gray-600">Regular servicing, preventive maintenance, and priority support to keep your machines in optimal condition year-round.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-red-100 p-3 rounded-lg text-brand-red mr-4 mt-1">
                  <Wrench className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-dark mb-2">On-Demand Repairs</h3>
                  <p className="text-gray-600">Fast and reliable repair services by certified technicians for all major brands of cash handling equipment.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-brand-dark mb-6 flex items-center">
              <Calendar className="w-6 h-6 mr-2 text-brand-red" />
              Book a Service
            </h3>
            
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none" placeholder="9876543210" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service Type</label>
                <select className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none bg-white">
                  <option>AMC Inquiry</option>
                  <option>Machine Repair</option>
                  <option>Installation</option>
                  <option>General Servicing</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                <input type="date" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Issue Description / Machine Model</label>
                <textarea rows={4} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none" placeholder="Please describe the issue or mention your machine model..."></textarea>
              </div>

              <button type="submit" className="w-full bg-brand-blue hover:bg-blue-800 text-white font-bold py-3 rounded-md transition-colors mt-4">
                Submit Request
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
