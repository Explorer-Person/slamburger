import { MenuItemOption, MenuItem } from "@/app/menu/menu_items";
import Image from "next/image";
import { useEffect, useState } from "react";


export default function BasketItem({
    deleteBasketItem,
    item
}: {
    deleteBasketItem: (itemName: string) => void;
    item: MenuItem;
}) {
    const [quantity, setQuantity] = useState<number>(item.quantity || 1);

    // Ensure options exists (initialize if not)
    const [options, setOptions] = useState<MenuItemOption>(
        item.options || {
            noOnion: false,
            extraCheese: false,
            addPickles: false,
            makeMeal: false,
        }
    );

    // Compute price with options and quantity
    const mealAddon = 2.5;
    const price =
        (Number(item.price.slice(1)) +
            (options.makeMeal ? mealAddon : 0)) *
        quantity;

    // Update basket in localStorage whenever quantity or options change
    useEffect(() => {
        // Read basket from localStorage
        const basketString = localStorage.getItem("basket");
        const basket: MenuItem[] = basketString ? JSON.parse(basketString) : [];

        // Find and update this item in the basket array
        const updatedBasket = basket.map((b) =>
            b.name === item.name
                ? { ...b, quantity, options }
                : b
        );

        localStorage.setItem("basket", JSON.stringify(updatedBasket));
    }, [quantity, options, item.name]);

    const handleOptionChange = (key: keyof MenuItemOption) => {
        setOptions((prev: MenuItemOption) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    return (
        <div className="w-[320px] md:w-[340px] bg-white rounded-2xl shadow-xl p-5 pb-8 relative flex flex-col items-center mx-auto">
            {/* Close button */}
            <button
                className="absolute right-4 top-4 text-2xl text-gray-400 hover:text-gray-600"
                aria-label="Close"
                onClick={() => deleteBasketItem(item.name)}
            >
                ×
            </button>

            {/* Title */}
            <h2 className="text-2xl font-extrabold tracking-wide mb-1 mt-2 text-center">
                {item.name}
            </h2>

            {/* Burger Image */}
            <div className="my-2">
                <Image
                    src={item.img}
                    alt={item.name}
                    width={160}
                    height={120}
                    className="rounded-xl"
                />
            </div>

            {/* Description */}
            <div className="text-center text-sm text-gray-700 mb-2">
                {item.desc || "No description available."}
            </div>

            {/* Price */}
            <div className="text-xl font-bold text-gray-900 mb-4">
                ${price.toFixed(2)}
            </div>

            {/* Options */}
            {item.category === "burgers" && (
                <div className="flex flex-col items-start w-full px-3 gap-2 mb-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={options.noOnion}
                            onChange={() => handleOptionChange("noOnion")}
                            className="accent-yellow-600"
                        />
                        No Onion
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={options.extraCheese}
                            onChange={() => handleOptionChange("extraCheese")}
                            className="accent-yellow-600"
                        />
                        Extra Cheese
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={options.addPickles}
                            onChange={() => handleOptionChange("addPickles")}
                            className="accent-yellow-600"
                        />
                        Add Pickles
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={options.makeMeal}
                            onChange={() => handleOptionChange("makeMeal")}
                            className="accent-yellow-600"
                        />
                        Make it a Meal{" "}
                        <span className="text-xs text-gray-500">
                            (+${mealAddon.toFixed(2)})
                        </span>
                    </label>
                </div>
            )}

            {/* Quantity Selector */}
            <div className="flex items-center mb-5 space-x-2">
                <button
                    className="w-8 h-8 rounded-lg bg-gray-200 text-lg font-bold flex items-center justify-center"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    aria-label="Decrease quantity"
                >
                    -
                </button>
                <span className="w-6 text-center font-semibold">{quantity}</span>
                <button
                    className="w-8 h-8 rounded-lg bg-gray-200 text-lg font-bold flex items-center justify-center"
                    onClick={() => setQuantity((q) => q + 1)}
                    aria-label="Increase quantity"
                >
                    +
                </button>
            </div>
        </div>
    );
}