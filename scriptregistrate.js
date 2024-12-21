document.addEventListener("DOMContentLoaded", () => {
    console.log("El script se ha cargado correctamente.");

    // Form de validación
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", (event) => {
            let allFieldsComplete = true;
            const inputs = form.querySelectorAll("input, textarea, select");

            inputs.forEach((input) => {
                if (!input.value.trim()) {
                    allFieldsComplete = false;
                    console.log(`El campo ${input.name || input.id} está incompleto.`);
                }
            });

            if (allFieldsComplete) {
                console.log("Todos los campos están completos.");
            } else {
                console.log("Por favor, complete todos los campos.");
                event.preventDefault();
            }
        });
    } else {
        console.error("Formulario no encontrado. Revisa el HTML.");
    }

    // Generar lista de productos dinámicamente
    const productos = [
        { id: 1, nombre: "Pellets", precio: 6000 },
        { id: 2, nombre: "Frutas Secas", precio: 8000 },
        { id: 3, nombre: "Heno", precio: 15000 },
        { id: 4, nombre: "Madera", precio: 20000 },
    ];

    console.log("Lista de productos disponibles:");

    // Ciclo para mostrar productos en la consola
    productos.forEach((producto) => {
        console.log(`ID: ${producto.id}, Nombre: ${producto.nombre}, Precio: ${producto.precio} pesos`);
    });
});
