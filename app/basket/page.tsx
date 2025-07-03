'use client';

import { menuItems, MenuItem } from "@/app/menu/menu_items";
import { deleteItem, addItemToBasket } from "@/app/util";
import { useEffect, useState } from "react";
import BasketItem from "@/app/basket/components/basket_item";
import MoreItemsSlider from "@/app/basket/components/more_items";

export default function BasketPage() {
    const [items, setItems] = useState<MenuItem[]>([]); // Adjust type as needed
    const [moreItems, setMoreItems] = useState<MenuItem[]>([]);

    useEffect(() => {
        const basketString = localStorage.getItem('basket');
        const basket = basketString ? JSON.parse(basketString) : [];
        const moreItems = menuItems.filter(item =>
            !basket.some((b: MenuItem) => b.name === item.name)
        );
        setMoreItems(moreItems);
        setItems(basket);
    }, [])
    function deleteBasketItem(itemName: string) {
        // Read basket from localStorage
        const updatedBasket = deleteItem(itemName);
        setItems(updatedBasket); // Update state to reflect changes

    }
    function onAddToBasket(item: MenuItem) {
        // Read basket from localStorage
        const updatedBasket = addItemToBasket(item);
        setItems(updatedBasket); // Update state to reflect changes
    }

    console.log('Basket items:', items);

    return (
        <main className="w-full bg-[var(--background)] text-[var(--foreground)] font-[var(--font-body)] px-6 md:px-12 space-y-10 pb-20 pt-35">
            <p className="text-3xl text-center">{items.length === 0 ? "Please Add Item Into Basket..." : ""}</p>
            <div className="block md:flex md:flex-wrap md:justify-center space-y-10 gap-6">
            {
                items.map((item, index) => (
                    <BasketItem key={index} deleteBasketItem={deleteBasketItem} item={item} />
                ))
            }
            </div>

            <button
                onClick={() => {
                    location.href = '/orders';
                }}
                className="w-full bg-[#F64B36] text-white rounded-xl py-3 text-lg font-bold hover:bg-[#d83422] transition"
            >
                ADD TO ORDER
            </button>

            <MoreItemsSlider items={moreItems} onAddToBasket={onAddToBasket} />
        </main>
    );
}





