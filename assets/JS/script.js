// Parte 1: Imagen con borde
const image = document.getElementById('toggleBorderImage');
image.addEventListener('click', () => {
    if (image.style.border) {
        image.style.border = ''; // Quita el borde
    } else {
        image.style.border = '2px solid red'; // Agrega el borde
    }
});

// Parte 2: Calcular stickers
function calculateStickers() {
    const sticker1 = parseInt(document.getElementById('sticker1').value) || 0;
    const sticker2 = parseInt(document.getElementById('sticker2').value) || 0;
    const sticker3 = parseInt(document.getElementById('sticker3').value) || 0;
    const total = sticker1 + sticker2 + sticker3;

    const result = document.getElementById('result');
    const inputs = document.querySelectorAll('.card input');

    if (total <= 10) {
        result.textContent = `Llevas ${total} stickers`;
        result.classList.remove('error');
        inputs.forEach(input => input.style.color = '');
    } else {
        result.textContent = 'Solo puedes llevar 10 en total';
        result.classList.add('error');
        inputs.forEach(input => input.style.color = 'red');
    }
}

// Parte 3: Verificar contraseña
function checkPassword() {
    const digit1 = document.getElementById('digit1').value;
    const digit2 = document.getElementById('digit2').value;
    const digit3 = document.getElementById('digit3').value;
    const password = digit1 + digit2 + digit3;

    const passwordResult = document.getElementById('passwordResult');
    if (password === '911') {
        passwordResult.textContent = 'Password 1 correcto';
        passwordResult.style.color = 'green';
    } else if (password === '714') {
        passwordResult.textContent = 'Password 2 correcto';
        passwordResult.style.color = 'green';
    } else {
        passwordResult.textContent = 'Password incorrecto, intente otra vez';
        passwordResult.style.color = 'red';
    }
}

// Parte 4: Destacar tarjeta seleccionada
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', (e) => {
        // Quita la selección de todas las tarjetas
        cards.forEach(c => c.classList.remove('card-selected'));

        // Agrega borde rojo a la tarjeta seleccionada
        card.classList.add('card-selected');

        // Evita que el evento se propague al contenedor principal
        e.stopPropagation();
    });
});

// Restablece las tarjetas al hacer clic fuera
document.addEventListener('click', () => {
    cards.forEach(card => card.classList.remove('card-selected'));
});
