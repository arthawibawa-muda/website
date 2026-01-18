import Button from "../ui/Button";
import ServicesCard from "../ui/ServiceCard";

export default function Services() {
  return (
    <section id="services" className="w-full h-full mt-8 sm:mt-32 bg-brand">
      <div className="max-w-[1440px] text-light mx-auto py-8 sm:py-20 px-4 sm:px-5">
        <div className="w-full flex flex-col gap-10 lg:gap-20">
          <div className="flex flex-col-reverse md:flex-row-reverse justify-between items-start">
            <h3 className="text-xl sm:text-3xl lg:text-5xl font-semibold">
              MELAYANI DENGAN INTEGRITAS, <br /> BEKERJA DENGAN KUALITAS
            </h3>
            <p>LAYANAN KAMI</p>
          </div>
          <ServicesCard />
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-center justify-center">
            <Button url="/" variant="secondary" className="w-72">
              HUBUNGI KAMI SEKARANG
            </Button>
            <Button url="/" variant="outline" className="w-72">
              LIHAT PRODUK KAMI
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
