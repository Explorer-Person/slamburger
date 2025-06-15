import type { Metadata } from "next";
import "./globals.css";
import { Geist, Geist_Mono, Anton } from "next/font/google";
import AdminHeader from "./admin_header";

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
        {children} {/* This must be directly rendered like this */}
      </body>
    </html>
  );
}


