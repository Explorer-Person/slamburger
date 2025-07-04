import { useRef } from "react";
import { MenuItem } from "@/app/menu/menu_items";
import Image from "next/image";



type MoreItemsSliderProps = {
    moreItems: MenuItem[];
    onAddToBasket?: (item: MenuItem) => void;
};

export default function MoreItemsSlider({ moreItems, onAddToBasket }: MoreItemsSliderProps) {
    const scrollRef = useRef<HTMLDivElement>(null);

    // Scroll left/right helpers
    const scroll = (dir: "left" | "right") => {
        if (!scrollRef.current) return;
        const amount = 320; // pixels per card width
        scrollRef.current.scrollBy({ left: dir === "right" ? amount : -amount, behavior: "smooth" });
    };

    return (
        <section className="my-10">
            <div className="flex items-center justify-between mb-4 px-2">
                <h3 className="text-2xl font-bold">More Items</h3>
                <div className="flex gap-2">
                    <button
                        className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 active:scale-95 transition"
                        onClick={() => scroll("left")}
                        aria-label="Scroll left"
                    >‹</button>
                    <button
                        className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 active:scale-95 transition"
                        onClick={() => scroll("right")}
                        aria-label="Scroll right"
                    >›</button>
                </div>
            </div>
            <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto scrollbar-hide px-2 py-2"
                style={{
                    scrollSnapType: "x mandatory",
                    WebkitOverflowScrolling: "touch",
                }}
            >
                {moreItems.map((item, idx) => (
                    <div
                        key={item.name + idx}
                        className="flex flex-col items-center justify-between flex-shrink-0 w-[260px] h-[410px] bg-white rounded-2xl shadow-md p-4
                            hover:shadow-xl transition cursor-pointer group relative"
                        style={{ scrollSnapAlign: "start" }}
                    >
                        <div>
                            <Image
                                src={item.img}
                                alt={item.name}
                                width={item.name === "Coke" || item.name === "Extra Crispy Garlic Truffle Fries" ? 100 : 150}
                                height={140}
                                className="rounded-xl mb-3 text-center mx-auto"
                            />
                            <div className="font-bold text-lg mb-1 text-center">{item.name}</div>
                            <div className="text-sm text-gray-600 mb-2 text-center">{item.desc}</div>
                            <div className="font-semibold text-[#F64B36] text-lg mb-4 text-center">{item.price}</div>
                        </div>
                        <button
                            className="w-full py-2 rounded-lg bg-[#F64B36] text-white font-semibold shadow-lg
                                hover:bg-[#d83422] active:scale-95 transition-all mt-2"
                            onClick={() => onAddToBasket?.(item)}
                        >
                            Add to Basket
                        </button>
                        {/* Fading border effect */}
                        <span className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#F6BE36] pointer-events-none transition" />
                    </div>
                ))}
            </div>
        </section>
    );
}

