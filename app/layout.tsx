import { Header } from "@/components/ui/Header";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const googleSans = Plus_Jakarta_Sans({
  variable: "--font-google-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CV Arthawibawa Muda",
  description: "Jasa dan pengadaan barang terpercaya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${googleSans.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
