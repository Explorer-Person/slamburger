// app/menu/edit/[id]/page.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { menuItems } from "../page";

const items = menuItems

export default function EditMenuItemPage() {
    const params = useParams();
    const searchParams = useSearchParams();

    const id = Number(params?.id || searchParams.get("id") || 1);
    const item = items.find((i) => i.id === id);

    const [name, setName] = useState(item?.name ?? "");
    const [price, setPrice] = useState(item?.price ?? "");
    const [category, setCategory] = useState(item?.category ?? "");
    const [status, setStatus] = useState(item?.status ?? "Visible");

    return (
        <div className="min-h-screen bg-white p-6 sm:p-12 font-[var(--font-geist-sans)] text-black">
            <h1 className="lg:text-7xl [font-family:Anton,sans-serif] ml-35 mb-10">EDIT MENU ITEM</h1>
            <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* Burger image */}
                <div className="w-full lg:w-[40%]">
                    <Image
                        src="/6.2-menuedit/2-menu_edit/burger.png"
                        alt="Burger"
                        width={600}
                        height={600}
                        className="w-full max-w-md mx-auto"
                    />
                </div>

                {/* Form */}
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        console.log({ name, price, category, status });
                        // Handle update logic here (e.g., PUT request)
                    }}
                    className="w-full lg:w-[50%] space-y-6"
                >
                    <div>
                        <label className="block font-medium mb-1">Name</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-md p-3 text-lg"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block font-medium mb-1">Price</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-md p-3 text-lg"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>

                    <div className="flex gap-4">
                        <div className="w-1/2">
                            <label className="block font-medium mb-1">Category</label>
                            <select
                                className="w-full border border-gray-300 rounded-md p-3 text-lg"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <option value="Burgers">Burgers</option>
                                <option value="Sandwiches">Sandwiches</option>
                                <option value="Sides">Sides</option>
                                <option value="Drinks">Drinks</option>
                            </select>
                        </div>

                        <div className="w-1/2">
                            <label className="block font-medium mb-1">Status</label>
                            <select
                                className="w-full border border-gray-300 rounded-md p-3 text-lg"
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
                        className="w-full cursor-pointer bg-red-500 hover:bg-red-600 text-white text-lg font-semibold py-3 rounded-md mt-4"
                    >
                        SAVE CHANGES
                    </button>
                </form>
            </div>
        </div>
    );
}
