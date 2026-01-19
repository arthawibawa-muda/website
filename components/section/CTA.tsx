import Button from "../ui/Button";

export default function CTA() {
  return (
    <section
      id="cta"
      className="w-full h-full mt-16 sm:mt-32 bg-light px-4 sm:px-5"
    >
      <div className="max-w-[1440px] bg-brand text-light mx-auto rounded-2xl py-8 sm:py-20 px-4 sm:px-5">
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <h3 className="text-center text-xl sm:text-3xl lg:text-5xl font-semibold">
            SIAP BEKERJA SAMA DENGAN KAMI?
          </h3>
          <p className="w-full max-w-xl text-center">
            Hubungi CV Arthawibawa Muda untuk solusi jasa, pengadaan barang, dan
            produk yang profesional serta terpercaya.
          </p>
          <Button
            url="https://wa.link/wboize"
            target="_blank"
            variant="secondary"
          >
            HUBUNGI KAMI SEKARANG
          </Button>
        </div>
      </div>
    </section>
  );
}
