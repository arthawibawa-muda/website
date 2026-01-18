import Button from "../ui/Button";
import Number from "../ui/Number";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-[url(/bg.webp)] px-4 sm:px-5 text-light bg-cover bg-center w-full h-[90vh]"
    >
      <div className="w-full h-full flex flex-col justify-center items-center gap-20 lg:gap-30">
        <div className="max-w-5xl flex flex-col items-center justify-center gap-4 sm:gap-5">
          <p className="w-fit text-sm py-1 px-3 rounded-full bg-light/20 font-medium">
            CV ARTHAWIBAWA MUDA
          </p>
          <h1 className="font-semibold text-3xl md:text-5xl lg:text-7xl text-center uppercase">
            Solusi Jasa & Pengadaan Barang Terpercaya
          </h1>
          <p className="text-base text-center text-light/80">
            Mitra andal untuk proyek yang menuntut kualitas, integritas, dan
            kepastian.
          </p>
          <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5">
            <Button url="/">MULAI KERJASAMA</Button>
            <Button url="/" variant="secondary">
              KONSULTASI GRATIS
            </Button>
          </div>
        </div>
        <div className="w-full max-w-5xl flex items-center justify-between gap-10">
          <Number number="12+" desc="Klient Terpercaya" />
          <Number number="27+" desc="Proyek Terselesaikan" />
          <Number number="100%" desc="Komitmen Kualitas" />
        </div>
      </div>
    </section>
  );
}
