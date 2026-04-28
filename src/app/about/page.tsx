import React from 'react';
import Image from 'next/image';

export const metadata = {
  title: 'About Us | Srinivasa Computers',
  description: 'Learn about Srinivasa Computers, the leading provider of cash counting machines and AMC services in Nizamabad.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-blue pt-24 pb-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-brand-red">Srinivasa Computers</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your trusted partner in cash management solutions and AMC services in Nizamabad since our inception.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl border border-gray-700">
            <Image
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80"
              alt="Cash counting machines"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              At Srinivasa Computers, our mission is to empower businesses with cutting-edge cash management technology. We understand the critical importance of accuracy, speed, and reliability in financial operations.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Located in the heart of Nizamabad, we have built a strong reputation for delivering not only high-quality products but also unparalleled after-sales support and AMC (Annual Maintenance Contract) services.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 backdrop-blur-sm text-center">
            <div className="w-16 h-16 bg-brand-red/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Quality Products</h3>
            <p className="text-gray-400">
              We offer only the most reliable and efficient cash counting machines from top global brands.
            </p>
          </div>
          
          <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 backdrop-blur-sm text-center">
            <div className="w-16 h-16 bg-brand-red/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Fast Service</h3>
            <p className="text-gray-400">
              Our expert technicians are always ready to provide prompt and effective repair services.
            </p>
          </div>

          <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 backdrop-blur-sm text-center">
            <div className="w-16 h-16 bg-brand-red/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Expert Team</h3>
            <p className="text-gray-400">
              Our dedicated team brings years of experience in the cash management industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
