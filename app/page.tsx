import About from "@/components/section/About";
import CTA from "@/components/section/CTA";
import Hero from "@/components/section/Hero";
import Products from "@/components/section/Products";
import Services from "@/components/section/Services";
import SocialProof from "@/components/section/SocialProof";

export default function Home() {
  return (
    <main className="w-full font-sans flex flex-col justify-center items-center">
      <Hero />
      <SocialProof />
      <About />
      <Services />
      <Products />
      <CTA />
    </main>
  );
}
