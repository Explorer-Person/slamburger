'use client'
import { useRef, useState } from 'react';
import Image from 'next/image';
import { getSectionAnim } from "../animation-util";
import { motion } from "framer-motion";
import { MenuItem, menuItems } from './menu_items'; // Adjust the import path as necessary
import LongPressDesc from './util'


export default function Menu() {
    // State to manage active category
    return (
        <main className="pt-35 md:w-[100%] md:pt-45 font-[var(--font-body)] px-6 md:px-0 py-20">
            <SlamBurgerMenu />
        </main>
    );
}

function SlamBurgerMenu() {
    const [activeCategory, setActiveCategory] = useState('burgers');

    const handleCategoryChange = (category: string) => {
        setActiveCategory(category);
    };

    return (
        <section className="w-full">
            <div className="w-full md:w-[80%] md:mx-[10%] mx-auto">
                {/* Header */}
                <motion.h1 {...getSectionAnim({ direction: "", delay: 0.1 })} className="text-4xl md:text-7xl tracking-wide font-[Anton] mb-2">SLAMBURGER</motion.h1>
                <motion.h2 {...getSectionAnim({ direction: "", delay: 0.2 })} className="text-6xl md:text-8xl tracking-widest font-[Anton] mb-15">MENU</motion.h2>
            </div>
            {/* Category Navigation - STICKY */}
            <motion.div
                {...getSectionAnim({ direction: "", delay: 0.1 })}
                className="sticky top-0 z-30 bg-[var(--layout-bg)]/70 w-full md:w-[80%] md:mx-[10%] mx-auto flex flex-wrap gap-4 md:gap-6 text-base md:text-lg font-semibold mb-10 border-b border-gray-300 pb-2"
            >
                {['burgers', 'wings', 'sides'].map((category) => (
                    <button
                        key={category}
                        type="button"
                        onClick={() => handleCategoryChange(category)}
                        className={`cursor-pointer hover:text-[--accent] text-2xl transition border-none bg-transparent p-0 font-inherit ${activeCategory === category
                            ? 'text-black underline underline-offset-4 font-bold'
                            : 'text-gray-500'
                            }`}
                    >
                        {category.toUpperCase()}
                    </button>
                ))}
            </motion.div>
            {/* Menu Items */}
            <div className="w-full md:w-[80%] md:mx-[10%] mx-auto">
                <div className="space-y-10">
                    {menuItems
                        .filter((item) => item.category === activeCategory)
                        .map((itemDetails, index) =>
                        (
                            <MenuElement item={itemDetails} key={index + 1} />
                        )
                        )}
                </div>
            </div>
        </section>
    )
}

function MenuElement ({ item }: { item: MenuItem }){

    const [showRest, setShowRest] = useState(false);
    const timeoutRef = useRef<number>(0);

    // Handler: Long press anywhere on the box
    const handleTouchStart = () => {
        timeoutRef.current = Number(setTimeout(() => setShowRest(true), 600));
    };
    const handleTouchEnd = () => {
        if (timeoutRef) {
            clearTimeout(timeoutRef.current);
        }
        // Optional: setShowRest(false); // To hide again when released
    };

    return (
        <motion.div
            {...getSectionAnim({ direction: "up", delay: 0.1 })}
            onClick={() => chooseItem(item)}
            key={item.name}
            className={`w-full flex cursor-pointer md:flex-row md:flex-row-reverse md:items-center md:h-[350px] md:justify-between border-b border-gray-300 pb-6 last:border-b-0 last:pb-0 gap-4 transition-transform duration-200 hover:shadow-xl hover:scale-[1.03] hover:bg-white/40 rounded-lg md:p-10 md:px-15`}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchEnd}
        >
            <div className="w-[40%] md:w-150 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 justify-center">
                <Image
                    src={item.img}
                    alt={item.name}
                    width={item.imgW}
                    height={item.imgH}
                    className="mx-auto w-full md:mx-0"
                />
                <span className="hidden md:block text-xl md:text-4xl font-bold text-center md:text-left mx-auto sm:mx-0">
                    {item.price}
                </span>
            </div>
            <div className="text-center w-full md:w-[75%] md:text-left">
                <h3 className="text-lg md:text-5xl md:mb-5 font-semibold mb-0">{item.name}</h3>
                <LongPressDesc desc={item.desc} showRest={showRest} />
                <span className="block md:hidden text-xl md:text-4xl font-bold text-center md:text-left mx-auto sm:mx-0">
                    {item.price}
                </span>
            </div>
        </motion.div>
    )
}


function chooseItem(item: { name: string; desc: string; img: string; price: string; imgW: number; imgH: number }) {
    // This function can be used to handle item selection if needed
    console.log(`Selected item: ${item.name}`);
    const encodedName = encodeURIComponent(item.name.toLowerCase().replace(/\s+/g, '-'));
    window.location.href = `/menu/item?name=${encodedName}`; // Redirect to item page
}