const cartDetails = document.getElementById("cart-details");
const addToCartButtons = document.querySelectorAll(".add-to-cart");
const checkoutButton = document.getElementById("checkout");

// Inicializar el carrito de sessionStorage con datos de localStorage
function initializeCart() {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    sessionStorage.setItem("cart", JSON.stringify(savedCart));
    renderCart();
}

// Renderizar carrito
function renderCart() {
    const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
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
            <input type="number" min="1" value="${item.quantity}" data-index="${index}" class="quantity-input">
            <button onclick="removeItem(${index})">Eliminar</button>
        `;
        ul.appendChild(li);
    });

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const totalElement = document.createElement("p");
    totalElement.textContent = `Total a donar: $${total}`;
    cartDetails.appendChild(ul);
    cartDetails.appendChild(totalElement);

    // Agregar eventos a los campos de cantidad
    const quantityInputs = document.querySelectorAll(".quantity-input");
    quantityInputs.forEach((input) => {
        input.addEventListener("change", handleQuantityChange);
    });
}

// Manejar cambios en la cantidad
function handleQuantityChange(event) {
    const input = event.target;
    const index = parseInt(input.dataset.index);
    const newQuantity = parseInt(input.value);

    if (isNaN(newQuantity) || newQuantity < 1) {
        alert("La cantidad debe ser un número válido mayor o igual a 1.");
        renderCart(); // Restaurar la cantidad previa en el render
        return;
    }

    const cart = JSON.parse(sessionStorage.getItem("cart"));
    cart[index].quantity = newQuantity;
    sessionStorage.setItem("cart", JSON.stringify(cart));
    saveToLocalStorage(cart); // Sincronizar con localStorage
    renderCart();
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

    const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    const existingItem = cart.find((item) => item.name === name);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }

    sessionStorage.setItem("cart", JSON.stringify(cart));
    saveToLocalStorage(cart); // Guardar también en localStorage
    renderCart();
}

// Eliminar del carrito
function removeItem(index) {
    const cart = JSON.parse(sessionStorage.getItem("cart"));
    cart.splice(index, 1);
    sessionStorage.setItem("cart", JSON.stringify(cart));
    saveToLocalStorage(cart); // Guardar también en localStorage
    renderCart();
}

// Guardar el carrito en localStorage
function saveToLocalStorage(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Realizar pago
function checkout() {
    const cart = JSON.parse(sessionStorage.getItem("cart"));
    if (cart.length === 0) {
        alert("El carrito está vacío.");
        return;
    }

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    alert(`Gracias por tu donación de $${total}.`);
    sessionStorage.removeItem("cart"); // Limpiar carrito de sessionStorage
    localStorage.removeItem("cart"); // Limpiar carrito de localStorage (opcional)
    renderCart();
}

// Inicializar eventos
addToCartButtons.forEach((button) => button.addEventListener("click", addToCart));
checkoutButton.addEventListener("click", checkout);
document.addEventListener("DOMContentLoaded", initializeCart);
