document.addEventListener("DOMContentLoaded", function () {
    const orderButtons = document.querySelectorAll(".order-btn");
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const checkoutBtn = document.getElementById("checkout-btn");

    let total = 0;

    orderButtons.forEach(button => {
        button.addEventListener("click", function () {
            const item = this.parentElement;
            const itemName = item.querySelector("h3").textContent;
            const itemPrice = 10; // Replace with actual item price

            const cartItem = document.createElement("li");
            cartItem.innerHTML = `
                ${itemName} - $${itemPrice}
                <button class="remove-item">Remove</button>
            `;

            const removeButton = cartItem.querySelector(".remove-item");
            removeButton.addEventListener("click", function () {
                cartItems.removeChild(cartItem);
                total -= itemPrice;
                cartTotal.textContent = total;
            });

            cartItems.appendChild(cartItem);
            total += itemPrice;
            cartTotal.textContent = total;
        });
    });

    checkoutBtn.addEventListener("click", function () {
        alert(`Total amount: $${total}. Payment process coming soon.`);
    });
});
