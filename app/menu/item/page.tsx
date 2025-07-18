/* eslint-disable @next/next/no-img-element */
'use client'
import { useEffect, useState, Suspense } from 'react';
import Image from 'next/image';
import { getSectionAnim } from "@/app/animation-util";
import { addItemToBasket } from "@/app/util";
import { motion } from "framer-motion";
import { menuItems, nutritions, ingredients, MenuItem } from '@/app/menu/menu_items'; // Adjust the import path as necessary
import { useSearchParams } from 'next/navigation';

export default function chooseItem() {

    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <Item />
            </Suspense>
        </div>
    )
}

function Item() {
    const [item, setItem] = useState<MenuItem | null>(null);
    const searchParams = useSearchParams();
    const itemName = searchParams.get('name'); // For ?item=something
    useEffect(() => {
        console.log('Item name from search params:', itemName);
        if (itemName) {
            // Convert dashes to spaces for comparison
            const name = itemName
                .replace(/-/g, ' ')
                .replace(/\b\w/g, char => char.toUpperCase());
            
            console.log(name, itemName)

            // Use find to get a single item or undefined
            const found = menuItems.find((item) => item.name === name);
            setItem(found ?? null);
        } else {
            setItem(null);
        }
    }, [itemName]);

    console.log('Item component rendered with item:', item);
    return (
        <main className="w-full bg-[var(--background)] text-[var(--foreground)] font-[var(--font-body)] px-6 md:px-12 py-20 pt-5">
            <ClassicSlam item={item} />
            <NutritionSection item={item} />
        </main>
    );
}

function ClassicSlam({ item }: { item: MenuItem | null }) {
    return (
        <section className="relative w-full mt-5 w-full px-4 md:px-12 py-16 md:py-20 md:mt-20 md:pb-45 overflow-hidden flex justify-center items-center">
            {/* Background Decoration */}
            <img
                src="/3-item/arkaplan_yeni.png"
                alt="Decorative Squiggle"
                className="absolute top-4 left-4 w-12 md:w-50 pointer-events-none"
            />

            <div className="max-w-8xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-[55px] relative z-10">
                {/* Burger Image */}
                <motion.div {...getSectionAnim({ direction: "", delay: 0.1 })} className="w-full lg:w-auto max-w-[500px]">
                    <Image
                        src={item?.img || "/fallback.png"}
                        alt={item?.name || "Burger Image"}
                        width={500}
                        height={500}
                        className="h-auto"
                    />
                </motion.div>

                {/* Burger Content */}
                <motion.div {...getSectionAnim({ direction: "up", delay: 0.1 })} className="text-center lg:text-left max-w-xl space-y-6 px-2 md:px-0">

                    <h1 className="text-4xl md:text-8xl font-[Anton] leading-tight">
                        {item?.name?.toUpperCase() || "ITEM NAME"}
                    </h1>
                    <p className="text-xl md:text-2xl font-medium text-gray-800">
                        {item?.desc || "No description available."}
                    </p>

                    <div className="text-3xl md:text-5xl font-bold">{item?.price || ""}</div>

                    {/* Optionally show other details here, if you have more in item */}
                    {/* Allergen, protein, etc */}

                    {/* Order Button */}
                    <a
                        href="#"
                        onClick={(e) => { addItemToBasket(item!); e.preventDefault(); }}
                        className="inline-block bg-red-500 text-white text-base md:text-xl font-bold px-6 py-3 rounded-full mt-4 hover:bg-red-600 transition"
                    >
                        ORDER NOW ON SLAMEXPRESS
                    </a>
                </motion.div>
            </div>
        </section>



    );
}

function NutritionSection({ item }: { item: MenuItem | null }) {

    const burgerName = 'Bacon Burger';
    const nutrition = nutritions.find(n => n.name === burgerName);
    const itemIngredients = ingredients.find(i => i.name === item?.name);

    return (
        <section className="w-full flex flex-col px-4 md:px-12 pt-16 md:py-20">
            {/* Section Heading */}
            <motion.h2 {...getSectionAnim({ direction: "", delay: 0.1 })} className="text-4xl md:text-8xl font-[Anton] mb-10  md:mb-12 text-center md:text-left md:ml-70">
                NUTRITIONAL INFO <br /> & INGREDIENTS
            </motion.h2>

            <motion.div {...getSectionAnim({ direction: "left", delay: 0.1 })} className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left side: Text Info */}
                <div className="space-y-6 text-center md:text-left px-2 md:px-0">
                    <p className="text-xl md:text-2xl font-medium text-gray-800">
                        Here’s what goes into your burger.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
                        {/* Nutritional Values */}
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold mb-4">Nutritional Values</h3>
                            <ul className="space-y-2 text-base md:text-xl">
                                <li className="flex justify-between">
                                    <span className="text-orange-500">🔥 Calories</span>
                                    <span>{nutrition?.calories ?? "-"} kcal</span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="text-orange-500">🍗 Protein</span>
                                    <span>{nutrition?.protein ?? "-"} g</span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="text-orange-500">🍞 Carbs</span>
                                    <span>{nutrition?.carbs ?? "-"} g</span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="text-orange-500">🥓 Fat</span>
                                    <span>{nutrition?.fat ?? "-"} g</span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="text-orange-500">🧂 Sodium</span>
                                    <span>{nutrition?.sodium ?? "-"} mg</span>
                                </li>
                            </ul>
                        </div>

                        {/* Ingredients */}
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold mb-4">Ingredients</h3>
                            <ul className="space-y-2 text-base md:text-xl">
                                {itemIngredients?.list?.length ? (
                                    itemIngredients.list.map((ing: string, i: number) => <li key={i}>{ing}</li>)
                                ) : (
                                    <li>No ingredients listed.</li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Right side: Burger Image */}
                <motion.div {...getSectionAnim({ direction: "right", delay: 0.2 })} className="flex justify-center px-2 md:px-0">
                    <Image
                        src={item?.img || "/fallback.png"}
                        alt={item?.name || "Burger visual"}
                        width={800}
                        height={800}
                        className="w-full max-w-[280px] md:max-w-[400px] h-auto object-contain"
                    />
                </motion.div>
            </motion.div>
        </section>

    );
}

