import { CART_KEY } from "../constants/settings.js";

export default function getCart() {
    const cart = localStorage.getItem(CART_KEY);

    // cart doesn't exist return an empty array
    if (cart === null) {
        return [];
    } else {
        return JSON.parse(cart);
    }
}
