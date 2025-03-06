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
function toggleView() {
    const view1 = document.querySelector('.view1');
    const view2 = document.querySelector('.view2');
    const leftPanel2 = document.getElementById('left-panel2');

    if (view1.classList.contains('active')) {
        // Cambiar a view2
        view1.classList.remove('active');
        view2.classList.add('active');

        // Aplicar el color seleccionado al left-panel2
        if (selectedColor) {
            leftPanel2.style.backgroundColor = selectedColor;
        }
    } else {
        // Cambiar a view1
        view2.classList.remove('active');
        view1.classList.add('active');
    }
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
