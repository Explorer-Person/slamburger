
'use client';

import { useEffect, useState } from "react";
import Image from "next/image";

type OrderItem = {
    name: string;
    img: string;
    price: string; // as "$4.99"
    quantity?: number;
    options?: {
        noOnion?: boolean;
        extraCheese?: boolean;
        addPickles?: boolean;
        makeMeal?: boolean;
    }
};


export default function OrdersPage() {
    const [items, setItems] = useState<OrderItem[]>([]);

    useEffect(() => {
        // Load basket from localStorage (if you use a different key, update here)
        const basketStr = localStorage.getItem("basket");
        const basket = basketStr ? JSON.parse(basketStr) : [];
        setItems(basket);
    }, []);

    // Total price calculation (assume price is "$N.NN")
    const total = items.reduce(
        (sum, item) =>
            sum +
            (Number(item.price.replace("$", "")) * (item.quantity || 1)),
        0
    );

    return (
        <section className="w-full flex items-center justify-center bg-[var(--background)] my-12 mt-30">
            <div className="w-[350px] md:w-[370px] bg-[#FFF8EC] rounded-2xl p-6 shadow-2xl">
                <h2 className="text-5xl font-[Anton] text-center mb-4 tracking-wide">YOUR ORDERS</h2>
                <div className="flex flex-col gap-5 mb-4">
                    {items.length === 0 && (
                        <div className="text-center text-gray-400 my-8">Your basket is empty.</div>
                    )}
                    {items.map((item, idx) => (
                        <div key={item.name + idx} className="flex items-center gap-3">
                            <div className="w-16 h-16 flex-shrink-0 relative">
                                <Image
                                    src={item.img}
                                    alt={item.name}
                                    fill
                                    className="object-contain"
                                    sizes="64px"
                                    priority={idx < 2}
                                />
                            </div>
                            <div className="flex flex-col flex-1">
                                <span className="font-bold text-lg text-black">{item.name} {item.options?.makeMeal === true ? "(MEAL)" : ""}</span>
                                <span className="text-sm text-gray-700 font-semibold">x{item.quantity || 1}</span>
                            </div>
                            <div className="font-bold text-lg text-black ml-auto">
                                {(Number(item.price.replace("$", "")) * (item.quantity || 1)).toFixed(2)}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between items-center font-bold text-lg border-t pt-3 border-black/10 mb-4">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                </div>
                <button
                    onClick={addItemsToOrders}
                    className="w-full bg-[#F64B36] text-white text-xl font-extrabold rounded-full py-3 shadow-md hover:bg-[#d83422] transition"
                >
                    PLACE ORDER
                </button>
            </div>
        </section>
    );
}

function addItemsToOrders(): void {
    const basketString = localStorage.getItem('basket');
    localStorage.setItem('orders', basketString || '[]');
    localStorage.removeItem('basket');
    console.log('Items added to orders and basket cleared.');
    location.href = '/orders/successfull'; // Redirect to thank you page
}