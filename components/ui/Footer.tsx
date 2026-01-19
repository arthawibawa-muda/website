import { FooterLink } from "./FooterLink";

export function Footer() {
  return (
    <footer className="max-w-[1440px] mx-auto mx-auto mt-16 sm:mt-32 px-4 sm:px-5 bg-light font-sans">
      <div className="w-full flex flex-col gap-8">
        <div className="w-full grid grid-cols-12 gap-5">
          <div className="col-span-12 md:col-span-5 lg:col-span-4 flex flex-col gap-2 md:gap-5">
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-semibold">
              ARTHAWIBAWA MUDA
            </h2>
            <h3 className="text-lg sm:text-2xl lg:text-3xl font-semibold uppercase">
              Solusi Jasa & Pengadaan Barang Terpercaya
            </h3>
          </div>
          <div className="col-span-12 md:col-start-7 lg:col-start-9 md:col-span-2 flex flex-col gap-3 md:gap-5">
            <p>MENU</p>
            <ul className="flex flex-col gap-2 md:gap-4">
              <li>
                <FooterLink href="#hero">BERANDA</FooterLink>
              </li>
              <li>
                <FooterLink href="#about">TENTANG</FooterLink>
              </li>
              <li>
                <FooterLink href="#services">LAYANAN KAMI</FooterLink>
              </li>
              <li>
                <FooterLink href="#products">PRODUK KAMI</FooterLink>
              </li>
            </ul>
          </div>
          <div className="md:col-start-9 lg:col-start-11 col-span-12 md:col-span-2 flex flex-col gap-3 md:gap-5 h-fit">
            <p>CONTACT</p>
            <ul className="flex flex-col gap-2 md:gap-4">
              <li>
                <FooterLink href="#about">TENTANG</FooterLink>
              </li>
              <li>
                <FooterLink href="#services">LAYANAN KAMI</FooterLink>
              </li>
              <li>
                <FooterLink href="#products">PRODUK KAMI</FooterLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full h-[1px] bg-dark" />
        <p className="mb-8 text-sm text-dark/80">
          Copyright &copy; {new Date().getFullYear()} ARTHAWIBAWA MUDA. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
