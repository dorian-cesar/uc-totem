// Función para cambiar el color del left-panel2
function changePanelColor(color) {
    const leftPanel = document.querySelector('.left-panel2');
    leftPanel.style.backgroundColor = color;
}

// Asignar eventos a los botones
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
