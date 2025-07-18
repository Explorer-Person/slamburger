
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
    const [hiddenStatus, setHiddenStatus] = useState(false)

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
            ((Number(item.price.replace("$", "").replace(",", ".")) + (item.options?.makeMeal ? 2.50 : 0)) * (item.quantity || 1)),
        0
    );

    return (
        <section className="w-full flex items-center justify-center bg-[var(--background)] my-12 mt-30">
            <div className="
            w-[350px] md:w-[1200px] 
            bg-gradient-to-br from-[#FFF8EC] via-[#fff3d6] to-[#ffeacc]
            rounded-3xl
            p-6 md:p-12
            shadow-2xl md:shadow-[0_8px_40px_0_rgba(246,75,54,0.14)]
            ring-4 ring-[#FFD49F]/30
            transition-transform duration-200 hover:scale-105 hover:shadow-[0_12px_48px_0_rgba(246,75,54,0.24)]
            border border-[#FFD49F]/50
            "
            >
                <h2 className="text-5xl md:text-6xl font-[Anton] text-center mb-6 md:mb-10 tracking-wide drop-shadow">
                    YOUR ORDERS
                </h2>
                <div className="
                    grid grid-cols-1 md:grid-cols-2
                    gap-6 md:gap-10 md:gap-x-25
                    mb-6 md:mb-10
                    md:w-[80%] mx-auto
                    ">
                    {items.length === 0 && (
                        <div className="text-center text-gray-400 my-10 md:my-20 text-xl md:text-2xl">
                            Your basket is empty.
                        </div>
                    )}
                    {items.map((item, idx) => (
                        <div
                            key={item.name + idx}
                            className={`${hiddenStatus ? "" : idx > 1 ? "hidden" : ""} flex items-center gap-4 md:gap-8 group`}
                        >
                            <div className="w-16 h-16 md:w-24 md:h-24 flex-shrink-0 relative">
                                <Image
                                    src={item.img}
                                    alt={item.name}
                                    fill
                                    className="object-contain group-hover:scale-110 transition-transform"
                                    sizes="96px"
                                    priority={idx < 2}
                                />
                            </div>
                            <div className="flex flex-col flex-1">
                                <span className="font-bold text-xl md:text-2xl text-black">
                                    {item.name} {item.options?.makeMeal === true ? "(MEAL)" : ""}
                                </span>
                                <span className="text-base md:text-lg text-gray-700 font-semibold">
                                    x{item.quantity || 1}
                                </span>
                            </div>
                            <div className="font-bold text-xl md:text-2xl text-black ml-auto">
                                {((Number(item.price.replace("$", "")) + (item.options?.makeMeal ? 2.50 : 0)) * (item.quantity || 1)).toFixed(2)}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-[100%] text-center">

                    <button
                        className={`
                        ${hiddenStatus ? "" : items.length > 2 ? "" : "hidden"}
                        md:hidden
                        my-8
                        px-5 py-2
                        rounded-full
                        bg-black hover:bg-[var(--button-bg-hover)] text-[var(--button-fg)] 
                        font-bold
                        shadow-lg
                        hover:from-red-500 hover:to-yellow-300 hover:scale-105 hover:text-white
                        active:scale-95
                        transition-all duration-200
                        text-base tracking-wide
                        outline-none
                        mx-auto block
                        `}
                        onClick={() => { setHiddenStatus(hiddenStatus ? false : true) }}
                    >{hiddenStatus ? "Hide" : "Show More..."}</button>
                </div>
                <div className="flex justify-between items-center font-bold text-xl md:text-2xl border-t pt-5 border-black/10 mb-6 md:mb-8">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                </div>
                <button
                    onClick={addItemsToOrders}
                    className="w-full bg-[#F64B36] text-white text-2xl md:text-3xl font-extrabold rounded-full py-4 md:py-5 shadow-lg hover:bg-[#d83422] transition"
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