// Variable global para almacenar el color seleccionado
let selectedColor = null;

// Función para manejar el clic en los botones de view1
function handleButtonClick(button) {
    // Obtener el color de fondo del botón presionado
    const computedStyle = window.getComputedStyle(button);
    selectedColor = computedStyle.backgroundColor;

    // Cambiar a view2 automáticamente
    toggleView();
}

// Función para cambiar entre vistas
// Función para manejar el clic en los botones de view1
function handleButtonClick(button) {
    // Buscar el dato asociado al botón presionado
    const selectedButton = buttonData.find(item => item.id === button.id);

    if (selectedButton) {
        // Guardar la imagen y el texto seleccionados
        const { image, text } = selectedButton;

        // Cambiar a view2 automáticamente
        toggleView(image, text);
    }
}

// Función para cambiar entre vistas
function toggleView(imageSrc, text) {
    const view1 = document.querySelector('.view1');
    const view2 = document.querySelector('.view2');
    const leftPanel2 = document.getElementById('left-panel2');

    if (view1.classList.contains('active')) {
        // Cambiar a view2
        view1.classList.remove('active');
        view2.classList.add('active');

        // Mostrar la imagen y el texto en el left-panel2
        displayImageAndText(leftPanel2, imageSrc, text);
    } else {
        // Cambiar a view1
        view2.classList.remove('active');
        view1.classList.add('active');

        // Limpiar el contenido del left-panel2
        leftPanel2.innerHTML = '';
    }
}

// Función para mostrar la imagen y el texto en el left-panel2
function displayImageAndText(panel, imageSrc) {
    // Limpiar el contenido previo
    panel.innerHTML = '';

    // Crear un elemento <img> para la imagen
    const img = document.createElement('img');
    img.src = imageSrc;
   
    img.classList.add('dynamic-image'); // Clase para estilizar la imagen

    // Agregar la imagen y el texto al panel
    panel.appendChild(img);
    
}



/* --------------------- View 2 ------------------------------------------------ */
// Función para cambiar el color del left-panel2
function changePanelColor(color) {
    const leftPanel = document.querySelector('.left-panel2');
    leftPanel.style.backgroundColor = color;
}
document.getElementById('red-button2').addEventListener('click', () => {
    changePanelColor('#d32f2f'); // Color rojo
});

document.getElementById('celeste-button2').addEventListener('click', () => {
    changePanelColor('#3e8ae0'); // Color celeste
});

document.getElementById('green-button2').addEventListener('click', () => {
    changePanelColor('#327c32'); // Color verde
});

document.getElementById('blue-button2').addEventListener('click', () => {
    changePanelColor('#133888'); // Color azul
});

document.getElementById('purple-button2').addEventListener('click', () => {
    changePanelColor('#ae51c5'); // Color morado
});

document.getElementById('yellow-button2').addEventListener('click', () => {
    changePanelColor('#ffcd28'); // Color amarillo
});

document.getElementById('teal-button2').addEventListener('click', () => {
    changePanelColor('#12ebce'); // Color teal
});

// Array con las imágenes y textos asociados a cada botón
const buttonData = [
    { id: 'red-button1', image: 'img/CAJA_R.png'},
    { id: 'celeste-button1', image: 'img/CAJA_C.png'},
    { id: 'purple-button1', image: 'img/CAJA_P.png'},
    { id: 'green-button1', image: 'img/CAJA_G.png'},
    { id: 'blue-button1', image: 'img/CAJA_B.png'},
    { id: 'yellow-button1', image: 'img/CAJA_Y.png'},
    { id: 'teal-button1', image: 'img/CAJA_T.png'},
    { id: 'brown-button1', image: 'img/CAJA_BR.png'},
    { id: 'gray-button1', image: 'img/CAJA_GR.png'}
];
