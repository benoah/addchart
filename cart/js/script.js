import handleCartClick from "./utils/handleCartClick.js";
import getCart from "./utils/getCart.js";
import { AMOUNT } from "./constants/settings.js";

createHtml();

function createHtml() {
    const itemContainer = document.querySelector(".item-container");

    const cart = getCart();

    itemContainer.innerHTML = "";

    for (let i = 1; i <= AMOUNT; i++) {
        let cssClass = "fa-shopping-cart";

        // check through cart array
        // does the item id exist in the cart array
        const cartItem = cart.find(function (item) {
            return i === parseInt(item.id);
        });

        // if it is in the array, change the style of the i element
        if (cartItem) {
            cssClass = "fa-cart-plus";
        }

        itemContainer.innerHTML += `<div class="item">
                                        <i class="fa ${cssClass}" data-id="${i}"></i>
                                        ${i}
                                    </div>`;
    }

    const cartButtons = document.querySelectorAll(".item i");

    cartButtons.forEach((button) => {
        button.addEventListener("click", handleCartClick);
    });
}
