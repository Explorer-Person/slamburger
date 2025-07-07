'use client'
import { useState } from 'react';
import Image from 'next/image';
import { getSectionAnim } from "../animation-util";
import { motion } from "framer-motion";
import { menuItems } from './menu_items'; // Adjust the import path as necessary


export default function Menu() {
    // State to manage active category
    return (
        <main className="w-full md:w-full bg-[#FFF4E8] text-[--foreground] font-[var(--font-body)] px-6 md:px-0 py-20">
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
        <section className="relative w-full bg-[var(--background)] text-[var(--foreground)] pt-20 md:px-15 md:pt-45 md:pt-25">
            <div className="w-full md:max-w-8xl">
                {/* Header */}
                <motion.h1 {...getSectionAnim({ direction: "", delay: 0.1 })} className="text-4xl md:text-7xl tracking-wide font-[Anton] mb-2">SLAMBURGER</motion.h1>
                <motion.h2 {...getSectionAnim({ direction: "", delay: 0.2 })} className="text-6xl md:text-8xl tracking-widest font-[Anton] mb-15">MENU</motion.h2>

                {/* Category Navigation */}
                <motion.div {...getSectionAnim({ direction: "up", delay: 0.1 })} className="flex flex-wrap gap-4 md:gap-6 text-base md:text-lg font-semibold mb-10 border-b border-gray-300 pb-2">
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
                <div className="space-y-10">
                    {menuItems
                        .filter((item) => item.category === activeCategory)
                        .map((item, index) => (
                            <motion.div
                                {...getSectionAnim({ direction: index === 0 ? "" : "up", delay: 0.1 })}
                                onClick={() => chooseItem(item)}
                                key={item.name}
                                className={`
                                md:flex md:flex-col cursor-pointer md:flex-row md:items-center md:h-[350px] md:justify-between 
                                border-b border-gray-300 pb-6 last:border-b-0 last:pb-0 gap-4
                                transition-transform duration-200
                                ${index === 0 ? 'hover:scale-[1.03]' : 'hover:shadow-xl hover:scale-[1.03] hover:bg-white/40'}
                                rounded-lg md:p-10 md:px-15`}
                            >
                                <div className={`text-center md:text-left ${index === 0 ? 'md:mb-35 md:w-100' : ''}`}>
                                    <h3 className="text-4xl md:text-5xl font-semibold mb-5">{item.name}</h3>
                                    <p className="text-xl md:text-2xl text-gray-700">{item.desc}</p>
                                </div>
                                <div className={`md:w-150 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 justify-center
                                    ${index === 0 ? 'md:relative md:right-40 md:bottom-55' : ''}
                                    `}>
                                    <Image
                                        src={item.img}
                                        alt={item.name}
                                        width={item.imgW}
                                        height={item.imgH}
                                        className={`
                                        mx-auto md:mx-0
                                        ${index === 0 ? 'md:absolute md:w-200 w-150 ' : ''}
                                    `}
                                    />
                                    <span className={`text-4xl md:text-4xl font-bold text-center md:text-left mx-auto sm:mx-0
                                        ${index === 0 ? 'md:absolute md:left-165 md:top-45 ' : ''}
                                        `}>
                                        {item.price}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                </div>
            </div>
        </section>

    )
}

function chooseItem(item: { name: string; desc: string; img: string; price: string; imgW: number; imgH: number }) {
    // This function can be used to handle item selection if needed
    console.log(`Selected item: ${item.name}`);
    window.location.href = `/menu/item?name=${item.name.toLowerCase().replace(/\s+/g, '-')}`; // Redirect to item page
}
