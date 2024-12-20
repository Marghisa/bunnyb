function toggleVisibility(cardToHide, cardToShow) {
    const cardOne = document.querySelector('.one');
    const cardThree = document.querySelector('.three');
    const imageTwo = document.querySelector('.two');
    const imageFour = document.querySelector('.four');

    // Si se hace clic en la tarjeta "one" (se espera mostrar la imagen 'two' y ocultar 'four')
    if (cardToShow === '.two') {
        // Si la imagen 'two' ya está visible, vuelve a su posición inicial
        if (imageTwo.classList.contains('show')) {
            imageTwo.classList.remove('show');
            cardThree.classList.remove('show');  // Ocultamos la card tres
        } else {
            imageTwo.classList.add('show');
            cardThree.classList.add('show');  // Mostramos la card tres
        }
    }

    // Si se hace clic en la tarjeta "three" (se espera mostrar la imagen 'four' y ocultar 'two')
    if (cardToShow === '.four') {
        // Si la imagen 'four' ya está visible, vuelve a su posición inicial
        if (imageFour.classList.contains('show')) {
            imageFour.classList.remove('show');
            cardOne.classList.remove('show');  // Ocultamos la card one
        } else {
            imageFour.classList.add('show');
            cardOne.classList.add('show');  // Mostramos la card one
        }
    }
}
