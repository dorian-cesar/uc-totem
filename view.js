// Definimos las posiciones de cada botón en ambas vistas
const positions = {
    'red-button1': { view1: { top: '1090px', left: '10px', width: '500px', height: '290px' }, view2: { top: '100px', left: '1230px', width: '241px', height: '140px' } },
    'celeste-button1': { view1: { top: '340px', left: '530px', width: '500px', height: '290px' }, view2: { top: '100px', left: '1505px', width: '241px', height: '140px' } },
    'green-button1': { view1: { top: '650px', left: '273px', width: '500px', height: '265px' }, view2: { top: '270px', left: '1230px', width: '241px', height: '140px' } },
    'blue-button1': { view1: { top: '650px', left: '790px', width: '500px', height: '265px' }, view2: { top: '440px', left: '1230px', width: '241px', height: '140px' } },
    'purple-button1': { view1: { top: '650px', left: '10px', width: '240px', height: '265px' }, view2: { top: '270px', left: '1505px', width: '241px', height: '140px' } },
    'yellow-button1': { view1: { top: '160px', left: '1050px', width: '240px', height: '330px' }, view2: { top: '440px', left: '1505px', width: '241px', height: '140px' } },
    'teal-button1': { view1: { top: '160px', left: '1315px', width: '240px', height: '330px' }, view2: { top: '610px', left: '1505px', width: '241px', height: '140px' } },
    'brown-button1': { view1: { top: '510px', left: '1050px', width: '505px', height: '290px' }, view2: { top: '790px', left: '1505px', width: '241px', height: '140px' } },
    'gray-button1': { view1: { top: '815px', left: '1050px', width: '505px', height: '100px' }, view2: { top: '610px', left: '1230px', width: '241px', height: '320px' } },
};

const buttonData = [
    { id: 'red-button1', image: 'img/CAJA_R.png' },
    { id: 'celeste-button1', image: 'img/CAJA_INFO_C.png' },
    { id: 'purple-button1', image: 'img/CAJA_CALENDAR.png' },
    { id: 'green-button1', image: 'img/CAJCA_CONST.png' },
    { id: 'blue-button1', image: 'img/CAJA_OTRA.png' },
    { id: 'yellow-button1', image: 'img/CAJA_EM.png' },
    { id: 'teal-button1', image: 'img/CAJA_PRP.png' },
    { id: 'brown-button1', image: 'img/CAJA_SIS_PRC.png' }
];

let selectedButton = null;
let isFirstClick = true;

// Función para manejar el clic en el botón "Volver"
function handleVolverClick() {
    const leftPanel2 = document.querySelector('.left-panel2');
    const rightPanel = document.querySelector('.right-panel');
    const volverButton = document.getElementById('volver-button');

    // Restaurar los botones a su posición original (View1)
    document.querySelectorAll('button').forEach(button => {
        if (positions[button.id]) {
            const position = positions[button.id].view1;
            button.style.transition = 'all 0.5s ease-in-out';
            button.style.position = 'absolute';
            button.style.top = position.top;
            button.style.left = position.left;
            button.style.width = position.width;
            button.style.height = position.height;
            button.style.display = 'block'; // Asegurarse de que los botones sean visibles

            // Eliminar las clases que ocultan la descripción y reducen el tamaño del título y el logo
            button.classList.remove('hide-description', 'shrink-title', 'shrink-logo');
        }
    });

    // Limpiar el right-panel
    rightPanel.innerHTML = '';

    // Limpiar el contenido del leftPanel2
    leftPanel2.innerHTML = '';

    // Ocultar el botón "Volver"
    volverButton.style.display = 'none';

    // Restaurar el estado inicial
    selectedButton = null;
    isFirstClick = true;
}

// Función para mover todos los botones al View2
function moveAllButtonsToView2() {
    document.querySelectorAll('button').forEach(button => {
        if (positions[button.id]) {
            const position = positions[button.id].view2;
            button.style.transition = 'all 0.5s ease-in-out';
            button.style.top = position.top;
            button.style.left = position.left;
            button.style.width = position.width;
            button.style.height = position.height;

            // Aplicar clases para ocultar la descripción y reducir el tamaño del título y el logo
            button.classList.add('hide-description', 'shrink-title', 'shrink-logo');
        }
    });
}

// Función para reorganizar los botones en el right-panel
function reorganizeRightPanel() {
    const rightPanel = document.querySelector('.right-panel');
    const buttons = Array.from(rightPanel.querySelectorAll('button'));

    // Dividir los botones en dos columnas
    const column1 = buttons.filter((_, index) => index % 2 === 0); // Primera columna
    const column2 = buttons.filter((_, index) => index % 2 !== 0); // Segunda columna

    // Reorganizar la primera columna
    column1.forEach((button, index) => {
        const position = positions[button.id].view2;
        button.style.transition = 'all 0.5s ease-in-out';
        button.style.top = `${index * 160}px`; // Espaciado vertical entre botones
        button.style.left = '1230px'; // Posición fija para la primera columna
        button.style.width = position.width;
        button.style.height = position.height;
    });

    // Reorganizar la segunda columna
    column2.forEach((button, index) => {
        const position = positions[button.id].view2;
        button.style.transition = 'all 0.5s ease-in-out';
        button.style.top = `${index * 160}px`; // Espaciado vertical entre botones
        button.style.left = '1505px'; // Posición fija para la segunda columna
        button.style.width = position.width;
        button.style.height = position.height;
    });
}

// Función para manejar el clic en cualquier botón
function handleButtonClick(button) {
    const leftPanel2 = document.querySelector('.left-panel2');
    const rightPanel = document.querySelector('.right-panel');
    const volverButton = document.getElementById('volver-button');

    if (isFirstClick) {
        moveAllButtonsToView2();
        isFirstClick = false;
    }

    if (selectedButton) {
        // Mover el botón seleccionado previamente al right-panel
        rightPanel.appendChild(selectedButton);
        selectedButton.style.display = 'block';
        reorganizeRightPanel(); // Reorganizar los botones en el right-panel
    }

    // Ocultar el botón seleccionado y moverlo al left-panel2
    leftPanel2.innerHTML = '';
    button.style.display = 'none';
    selectedButton = button;

    const buttonClone = button.cloneNode(true);
    buttonClone.style.width = '100%';
    buttonClone.style.height = '100%';
    leftPanel2.appendChild(buttonClone);
    showContent(button.id);

    // Mostrar el botón "Volver"
    volverButton.style.display = 'block';
}

// Función para mostrar el contenido en el leftPanel2
function showContent(buttonId) {
    const selectedButtonData = buttonData.find(item => item.id === buttonId);
    if (selectedButtonData) {
        const leftPanel2 = document.querySelector('.left-panel2');
        leftPanel2.innerHTML = '';
        const img = document.createElement('img');
        img.src = selectedButtonData.image;
        img.classList.add('dynamic-image');
        leftPanel2.appendChild(img);
    }
}

// Asignar eventos a los botones
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => handleButtonClick(button));
    button.addEventListener('touchstart', () => handleButtonClick(button), { passive: true });
});

// Inicializar la vista
document.addEventListener('DOMContentLoaded', () => {
    // No es necesario llamar a animateButtons() aquí, ya que se maneja en handleButtonClick
});