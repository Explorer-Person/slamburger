'use client'
import { useState } from 'react';
import Image from 'next/image';



export default function Menu() {
    // State to manage active category
    return (
        <main className="w-full bg-[#FFF4E8] text-[--foreground] font-[var(--font-body)] px-6 md:px-12 py-20">
            <SlamBurgerMenu />
            <ClassicSlam />
            <NutritionSection />
        </main>
    );
}

function SlamBurgerMenu() {
    const [activeCategory, setActiveCategory] = useState('burgers');
    const handleCategoryChange = (category: string) => {
        setActiveCategory(category);
    };

    const menuItems = [
        {
            category: 'burgers',
            name: 'Classic Slam',
            desc: 'Beef patty, American cheese, lettuce, tomato',
            img: '/2-menu/1-menu_1.png',
            price: '$8,99',
            imgW: 240,
            imgH: 240,
        },
        {
            category: 'wings',
            name: 'Crispy Wings',
            desc: 'Choice of sauce: Buffalo, BBQ, or plain',
            img: '/2-menu/1-menu_2.png',
            price: '$9,99',
            imgW: 240,
            imgH: 240,
        },
        {
            category: 'sides',
            name: 'Fries',
            desc: 'Thick-cut, golden, and crispy',
            img: '/2-menu/1-menu_3.png',
            price: '$3,99',
            imgW: 240,
            imgH: 240,
        },
        {
            category: 'sides',
            name: 'Soft Drink',
            desc: 'Assorted sodas or iced tea',
            img: '/2-menu/1-menu_4.png',
            price: '$2,49',
            imgW: 240,
            imgH: 240,
        },
    ]
    return (
        <section className="px-4 md:px-0">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-[Anton] mb-2">SLAMBURGER</h1>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-[Anton] mb-6">MENU</h2>

                {/* Category Navigation */}
                <div className="flex flex-wrap gap-4 md:gap-6 text-base md:text-lg font-semibold mb-10 border-b border-gray-300 pb-2">
                    {['burgers', 'wings', 'sides'].map((category) => (
                        <button
                            key={category}
                            type="button"
                            onClick={() => handleCategoryChange(category)}
                            className={`cursor-pointer hover:text-[--accent] transition border-none bg-transparent p-0 font-inherit ${activeCategory === category
                                ? 'text-black underline underline-offset-4 font-bold'
                                : 'text-gray-500'
                                }`}
                        >
                            {category.toUpperCase()}
                        </button>
                    ))}
                </div>

                {/* Menu Items */}
                <div className="space-y-10">
                    {menuItems
                        .filter((item) => item.category === activeCategory)
                        .map((item) => (
                            <div
                                key={item.name}
                                className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-300 pb-6 last:border-b-0 last:pb-0 gap-4"
                            >
                                <div className="text-center md:text-left">
                                    <h3 className="text-2xl md:text-4xl font-semibold">{item.name}</h3>
                                    <p className="text-base md:text-lg text-gray-700">{item.desc}</p>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-4 md:gap-8 justify-center">
                                    <Image
                                        src={item.img}
                                        alt={item.name}
                                        width={item.imgW}
                                        height={item.imgH}
                                        className="mx-auto sm:mx-0"
                                    />
                                    <span className="text-2xl md:text-4xl font-bold text-center md:text-left mx-auto sm:mx-0">
                                        {item.price}
                                    </span>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </section>

    )
}

function ClassicSlam() {
    return (
        <section className="relative mt-25 w-full bg-[#FFF4E8] px-4 md:px-12 py-16 md:py-20 md:pb-45 overflow-hidden text-[--foreground] flex justify-center items-center">
            {/* Background Decoration */}
            <img
                src="/3-item/arkaplan_yeni.png"
                alt="Decorative Squiggle"
                className="absolute top-4 left-4 w-12 md:w-50 pointer-events-none"
            />

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-[55px] relative z-10">
                {/* Burger Image */}
                <div className="w-full lg:w-auto max-w-[800px]">
                    <Image
                        src="/3-item/ayni_burger.png"
                        alt="Classic Slam Burger"
                        width={800}
                        height={800}
                        className="w-full h-auto"
                    />
                </div>

                {/* Burger Content */}
                <div className="text-center lg:text-left max-w-xl space-y-6 px-2 md:px-0">
                    <div className="flex justify-center lg:justify-start gap-4 items-center">
                        <div className="text-center text-xs font-bold border-[2px] border-yellow-400 text-yellow-600 rounded-full px-3 py-1">
                            <span className="text-lg block leading-tight">640</span>
                            CALORIES
                        </div>
                        <div className="text-center text-xs font-bold bg-red-500 text-white rounded-full px-3 py-1">
                            <span className="text-lg block leading-tight">34g</span>
                            PROTEIN
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-[Anton] leading-tight">CLASSIC SLAM</h1>
                    <p className="text-xl md:text-2xl font-medium text-gray-800">The burger that started it all.</p>

                    <div className="text-3xl md:text-4xl font-bold">$8.99</div>

                    <p className="text-base md:text-lg text-gray-700">
                        Beef patty, cheddar cheese, lettuce, tomato
                    </p>

                    {/* Allergen Icons */}
                    <div className="flex justify-center lg:justify-start gap-4 text-base md:text-lg items-center mt-2">
                        <span className="flex items-center gap-1">
                            🧊 <span>Dairy</span>
                        </span>
                        <span className="flex items-center gap-1">
                            🥖 <span>Gluten</span>
                        </span>
                    </div>

                    {/* Order Button */}
                    <a
                        href="#"
                        className="inline-block bg-red-500 text-white text-base md:text-xl font-bold px-6 py-3 rounded-full mt-4 hover:bg-red-600 transition"
                    >
                        ORDER NOW ON SLAMEXPRESS
                    </a>
                </div>
            </div>
        </section>


    );
}

function NutritionSection() {
    return (
        <section className="w-full flex flex-col px-4 md:px-12 py-16 md:py-20 bg-[#FFF4E8] text-[--foreground]">
            {/* Section Heading */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-[Anton] mb-10  md:mb-16 text-center md:text-left md:ml-140">
                NUTRITIONAL INFO <br /> & INGREDIENTS
            </h2>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left side: Text Info */}
                <div className="space-y-6 text-center md:text-left px-2 md:px-0">
                    <p className="text-xl md:text-2xl font-medium text-gray-800">
                        Here’s what goes into your burger.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
                        {/* Nutritional Values */}
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold mb-4">Nutritional Values</h3>
                            <ul className="space-y-2 text-base md:text-lg">
                                <li className="flex justify-between">
                                    <span className="text-orange-500">🔥 Calories</span>
                                    <span>640 kcal</span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="text-orange-500">🍗 Protein</span>
                                    <span>34 g</span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="text-orange-500">🔥 Carbs</span>
                                    <span>48 g</span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="text-orange-500">🔥 Fat</span>
                                    <span>32 g</span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="text-orange-500">🧂 Sodium</span>
                                    <span>980 mg</span>
                                </li>
                            </ul>
                        </div>

                        {/* Ingredients */}
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold mb-4">Ingredients</h3>
                            <ul className="space-y-2 text-base md:text-lg">
                                <li>🍔 100% Angus Beef Patty</li>
                                <li>🧀 American Cheddar Cheese</li>
                                <li>🍞 Brioche Bun</li>
                                <li>🥬 Romaine Lettuce</li>
                                <li>🍅 Tomato Slices</li>
                                <li>🧡 SlamBurger Sauce</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Right side: Burger Image */}
                <div className="flex justify-center px-2 md:px-0">
                    <Image
                        src="/3-item/ayni_burger.png"
                        alt="Burger visual"
                        width={400}
                        height={400}
                        className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-sm h-auto object-contain"
                    />
                </div>
            </div>
        </section>

    );
}
