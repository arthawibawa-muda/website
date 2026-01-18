"use client";

import {
  Popover,
  PopoverBackdrop,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import clsx from "clsx";
import Link from "next/link";
import Button from "./Button";
import { NavLink } from "./NavLink";

function MobileNavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <PopoverButton as={Link} href={href} className="block w-full p-2">
      {children}
    </PopoverButton>
  );
}

function MobileNavIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-dark"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          "origin-center transition",
          open && "scale-90 opacity-0",
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          "origin-center transition",
          !open && "scale-90 opacity-0",
        )}
      />
    </svg>
  );
}

function MobileNavigation() {
  return (
    <Popover>
      <PopoverButton
        className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </PopoverButton>
      <PopoverBackdrop
        transition
        className="fixed inset-0 bg-slate-300/50 duration-150 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in"
      />
      <PopoverPanel
        transition
        className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-light p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5 data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-150 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <MobileNavLink href="#hero">BERANDA</MobileNavLink>
        <MobileNavLink href="#about">TENTANG</MobileNavLink>
        <MobileNavLink href="#services">LAYANAN KAMI</MobileNavLink>
        <MobileNavLink href="#products">PRODUK KAMI</MobileNavLink>
      </PopoverPanel>
    </Popover>
  );
}

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 py-2 sm:py-6 font-sans">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 text-dark">
        <nav className="relative flex justify-between rounded-full bg-light/80 px-4 py-2 shadow-lg backdrop-blur-md ring-1 ring-slate-900/5">
          <div className="flex items-center md:gap-x-12">
            <Link href="#" aria-label="Home" className="font-semibold text-xl">
              AWB
            </Link>
            <div className="hidden lg:flex lg:gap-x-6">
              <NavLink href="#hero">BERANDA</NavLink>
              <NavLink href="#about">TENTANG</NavLink>
              <NavLink href="#services">LAYANAN KAMI</NavLink>
              <NavLink href="#products">PRODUK KAMI</NavLink>
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <Button url="https://wa.link/wboize" target="_blank">
              KONTAK KAMI
            </Button>
            <div className="-mr-1 lg:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
