"use client";
import Image from "next/image";
import { Pencil, Trash2 } from "lucide-react";

import { menuItems } from "@/app/menu/menu_items";

export default function MenuPage() {
    return (
        <div className="min-h-screen px-4 sm:px-6 lg:px-20 py-10 font-[var(--font-geist-sans)] bg-white text-black">
            {/* Header */}
            <header className="mb-10 flex flex-col sm:flex-row justify-between gap-4 sm:items-center">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-[Anton,sans-serif]">
                    MANAGE MENU
                </h1>
                <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded text-base sm:text-lg w-full sm:w-auto">
                    + ADD ITEM
                </button>
            </header>

            {/* Table */}
            <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200 text-sm sm:text-base lg:text-lg">
                    <thead className="bg-gray-50 text-left font-bold text-gray-800">
                        <tr>
                            <th className="px-4 sm:px-6 lg:px-8 py-4 lg:py-6">Name</th>
                            <th className="px-4 sm:px-6 lg:px-8 py-4 lg:py-6">Price</th>
                            <th className="px-4 sm:px-6 lg:px-8 py-4 lg:py-6">Category</th>
                            <th className="px-4 sm:px-6 lg:px-8 py-4 lg:py-6">Status</th>
                            <th className="px-4 sm:px-6 lg:px-8 py-4 lg:py-6">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100">
                        {menuItems.map((item, i) => (
                            <tr key={i} className="font-medium">
                                <td className="px-4 sm:px-6 lg:px-8 py-4">
                                    <div className="flex flex-col xs:flex-row xs:items-center xs:gap-4">
                                        <Image
                                            src={item.img}
                                            alt={item.name}
                                            width={60}
                                            height={60}
                                            className="rounded-lg mx-auto xs:mx-0"
                                        />
                                        <span className="mt-2 text-sm sm:text-base lg:text-lg text-center xs:text-left">
                                            {item.name}
                                        </span>
                                    </div>
                                </td>

                                <td className="px-4 sm:px-6 lg:px-8 py-4">{item.price}</td>
                                <td className="px-4 sm:px-6 lg:px-8 py-4">{item.category}</td>
                                <td className="px-4 sm:px-6 lg:px-8 py-4">
                                    <span className="bg-green-100 text-green-800 px-4 py-1 rounded-full text-xs sm:text-sm font-semibold">
                                        {"Visible"}
                                    </span>
                                </td>
                                <td className="px-4 sm:px-6 lg:px-8 py-4">
                                    <div className="flex items-center gap-4">
                                        <a href={`/admin/menu/edit?id=${item.id}`}>
                                            <Pencil className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 hover:text-blue-600" />
                                        </a>
                                        <Trash2 className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 hover:text-red-600" />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    );
}
