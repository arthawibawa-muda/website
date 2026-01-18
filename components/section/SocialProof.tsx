import BrandBantul from "@/public/brand-bantul.webp";
import BrandLivingWorld from "@/public/brand-living-world.webp";
import BrandMts from "@/public/brand-mts.webp";
import BrandPati from "@/public/brand-pati.webp";
import BrandRs from "@/public/brand-rs-fatmawati.webp";
import Image from "next/image";

export default function SocialProof() {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-5 py-8 sm:py-10 px-4 sm:px-5">
      <p className="text-dark">TELAH BEKERJASAMA DENGAN</p>
      <ul
        role="list"
        className="flex max-w-5xl items-center flex-row sm:gap-x-12"
      >
        <li className="flex">
          <Image src={BrandPati} alt="Hello" unoptimized />
        </li>
        <li className="flex">
          <Image src={BrandBantul} alt="Hello" unoptimized />
        </li>
        <li className="flex">
          <Image src={BrandLivingWorld} alt="Hello" unoptimized />
        </li>
        <li className="flex">
          <Image src={BrandMts} alt="Hello" unoptimized />
        </li>
        <li className="flex">
          <Image src={BrandRs} alt="Hello" unoptimized />
        </li>
      </ul>
    </section>
  );
}
