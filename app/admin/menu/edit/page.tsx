"use client";
import Image from "next/image";
import { useState, Suspense } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { menuItems } from "@/app/menu/menu_items";

const items = menuItems

export default function EditMenuItemPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <EditMenuItemContent />
        </Suspense>
    );
}

function EditMenuItemContent() {
    const params = useParams();
    const searchParams = useSearchParams();

    const id = Number(params?.id || searchParams.get("id") || 1);
    const item = items.find((i) => i.id === id);

    const [name, setName] = useState(item?.name ?? "");
    const [price, setPrice] = useState(item?.price ?? "");
    const [category, setCategory] = useState(item?.category ?? "");
    const [status, setStatus] = useState("Visible");

    return (
        <div className="min-h-screen bg-white px-6 pt-10 pb-20 sm:px-12 font-[var(--font-geist-sans)] text-black">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl [font-family:Anton,sans-serif] text-center lg:text-left mb-12">
                EDIT MENU ITEM
            </h1>

            <div className="flex flex-col-reverse lg:flex-row items-center gap-14">
                {/* Form Section */}
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        console.log({ name, price, category, status });
                    }}
                    className="w-full lg:w-[50%] space-y-8"
                >
                    <div>
                        <label className="block font-semibold text-lg mb-2">Name</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-lg p-4 text-base focus:outline-none focus:ring-2 focus:ring-red-400"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block font-semibold text-lg mb-2">Price</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-lg p-4 text-base focus:outline-none focus:ring-2 focus:ring-red-400"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6">
                        <div className="w-full sm:w-1/2">
                            <label className="block font-semibold text-lg mb-2">Category</label>
                            <select
                                className="w-full border border-gray-300 rounded-lg p-4 text-base"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <option value="Burgers">Burgers</option>
                                <option value="Sandwiches">Sandwiches</option>
                                <option value="Sides">Sides</option>
                                <option value="Drinks">Drinks</option>
                            </select>
                        </div>

                        <div className="w-full sm:w-1/2">
                            <label className="block font-semibold text-lg mb-2">Status</label>
                            <select
                                className="w-full border border-gray-300 rounded-lg p-4 text-base"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                            >
                                <option value="Visible">Visible</option>
                                <option value="Hidden">Hidden</option>
                            </select>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold text-lg py-4 rounded-lg shadow-md transition"
                    >
                        SAVE CHANGES
                    </button>
                </form>

                {/* Burger Image */}
                <div className="w-full lg:w-[40%] mb-10 lg:mb-0">
                    <Image
                        src={item?.img || "/default-burger.png"}
                        alt="Burger"
                        width={600}
                        height={600}
                        className="w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto"
                    />
                </div>
            </div>
        </div>

    );
}
