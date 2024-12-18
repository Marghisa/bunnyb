<<<<<<< HEAD
function toggleVisibility(cardToHide, cardToShow) {
    const cardOne = document.querySelector('.one');
    const cardThree = document.querySelector('.three');
    const imageTwo = document.querySelector('.two');
    const imageFour = document.querySelector('.four');

    // Si se hace clic en la tarjeta "one"
    if (cardToShow === '.two') {
        // Si la card one ya se ha clickeado, vuelve a su posición inicial
        if (imageTwo.classList.contains('show')) {
            imageTwo.classList.remove('show');
            cardThree.classList.remove('show');
        } else {
            imageTwo.classList.add('show');
            cardThree.classList.add('show');
        }
    }

    // Si se hace clic en la tarjeta "three"
    if (cardToShow === '.four') {
        // Si la card three ya se ha clickeado, vuelve a su posición inicial
        if (imageFour.classList.contains('show')) {
            imageFour.classList.remove('show');
            cardOne.classList.remove('show');
        } else {
            imageFour.classList.add('show');
            cardOne.classList.add('show');
        }
    }
=======
function toggleVisibility(cardToHide, cardToShow) {
    const cardOne = document.querySelector('.one');
    const cardThree = document.querySelector('.three');
    const imageTwo = document.querySelector('.two');
    const imageFour = document.querySelector('.four');

    // Si se hace clic en la tarjeta "one"
    if (cardToShow === '.two') {
        // Si la card one ya se ha clickeado, vuelve a su posición inicial
        if (imageTwo.classList.contains('show')) {
            imageTwo.classList.remove('show');
            cardThree.classList.remove('show');
        } else {
            imageTwo.classList.add('show');
            cardThree.classList.add('show');
        }
    }

    // Si se hace clic en la tarjeta "three"
    if (cardToShow === '.four') {
        // Si la card three ya se ha clickeado, vuelve a su posición inicial
        if (imageFour.classList.contains('show')) {
            imageFour.classList.remove('show');
            cardOne.classList.remove('show');
        } else {
            imageFour.classList.add('show');
            cardOne.classList.add('show');
        }
    }
>>>>>>> 9d8877119175222f5975a9975799e8f47a0c147d
}