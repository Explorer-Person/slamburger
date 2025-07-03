
import type { Metadata } from "next";
import './globals.css';
import {Header, Footer, BasketWidget} from './layout_items'


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
      <body >
        <Header />
        <BasketWidget />
        {/* Main content area */}
        <main className="relative w-screen overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

