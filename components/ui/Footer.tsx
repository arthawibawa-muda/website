import { MailIcon, Phone } from "lucide-react";
import Link from "next/link";
import { NavLink } from "./NavLink";

export function Footer() {
  return (
    <footer className="max-w-[1440px] mx-auto mx-auto px-4 sm:px-5 bg-light font-sans">
      <div className="py-4 sm:py-16">
        <nav className="mt-10 space-y-10" aria-label="quick links">
          <h3 className="sm:text-center text-xl sm:text-3xl lg:text-5xl font-semibold">
            ARTHAWIBAWA MUDA
          </h3>
          <div className="-my-1 flex flex-col sm:flex-row justify-center gap-x-6">
            <NavLink href="#hero">BERANDA</NavLink>
            <NavLink href="#about">TENTANG</NavLink>
            <NavLink href="#services">LAYANAN KAMI</NavLink>
            <NavLink href="#products">PRODUK KAMI</NavLink>
          </div>
        </nav>
      </div>
      <div className="flex flex-col sm:items-center border-t border-slate-400/10 py-4 sm:py-10 sm:flex-row-reverse sm:justify-between">
        <div className="flex gap-x-6">
          <Link
            href="mailto:cvarthawibawamuda@gmail.com"
            target="_blank"
            className="group text-dark/60"
          >
            <MailIcon />
          </Link>
          <Link
            href="https://wa.link/wboize"
            target="_blank"
            className="group text-dark/60"
          >
            <Phone />
          </Link>
        </div>
        <p className="mt-6 text-sm text-dark/80 sm:mt-0">
          Copyright &copy; {new Date().getFullYear()} ARTHAWIBAWA MUDA. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
