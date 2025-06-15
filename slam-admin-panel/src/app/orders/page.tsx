"use client";

import React from "react";

const orders = [
    { id: 1025, items: "Classic Slam, Mozzarella Sticks", time: "2 minutes ago" },
    { id: 1024, items: "Spicy Slam, Classic Slam, Iced Tea", time: "1 hour ago" },
    { id: 1023, items: "BBQ Slam, Bacon Slam", time: "3 hours ago" },
    { id: 1022, items: "Veggie Slam, Western Slam", time: "1 day ago" },
    { id: 1021, items: "Classic Slam, Onion Rings, Cola", time: "1 day ago" },
    { id: 1020, items: "Spicy Slam, Sweet Potato Fries", time: "2 days ago" },
    { id: 1019, items: "BBQ Slam, Iced Tea", time: "2 days ago" },


];


export default function OrderLogPage() {
    return (
        <section>
            <div className="min-h-screen px-4 py-10 sm:px-10 font-[var(--font-geist-sans)] bg-white text-black">
                <header className="mb-8">
                    <h1 className="lg:text-7xl [font-family:Anton,sans-serif]">ORDER LOG</h1>
                    <button className="mt-4 cursor-pointer bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2.5 rounded shadow-md transition">
                        VIEW ALL
                    </button>
                </header>

                <div className="w-[98%] bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
                    {orders.map((order) => (
                        <div
                            key={order.id}
                            className="flex items-center justify-between px-6 py-6 border-b last:border-b-0 hover:bg-gray-50 transition"
                        >
                            <p className="text-[1.15rem] font-medium text-gray-900 leading-snug">
                                <span className="text-base text-gray-500 mr-1">New order:</span>
                                <span className="font-bold text-black">#{order.id}</span>{" "}
                                {order.items}
                            </p>
                            <span className="text-gray-500 text-sm font-medium whitespace-nowrap">{order.time}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
