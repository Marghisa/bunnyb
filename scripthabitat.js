let contenedorpersonajes = document.getElementById("personajes");
let botonCargar = document.getElementById("cargarPersonajesBtn");
let personajes = [];  // Array para almacenar los personajes obtenidos de la API
let index = 0;  // Contador para llevar el control del personaje actual
let intervalId = null;  // Variable para almacenar el ID del intervalo (para poder detenerlo)

function cargarPersonajes() {
  // Si ya estamos mostrando los personajes, ocultamos todo y detenemos el intervalo
  if (intervalId) {
    clearInterval(intervalId);  // Detenemos el intervalo
    contenedorpersonajes.innerHTML = '';  // Limpiamos el contenedor
    index = 0;  // Reseteamos el índice
    intervalId = null;  // Reseteamos el intervalo
    return;  // Salimos de la función
  }

  // Si los personajes no han sido cargados previamente, los traemos de la API
  if (personajes.length === 0) {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((datos) => {
        personajes = datos.results;  // Almacenamos los personajes en el array
        mostrarPersonaje();  // Llamamos a la función para mostrar el primer personaje
      })
      .catch((error) => console.error("Error al cargar los datos:", error));
  } else {
    // Si los personajes ya están cargados, comenzamos a mostrarlos
    mostrarPersonaje();
  }
}

// Función para mostrar el siguiente personaje
function mostrarPersonaje() {
  // Limpiar el contenedor de personajes antes de mostrar el siguiente
  contenedorpersonajes.innerHTML = '';

  if (index < personajes.length) {
    const personaje = personajes[index];

    // Crear el contenedor del personaje
    const contenedorCreado = document.createElement('div');
    contenedorCreado.innerHTML = `
      <h4>${personaje.name}</h4>
      <img src="${personaje.image}" alt="${personaje.name}">
    `;

    // Añadir el contenedor al contenedor principal
    contenedorpersonajes.appendChild(contenedorCreado);

    // Incrementamos el contador para mostrar el siguiente personaje
    index++;

    // Continuar mostrando personajes cada 3 segundos
    intervalId = setTimeout(mostrarPersonaje, 3000);
  } else {
    console.log("Todos los personajes han sido mostrados.");
  }
}

// Añadir evento al botón para cargar personajes
botonCargar.addEventListener("click", cargarPersonajes);
