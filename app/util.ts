import { MenuItem } from "@/app/menu/menu_items";

export function setBasketSafely(newBasket: MenuItem[]) {
    const oldStr = localStorage.getItem("basket");
    const newStr = JSON.stringify(newBasket);
    if (oldStr !== newStr) {
        console.log("Writing to localStorage: basket changed.");
        localStorage.setItem("basket", newStr);
    } else {
        console.log("No write: basket unchanged.");
    }
}

export function deleteItem(itemName: string) {
    // Read basket from localStorage
    const basketString = localStorage.getItem('basket');
    const basket: MenuItem[] = basketString ? JSON.parse(basketString) : [];

    // Filter out the item to delete
    const updatedBasket = basket.filter(item => item.name !== itemName);

    // Save updated basket back to localStorage
    setBasketSafely(updatedBasket)

    return updatedBasket;
}



export function addItemToBasket(item: MenuItem) {
    const pathname = window.location.pathname;
    const isBasketPage = pathname === '/basket';
    let basket = [];
    try {
        const basketString = localStorage.getItem('basket');
        if (basketString) {
            const parsed = JSON.parse(basketString);
            // Ensure it's actually an array!
            basket = Array.isArray(parsed) ? parsed : [];
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
        // If JSON is corrupted, reset basket
        basket = [];
    }

    const existingItem = basket.find((basketItem: MenuItem) => basketItem.id === item.id)

    if (existingItem) {
        basket = basket.map((basketItem: MenuItem) => {
            if (basketItem.id === item.id) {
                // If the item already exists, update its quantity
                return {
                    ...basketItem,
                    quantity: (basketItem.quantity || 1) + 1 // Increment quantity
                };
            }
            return basketItem; // Return other items unchanged
        })
        console.log('Updated existing item in basket:', item);
    } else {
        basket.push(item);
        console.log('Adding item to basket:', item);
    }

    setBasketSafely(basket)

    if (isBasketPage) {
        return basket;
    }
    location.href = '/basket'; // Redirect to basket page after adding item
    // Optionally return the new basket
    return basket;
}