import type { Metadata } from "next";
import Link from 'next/link';
import './globals.css';
import React from 'react';

export const metadata: Metadata = {
  title: 'SLAMBURGER',
  description: 'Handcrafted Burgers & Crispy Wings',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[--background] text-[--foreground] font-[var(--font-body)]">
        <Header />
        <main className="relative w-screen overflow-x-hidden bg-[--background]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-4 md:py-8 bg-[#FFF4E8] opacity-100 shadow-md gap-y-4 md:gap-y-0 md:gap-x-8 text-center md:text-left">
      <Link href="/" aria-label="Go to homepage">
        <h1 className="text-2xl md:text-4xl font-[Anton] text-[--foreground] tracking-wide cursor-pointer">
          SLAMBURGER
        </h1>
      </Link>

      <nav className="flex flex-col md:flex-row gap-y-2 md:gap-y-0 md:space-x-6 text-base md:text-lg font-semibold uppercase">
        <a href="/menu" className="hover:text-[--accent]">Menu</a>
        <a href="/about_us" className="hover:text-[--accent]">About Us</a>
        <a href="/gallery" className="hover:text-[--accent]">Gallery</a>
        <a href="/contact" className="hover:text-[--accent]">Contact</a>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-[--background] px-10 pt-10 pb-6 mt-12 text-[--foreground]">
      {/* Top Row: Logo + Navigation */}
      <div className="flex flex-col md:flex-row justify-center items-center w-full gap-y-4">
        <h2 className="text-5xl font-[Anton] tracking-wide mx-10">SLAMBURGER</h2>
        <nav className="flex space-x-8 text-lg font-medium uppercase tracking-wide">
          <a href="/menu" className="hover:text-[--accent]">Menu</a>
          <a href="/about_us" className="hover:text-[--accent]">About</a>
          <a href="/gallery" className="hover:text-[--accent]">Gallery</a>
          <a href="/contact" className="hover:text-[--accent]">Contact</a>
        </nav>
      </div>

      {/* Divider */}
      <div className="my-6 border-t border-[--foreground]"></div>

      {/* Bottom Text */}
      <div className="text-center text-sm font-medium">
        © 2025 SLAMBURGER. All rights reserved.
      </div>
    </footer>
  );
}

