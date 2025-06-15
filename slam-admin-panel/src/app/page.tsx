import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" items-center justify-items-center min-h-screen p-8 pb-10 gap-16 sm:p-20 font-[var(--font-geist-sans)] bg-white text-black">
      <main className="flex flex-col gap-10 row-start-2 items-center text-center">
        {/* Logo */}
        <Image
          src="/6.2-menuedit/2-menu_edit/burger.png"
          alt="SlamBurger Admin"
          width={400}
          height={400}
          className="drop-shadow-md"
        />

        {/* Headings */}
        <div>
          <h1 className="text-5xl sm:text-6xl font-[var(--font-heading)] mb-4">
            SLAMBURGER ADMIN
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            Manage your burgers, orders & more
          </p>
        </div>

        {/* CTA Button */}
        <Link href="/dashboard">
          <button className="mt-4 cursor-pointer bg-red-500 hover:bg-red-600 text-white text-lg sm:text-xl font-semibold px-8 py-3 rounded-md shadow-md transition">
            ENTER ADMIN PANEL
          </button>
        </Link>
      </main>
    </div>
  );
}
