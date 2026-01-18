import { CircleCheckBig } from "lucide-react";
import Image from "next/image";
import Button from "../ui/Button";

export default function About() {
  return (
    <section id="about" className="max-w-[1440px] mx-auto px-4 sm:px-5">
      <div className="w-full mt-16 sm:mt-[120px] flex flex-col gap-5 lg:gap-8">
        <div className="flex flex-col-reverse md:flex-row justify-between items-start">
          <h3 className="text-xl sm:text-3xl lg:text-5xl font-semibold">
            MELAYANI DENGAN INTEGRITAS, <br /> BEKERJA DENGAN KUALITAS
          </h3>
          <p>TENTANG KAMI</p>
        </div>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 lg:col-span-7">
            <div className="relative w-full h-[200px] sm:h-[380px] lg:h-[480px] overflow-hidden rounded-2xl">
              <Image
                alt=""
                src="/tentang.webp"
                fill
                className="absolute h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <div className="w-full h-full flex flex-col justify-between max-lg:gap-8">
              <div className="flex flex-col gap-4 lg:gap-5">
                <p>
                  CV Arthawibawa Muda bergerak di bidang jasa, perdagangan, dan
                  pengadaan barang untuk sektor swasta dan pemerintahan, dengan
                  komitmen pada layanan yang profesional, transparan, dan tepat
                  waktu.
                </p>
                <p>
                  Kami mengutamakan kualitas, kejujuran, dan kepuasan klien
                  dalam setiap proyek, membangun kepercayaan melalui proses
                  kerja yang rapi dan hasil yang dapat diandalkan.
                </p>
                <div className="w-full h-[1px] bg-dark" />
                <div className="flex flex-col gap-4 sm:gap-5">
                  <div className="flex items-center gap-2">
                    <CircleCheckBig className="size-6 sm:size-8" />
                    <p className="font-semibold text-xl sm:text-2xl uppercase">
                      Profesional & Terpercaya
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CircleCheckBig className="size-6 sm:size-8" />
                    <p className="font-semibold text-xl sm:text-2xl uppercase">
                      Transparan & Tepat Waktu
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CircleCheckBig className="size-6 sm:size-8" />
                    <p className="font-semibold text-xl sm:text-2xl uppercase">
                      Fokus Kepuasan Klien
                    </p>
                  </div>
                </div>
              </div>
              <Button
                url="https://wa.link/wboize"
                target="_blank"
                className="w-fit"
              >
                HUBUNGI KAMI SEKARANG
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
