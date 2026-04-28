import Hero from "@/components/home/Hero";
import { ShieldCheck, Truck, HeadphonesIcon, Cog } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Features Section */}
      <section className="py-20 bg-brand-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Why Choose Srinivasa Computers?</h2>
            <div className="w-24 h-1 bg-brand-red mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-50 text-brand-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">Premium Quality</h3>
              <p className="text-gray-600">Industrial-grade machines built for heavy-duty daily operations.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-red-50 text-brand-red rounded-full flex items-center justify-center mx-auto mb-6">
                <Cog className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">Expert AMC</h3>
              <p className="text-gray-600">Comprehensive annual maintenance contracts to keep your business running.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-50 text-brand-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">Fast Delivery</h3>
              <p className="text-gray-600">Quick delivery and installation across Nizamabad and surrounding areas.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-red-50 text-brand-red rounded-full flex items-center justify-center mx-auto mb-6">
                <HeadphonesIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">Dedicated Support</h3>
              <p className="text-gray-600">Always available to assist with repairs and troubleshooting.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
