// Array de productos con sus descripciones e imágenes
const productos = [
    { 
        nombre: 'Conejo Toy', 
        descripcionCorta: 'De orejas cortas, con forma redondeada y de tonalidades grises, negras, marrones o blancas, es uno de los conejos más comunes en los hogares por su pequeño tamaño.', 
        descripcionCompleta: 'De orejas cortas, con forma redondeada y de tonalidades grises, negras, marrones o blancas. De hecho, no suelen pesar más de un kilo y medio. En cuanto a su personalidad, podemos decir que es un conejo discreto y afable, algo miedoso y nervioso, un tanto desconfiado y bastante independiente. Al principio deberás tener paciencia con él pero poco a poco se adaptará a su nuevo hogar y se volverá más receptivo. Al ser bastante ansioso, es importante ubicar al conejo enano o Toy en un espacio que llame a la calma, fuera de estímulos ruidosos.', 
        imagen: 'Toy2.png' 
    },
    { 
        nombre: 'Conejo Mini', 
        descripcionCorta: 'Destaca por sus orejas caídas y su impresionante belleza.', 
        descripcionCompleta: 'Destaca por sus orejas caídas y su impresionante belleza. Es uno de los tipos de conejos en los que encontramos distintas variaciones como el belier holandés, el francés, el inglés, el cabeza de león o el angora.Su pelaje es sedoso y monocromático. Son musculosos y abultados y pesan entre 3 y 5 kilos. Mientras que, de carácter, son bastante dóciles y tranquilos, aunque como la gran mayoría, también asustadizos.Los conejos belier comen principalmente heno pero también fruta y verdura y es recomendable no bañarles para respetar su protección natural. Si es necesario, se utilizarán toallitas húmedas para limpiarles (como en la mayoría de conejos)..', 
        imagen: 'Mini.png'  
    },
    { 
        nombre: 'Conejo Hot', 
        descripcionCorta: 'El conejo hot se caracteriza por su tonalidad blanca, pudiendo tener una pequeña marca oscura alrededor de los ojos.', 
        descripcionCompleta: 'El conejo hot se caracteriza por su tonalidad blanca, pudiendo tener una pequeña marca oscura alrededor de los ojos. Su cuerpo es fuerte, compacto y redondeado y es una de las razas de conejos más longevas. Tanto es así que pueden vivir hasta los 16 años. De carácter, es también cariñoso, tranquilo, un poco miedoso y muy glotón. Por ello, es importante controlar lo que come para evitar que caiga en sobrepeso. El conejo blanco de Hotot es bastante inteligente y muestra mucha predisposición a la hora de aprender. Realmente sorprende su obediencia y su capacidad para atender a las enseñanzas, lo cual es muy favorable para enseñarle algunos trucos básicos, como ciertas órdenes o pautas de higiene', 
        imagen: 'Hot.jpg' 
    },
    { 
        nombre: 'Conejo Rex', 
        descripcionCorta: 'El conejo Rex puede ser blanco, negro, marrón, con o sin manchas y con un suave pelaje', 
        descripcionCompleta: 'El conejo Rex puede ser blanco, negro, marrón, con o sin manchas y con un suave pelaje en cualquier caso. Su tamaño puede ser estándar (hasta los 5 kilos) o más mini (entre 1 y 2 kilos).Si hablamos de su carácter, destaca por ser un animal muy sociable, agradable, inteligente y muy activo.Requiere una dieta alta en fibra, con el heno como alimento principal, y un pienso rico en proteína para mantener su atractivo pelaje.Dadas las características del pelaje de estos conejos, el cual es bastante delicado, no hemos de cepillarlos muy frecuentemente, siendo como máximo el cepillado una vez por semana, una buena opción par mantener aseado a nuestro conejo es utilizar un paño húmedo y pasarlo por su cuerpo como si estuviéramos acariciándolo', 
        imagen: 'Rex.jpg' 
    },
    { 
        nombre: 'Gigante de Flandes', 
        descripcionCorta: 'Como su propio nombre indica, este conejo destaca por sus grandes dimensiones.', 
        descripcionCompleta: 'Como su propio nombre indica, este conejo destaca por sus grandes dimensiones. Y es que su peso oscila entre los 6 y los 10 kilos. No obstante, hay algunas razas que llegan a los 18 kilos. Por ello, el Gigante de Flandes se le conoce por ser el conejo más grande del mundo. De pelaje corto y denso, puedes encontrarlos en distintos tontos: negros, azules, marrones, blancos, grises. Son tranquilos y menos activos a otras razas y, también, como no, bastante asustadizos. Su dieta se basa en la ingesta de heno principalmente, combinada con pienso, frutas y vegetales. Entre una de sus necesidades básicas está el hecho de abastecerle con una jaula de gran tamaño, teniendo en cuenta sus proporciones.', 
        imagen: 'GigantMoon.png' 
    },
    { 
        nombre: 'Cabeza de León', 
        descripcionCorta: 'La característica del conejo de león más notable es su melena.', 
        descripcionCompleta: 'La característica del conejo de león más notable es su melena.El cuerpo del conejo cabeza de león es compacto y corto, de formas redondeadas y pecho ancho. Lo que más resalta, aparte de su melena, son sus largas orejas, que pueden medir unos 7 centímetros. La cola es recta y la recubre una buena capa de pelo. Su cabeza es ovalada y relativamente grade, con un hocico bastante largo y más ancho en los machos. Tiene unos ojos redondos que sobresalen ligeramente y son muy brillantes. No obstante,  El pelaje es el que lo ha hecho famoso y constituye la insignia de la raza lionhead.', 
        imagen: 'Cabeza.png' 
    },
    { 
        nombre: 'Angora', 
        descripcionCorta: 'El conejo de Angora es una raza de conejo de tamaño mediano, con un pelaje largo y suave que le da su nombre.', 
        descripcionCompleta: 'El conejo de Angora es una raza de conejo de tamaño mediano, con un pelaje largo y suave que le da su nombre.Conejo conocido por su pelaje espeso y voluminoso. Su pelaje es hueco y puede absorber hasta el 60% de su peso en humedad, por lo que se usa para fabricar lana de Angora.Es muy dócil y equilibrado. Requiere cuidados frecuentes para mantener su pelaje en condiciones óptimas, pero es muy cariñoso con su dueño.Al ser introducidos en diferentes países, los conejos de Angora "originales" empiezan a cruzarse de forma selectiva con otros conejos típicos de cada país o región. Y es de este modo que van surgiendo las cuatro variedades de conejo angora reconocidas en la actualidad por la Asociación Americana de Cría de Conejos (ARBA). Son las siguientes: Conejo de Angora inglés,Conejo de Angora francés,Conejo de Angora gigante y Conejo de Angora satén', 
        imagen: 'Angora.png' 
    }
];

// Función para mostrar la descripción corta inicialmente
function mostrarProductos() {
    const productosContainer = document.getElementById('productosContainer');
    
    productos.forEach(producto => {
        // Crear div para cada producto
        const divProducto = document.createElement('div');
        divProducto.classList.add('producto');
        
        // Añadir contenido HTML al div
        divProducto.innerHTML = `
            <h4>${producto.nombre}</h4>
            <p>${producto.descripcionCorta}</p>
            <img src="${producto.imagen}" alt="${producto.nombre}" class="zoom" onclick="mostrarDescripcion('${producto.nombre}')">
        `;
        
        // Añadir el producto al contenedor
        productosContainer.appendChild(divProducto);
    });
}

// Función para mostrar la descripción completa de un producto al hacer clic
function mostrarDescripcion(nombreProducto) {
    const descripcionDiv = document.getElementById('descripcion');
    const overlay = document.getElementById('overlay');
    
    // Buscar el producto con el nombre correspondiente
    const producto = productos.find(prod => prod.nombre === nombreProducto);
    
    if (producto) {
        descripcionDiv.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcionCompleta}</p>
            <img src="${producto.imagen}" alt="${producto.nombre}" class="imagenDescripcion" />
        `;
    }

    // Mostrar el popup y el fondo oscuro
    descripcionDiv.style.display = 'block';
    overlay.style.display = 'block';
    
    // Ocultar los otros conejos
    const productosContainer = document.getElementById('productosContainer');
    productosContainer.style.display = 'none'; // Ocultamos los conejos
}

// Función para cerrar el popup y mostrar de nuevo los productos
function cerrarDescripcion() {
    const descripcionDiv = document.getElementById('descripcion');
    const overlay = document.getElementById('overlay');
    const productosContainer = document.getElementById('productosContainer');
    
    // Ocultar el popup y el fondo oscuro
    descripcionDiv.style.display = 'none';
    overlay.style.display = 'none';
    
    // Mostrar nuevamente los productos
    productosContainer.style.display = 'block';
}

// Llamar a la función para mostrar los productos cuando la página se carga
window.onload = mostrarProductos;
