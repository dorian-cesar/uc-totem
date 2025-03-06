// Variable global para el color activo
let activeColor = null;


// Función para manejar el clic en los botones de view1
function handleButtonClick(button) {
    // Buscar el dato asociado al botón presionado
    const selectedButton = buttonData.find(item => item.id === button.id);

    if (selectedButton) {
        // Guardar la imagen 
        const { image } = selectedButton;

        // Cambiar a view2 automáticamente
        toggleView(image);
    }
}

// Función para cambiar entre vistas
function toggleView(imageSrc) {
    const view1 = document.querySelector('.view1');
    const view2 = document.querySelector('.view2');
    const leftPanel2 = document.getElementById('left-panel2');

    if (view1.classList.contains('active')) {
        // Cambiar a view2
        view1.classList.remove('active');
        view2.classList.add('active');

        // Mostrar la imagen en el left-panel2
        displayImage(leftPanel2, imageSrc);
    } else {
        // Cambiar a view1
        view2.classList.remove('active');
        view1.classList.add('active');

        // Limpiar el contenido del left-panel2
        leftPanel2.innerHTML = '';
    }

    // Asegurarse de que el botón correcto se active al hacer el cambio
    activateCorrectButton();
}

// Función para mostrar solo la imagen en left-panel2
function displayImage(panel, imageSrc) {
    // Limpiar el contenido previo
    panel.innerHTML = '';

    // Crear un elemento <img> para la imagen
    const img = document.createElement('img');
    img.src = imageSrc;
    img.classList.add('dynamic-image'); // Clase para estilizar la imagen

    // Agregar la imagen
    panel.appendChild(img);
}

// --------------------- View 2 ------------------------------------------------
// Función para cambiar el color del left-panel2
function changePanelColor(color) {
    const leftPanel = document.querySelector('.left-panel2');
    const grid = document.querySelector('.right-panel2');

    // Cambiar el color de fondo del left-panel2
    leftPanel.style.backgroundColor = color;

    // Desactivar el color previo en la grilla si existe
    if (activeColor) {
        const previousButton = document.getElementById(activeColor + '-button2');
        if (previousButton) {
            previousButton.classList.remove('inactive');  // Reactivar el botón previo
            // Mover el botón al final de la grilla
            moveButtonToEnd(previousButton);
        }
    }

    // Activar el color seleccionado en la grilla (ocultar el botón correspondiente)
    const currentButton = document.getElementById(color + '-button2');
    if (currentButton) {
        currentButton.classList.add('inactive');  // Desactivar el botón
        // Reubicar el último botón al lugar del botón desactivado
        moveLastButtonToPosition(currentButton);
    }

    // Guardar el color actual como activo
    activeColor = color;
}

// Función para mover el último botón al lugar del botón desactivado
function moveLastButtonToPosition(buttonToHide) {
    const grid = document.querySelector('.right-panel2');
    const allButtons = Array.from(grid.children);

    // Eliminar el botón que se debe ocultar
    grid.removeChild(buttonToHide);

    // Obtener el último botón de la grilla
    const lastButton = allButtons[allButtons.length - 1];

    // Insertar el último botón en la posición del botón desactivado
    grid.insertBefore(lastButton, buttonToHide);

    // Asegurarse de que el último botón quede en la última posición
    grid.appendChild(lastButton);
}

// Función para mover un botón al final de la grilla
function moveButtonToEnd(button) {
    const grid = document.querySelector('.right-panel2');
    grid.appendChild(button);  // Mueve el botón al final
}

// -------------------- Event Listeners --------------------
// Event listeners para los botones de cambio de color en left-panel2
document.getElementById('red-button2').addEventListener('click', () => {
    changePanelColor('red');  // Cambiar a color rojo
});
document.getElementById('celeste-button2').addEventListener('click', () => {
    changePanelColor('celeste');  // Cambiar a color celeste
});
document.getElementById('green-button2').addEventListener('click', () => {
    changePanelColor('green');  // Cambiar a color verde
});
document.getElementById('blue-button2').addEventListener('click', () => {
    changePanelColor('blue');  // Cambiar a color azul
});
document.getElementById('purple-button2').addEventListener('click', () => {
    changePanelColor('purple');  // Cambiar a color morado
});
document.getElementById('yellow-button2').addEventListener('click', () => {
    changePanelColor('yellow');  // Cambiar a color amarillo
});
document.getElementById('teal-button2').addEventListener('click', () => {
    changePanelColor('teal');  // Cambiar a color teal
});

// Función para asegurarse de que la grilla de right-panel2 se acomode automáticamente desde el inicio
function resetRightPanelButtons() {
    const grid = document.querySelector('.right-panel2');
    const allButtons = Array.from(grid.children);

    // Primero asegurarse que todos los botones estén activos al inicio
    allButtons.forEach(button => {
        button.classList.remove('inactive');
    });
}

// Llamar a resetRightPanelButtons para garantizar que todos los botones se inicien correctamente
resetRightPanelButtons();

// --------------------- View 1 ------------------------------------------------
// Array con las imágenes asociadas a los botones de view1
const buttonData = [
    { id: 'red-button1', image: 'img/CAJA_R.png' },
    { id: 'celeste-button1', image: 'img/CAJA_INFO_C.png' },
    { id: 'purple-button1', image: 'img/CAJA_CALENDAR.png' },
    { id: 'green-button1', image: 'img/CAJA_CONST.png' },
    { id: 'blue-button1', image: 'img/CAJA_OTRA.png' },
    { id: 'yellow-button1', image: 'img/CAJA_EM.png' },
    { id: 'teal-button1', image: 'img/CAJA_PRP.png' },
    { id: 'brown-button1', image: 'img/CAJA_SIS_PRC.png' },
    { id: 'gray-button1', image: 'img/CAJA_GR.png' }
];

// Mapeo de botones de view2 a los de view1
const buttonMapping = {
    'red-button2': 'red-button1',
    'celeste-button2': 'celeste-button1',
    'purple-button2': 'purple-button1',
    'green-button2': 'green-button1',
    'blue-button2': 'blue-button1',
    'yellow-button2': 'yellow-button1',
    'teal-button2': 'teal-button1',
    'brown-button2': 'brown-button1'
};

// Función para cambiar la imagen en left-panel2
function updateLeftPanelImage(buttonId) {
    const associatedButtonId = buttonMapping[buttonId]; // Obtener el ID del botón de view1
    const buttonDataEntry = buttonData.find(item => item.id === associatedButtonId); // Buscar imagen asociada

    if (buttonDataEntry) {
        const leftPanel = document.getElementById('left-panel2');
        leftPanel.innerHTML = ''; // Limpiar contenido previo

        // Crear y agregar la nueva imagen
        const img = document.createElement('img');
        img.src = buttonDataEntry.image;
        img.classList.add('dynamic-image');

        leftPanel.appendChild(img);
    }
}

// Agregar event listeners a los botones de view2
document.querySelectorAll('.right-panel2 button').forEach(button => {
    button.addEventListener('click', () => {
        updateLeftPanelImage(button.id);
    });
});

// Activar el botón correcto según la vista
function activateCorrectButton() {
    const activeButton = document.querySelector('.view2.active button');
    if (activeButton) {
        activeButton.classList.add('inactive'); // Activar el botón correcto
    }
}
