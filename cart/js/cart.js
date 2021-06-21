import getCart from "./utils/getCart.js";
import messages from "./constants/messages.js";

const cart = getCart();

const itemContainer = document.querySelector(".item-container");

if (cart.length === 0) {
    itemContainer.innerHTML = messages.emptyCart;
}

cart.forEach((item) => {
    itemContainer.innerHTML += `<div class="item">                                    
                                    <i class="fa fa-cart-plus"></i>
                                    ${item.id}
                                </div>`;
});
