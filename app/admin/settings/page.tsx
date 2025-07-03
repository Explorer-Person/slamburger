import Link from "next/link";

export default function ComingSoon() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 sm:px-8 py-12 text-center font-[var(--font-geist-sans)] text-black">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-[var(--font-heading)] mb-6">
                🚧 Coming Soon
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-md sm:max-w-xl mb-10">
                We’re currently working on this section of the admin panel.
                It will be available very soon. Thank you for your patience!
            </p>

            <Link href="/">
                <button className="bg-red-500 cursor-pointer hover:bg-red-600 text-white text-base sm:text-lg font-semibold px-5 sm:px-6 py-3 rounded-md shadow-md transition">
                    Back to Hub
                </button>
            </Link>
        </div>

    );
}
