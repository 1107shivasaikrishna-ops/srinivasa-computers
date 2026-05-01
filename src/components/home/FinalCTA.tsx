"use client";

export default function FinalCTA() {
  return (
    <section className="bg-[#f4f4f4] border-t border-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-black text-[#1a1a1a] mb-1">Ready to upgrade your business equipment?</h3>
          <p className="text-sm text-gray-500">Get a free demo and personalized quote — no obligation.</p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <a href="https://wa.me/919440502488" target="_blank" rel="noreferrer" className="bg-[#25D366] hover:bg-[#128C7E] text-white text-sm font-bold px-6 py-3 transition-colors">
            WhatsApp Now
          </a>
          <a href="tel:9440502488" className="bg-[#0050d1] hover:bg-[#003d9e] text-white text-sm font-bold px-6 py-3 transition-colors">
            Call: 9440502488
          </a>
        </div>
      </div>
    </section>
  );
}
