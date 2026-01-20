import About from "@/components/section/About";
import CTA from "@/components/section/CTA";
import { Faqs } from "@/components/section/Faqs";
import Hero from "@/components/section/Hero";
import Products from "@/components/section/Products";
import Services from "@/components/section/Services";
import SocialProof from "@/components/section/SocialProof";
import { Testimonials } from "@/components/section/Testimonials";

export default function Home() {
  return (
    <main className="w-full font-sans flex flex-col justify-center items-center">
      <Hero />
      <SocialProof />
      <About />
      <Services />
      <Products />
      <Testimonials />
      <Faqs />
      <CTA />
    </main>
  );
}
