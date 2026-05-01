"use client";

export default function OfferBanner() {
  return (
    <section className="bg-[#0050d1] py-4">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white text-sm font-semibold">
          🎯 Limited Offer: Free AMC for 1 Year on all Cash Counting Machine purchases above ₹15,000
        </p>
        <a href="tel:9440502488" className="bg-white text-[#0050d1] hover:bg-gray-100 font-bold text-sm px-5 py-2 flex-shrink-0 transition-colors">
          Claim Offer →
        </a>
      </div>
    </section>
  );
}
