# addchart

Create an array of cards (divs) in a for loop in index.html.

Each card should have a cart/shopping trolley icon with the loop variable's value added to a data attribute on it, e.g:

```html
<i data-id="1"></i>
```

Clicking the icon should add/remove the data attribute value to/from a `cart` key in localstorage.

In `cart.html`, retrieve the cart key value and create HTML for each item stored.

Once you go back to index.html the cart icon should indicate if it is already in the cart.
