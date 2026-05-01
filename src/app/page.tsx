import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import ServiceBanners from "@/components/home/ServiceBanners";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Categories />
      <ServiceBanners />
      <WhyChooseUs />
    </div>
  );
}
