'use client'
import { getSectionAnim } from "../animation-util";
import { motion } from "framer-motion";

export default function Gallery() {
    return (
        <main className="flex flex-col items-center md:w-[100%] pt-25 md:pt-35 md:relative space-y-20 md:space-y-35 font-[var(--font-body)]">
            <GalleryMasonry />
            {/* Add any additional components or sections here */}
        </main>
    );
}

// /components/GalleryPage.tsx

import Image from "next/image";

const galleryItems = [
    { src: "/6-gallery/close-up-fried-chicken-drumsticks.jpg", alt: "Fried Chicken Drumsticks" },
    { src: "/6-gallery/crispy-chicken-burger-WEB-01.jpg", alt: "Crispy Chicken Burger" },
    { src: "/6-gallery/Extra-Cripy-Garlic-Truffle-Fries-1.jpg", alt: "Garlic Truffle Fries" },
    { src: "/6-gallery/glass-with-coke.jpg", alt: "Coke" },
    { src: "/6-gallery/high-angle-fried-chicken-drumsticks-with-ketchup-fries.jpg", alt: "Chicken Drumsticks High Angle" },
    { src: "/6-gallery/huge-burger-with-fried-meat-vegetables.jpg", alt: "Huge Burger" },
    { src: "/6-gallery/juicy-cheeseburger-rustic-wooden-board.jpg", alt: "Juicy Cheeseburger" },
    { src: "/6-gallery/MSG-Smash-Burger-FT-RECIPE0124-d9682401f3554ef683e24311abdf342b.jpg", alt: "MSG Smash Burger" },
    { src: "/6-gallery/premium_photo-1672774750509-bc9ff226f3e8.jpg", alt: "Premium Burger" },
    { src: "/6-gallery/Smashburger-recipe-120219.webp", alt: "Smashburger" },
    { src: "/6-gallery/ultimate-southern-burger_batch64_beauty01-86-b9c26e256dd34e39b6c0cfb0c02a9fef.jpg", alt: "Ultimate Southern Burger" },
    { src: "/6-gallery/Ultimate-Veggie-Burgers-FT-Recipe-0821-5d7532c53a924a7298d2175cf1d4219f.jpg", alt: "Ultimate Veggie Burger" },
];



function GalleryMasonry() {
    const randomHeights = [630, 670, 730, 600, 690, 660, 740, 610, 710, 650, 680, 635, 720, 670];
    return (
        <section className="min-h-screen relative w-[100%]">
            <div className="mx-auto">
                <motion.h1
                    {...getSectionAnim({ direction: "", delay: 0.1 })}
                    className="text-6xl md:text-8xl font-[Anton] text-center text-[#222] mb-8 tracking-tight"
                >
                    GALLERY
                </motion.h1>
                <motion.p
                    {...getSectionAnim({ direction: "", delay: 0.2 })}
                    className="text-lg md:text-2xl text-center max-w-2xl mx-auto mb-8 text-gray-700"
                >
                    Feast your eyes on our signature SlamBurger creations, crispy wings, and all-star sides!
                </motion.p>
                <div className="w-[90%] mx-[5%] columns-1 md:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
                    {galleryItems.map((item, i) => (
                        <motion.div
                            {...getSectionAnim({ direction: "", delay: 0.2 + i * 0.03 })}
                            key={i}
                            className="mb-4 break-inside-avoid overflow-hidden rounded-xl shadow-sm"
                            style={{
                                background: "#fff",
                                height: randomHeights[i % randomHeights.length], // randomize height per image
                            }}
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 350px"
                                    quality={100}
                                    priority={i < 4}
                                    style={{
                                        height: "100%",
                                        width: "100%",
                                        objectFit: "cover",
                                    }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
