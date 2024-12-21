const cartDetails = document.getElementById("cart-details");
const addToCartButtons = document.querySelectorAll(".add-to-cart");
const checkoutButton = document.getElementById("checkout");

// Renderizar carrito
function renderCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cartDetails.innerHTML = "";

    if (cart.length === 0) {
        cartDetails.innerHTML = "<p>El carrito está vacío.</p>";
        return;
    }

    const ul = document.createElement("ul");
    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${item.name} - $${item.price}
            <input type="number" min="1" value="${item.quantity}" onchange="updateQuantity(${index}, this.value)">
            <button onclick="removeItem(${index})">Eliminar</button>
        `;
        ul.appendChild(li);
    });

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const totalElement = document.createElement("p");
    totalElement.textContent = `Total a donar: $${total}`;
    cartDetails.appendChild(ul);
    cartDetails.appendChild(totalElement);
}

// Añadir al carrito
function addToCart(event) {
    const button = event.target;
    const card = button.closest(".card");
    const name = button.dataset.name;
    const donationInput = card.querySelector(".donation-amount");
    const price = parseFloat(donationInput.value);

    if (isNaN(price) || price <= 0) {
        alert("Por favor, ingrese un monto válido.");
        return;
    }

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find((item) => item.name === name);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

// Actualizar cantidad
function updateQuantity(index, value) {
    const cart = JSON.parse(localStorage.getItem("cart"));
    cart[index].quantity = parseInt(value);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

// Eliminar del carrito
function removeItem(index) {
    const cart = JSON.parse(localStorage.getItem("cart"));
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

// Realizar pago
function checkout() {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart.length === 0) {
        alert("El carrito está vacío.");
        return;
    }

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    alert(`Gracias por tu donación de $${total}.`);
    localStorage.removeItem("cart");
    renderCart();
}

// Inicializar eventos
addToCartButtons.forEach((button) => button.addEventListener("click", addToCart));
checkoutButton.addEventListener("click", checkout);
document.addEventListener("DOMContentLoaded", renderCart);
