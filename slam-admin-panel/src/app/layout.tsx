import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Geist, Geist_Mono, Anton } from "next/font/google";



const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading", // 👈 This will be used in CSS
});


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SlamBurger Admin",
  description: "Admin Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} antialiased`}>
        <AdminHeader />
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}

function AdminHeader() {
  return (
    <header className="flex flex-wrap items-center justify-between px-4 sm:px-6 py-2 bg-white border-b border-gray-200">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Link href="/">
          <span className="text-2xl">
            <img className="w-28 sm:w-36 h-20 sm:h-24" src="/burger-icon-transparent.png" alt="Burger Icon" />
          </span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="w-full sm:w-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-14 mt-4 sm:mt-0 text-base sm:text-lg font-medium text-gray-800">
        <NavLink href="/dashboard" label="Dashboard" />
        <NavLink href="/menu" label="Menu" />
        <NavLink href="/category" label="Category" />
        <NavLink href="/orders" label="Orders" />
        <NavLink href="/settings" label="Settings" />
      </nav>
    </header>

  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = typeof window !== "undefined" ? window.location.pathname : "";
  const isActive = pathname === href;
  return (
    <Link href={href}>
      <span className={`hover:text-red-500 ${isActive ? "text-red-600 underline underline-offset-8" : ""}`}>
        {label}
      </span>
    </Link>
  );
}
