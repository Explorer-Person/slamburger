"use client";

import Image from "next/image";
import { Pencil, Trash2 } from "lucide-react";

export const menuItems = [
    { id: 1 , img: "/6.2-menuedit/1-menu_manage/list_1.png", name: "Classic Slam", category: "Burgers", status: "visible", price: "$6.99" },
    { id: 2 , img: "/6.2-menuedit/1-menu_manage/list_2.png", name: "Bacon Slam", category: "Burgers", status: "visible", price: "$7.99" },
    { id: 3 , img: "/6.2-menuedit/1-menu_manage/list_3.png", name: "Veggie Slam", category: "Burgers", status: "visible", price: "$6.99" },
    { id: 4 , img: "/6.2-menuedit/1-menu_manage/list_4.png", name: "BBQ Slam", category: "Burgers", status: "visible", price: "$8.99" },
    { id: 5 , img: "/6.2-menuedit/1-menu_manage/list_5.png", name: "Spicy Slam", category: "Burgers", status: "visible", price: "$6.99" },
];

export default function MenuPage() {
    return (
        <div className="min-h-screen px-6 py-10 sm:px-20 font-[var(--font-geist-sans)] bg-white text-black">
            <header className="mb-10">
                <h1 className="lg:text-7xl [font-family:Anton,sans-serif]">MANAGE MENU</h1>
                <button className="mt-4 cursor-pointer bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded">
                    + ADD ITEM
                </button>
            </header>

            <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200 text-lg">
                    <thead className="bg-gray-50 text-left font-bold text-gray-800 text-xl">
                        <tr>
                            <th className="px-8 py-6">Name</th>
                            <th className="px-8 py-6">Price</th>
                            <th className="px-8 py-6">Category</th>
                            <th className="px-8 py-6">Status</th>
                            <th className="px-8 py-6">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100">
                        {menuItems.map((item, i) => (
                            <tr key={i} className="text-lg font-medium">
                                <td className="flex items-center gap-5 px-8 py-6">
                                    <Image
                                        src={item.img}
                                        alt={item.name}
                                        width={60}
                                        height={60}
                                        className="rounded-lg"
                                    />
                                    {item.name}
                                </td>
                                <td className="px-8 py-6">{item.price}</td>
                                <td className="px-8 py-6">{item.category}</td>
                                <td className="px-8 py-6">
                                    <span className="bg-green-100 text-green-800 px-5 py-2 rounded-full text-base font-semibold">
                                        {item.status ? "Visible" : "Hidden"}
                                    </span>
                                </td>
                                <td className="px-8 py-6">
                                    <div className="flex items-center gap-5">
                                        <a href={`/menu/edit?id=${item.id}`}>
                                            <Pencil className="w-6 h-6 cursor-pointer text-gray-700 hover:text-blue-600" />
                                        </a>
                                        <Trash2 className="w-6 h-6 cursor-pointer text-gray-700 hover:text-red-600" />
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
