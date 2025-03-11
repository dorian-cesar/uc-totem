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

        // Ocultar el botón .gray-button con una transición
        hideGrayButton();
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
    
});

function toggleView() {
    const view1 = document.querySelector('.view1');
    const view2 = document.querySelector('.view2');
    const leftPanel2 = document.getElementById('left-panel2');

    // Limpiar el contenido del leftPanel2
    if (leftPanel2) {
        leftPanel2.innerHTML = '';
    } else {
        console.error('El elemento left-panel2 no existe en el DOM.');
        return;
    }

    // Verificar si estamos regresando a view1
    if (view1.classList.contains('active')) {
        showGrayButton();
        // Devolver todos los botones a sus posiciones originales (CSS)
        document.querySelectorAll('button').forEach(button => {
            // Aplicar las posiciones originales basadas en el CSS
            if (button.classList.contains('red-button')) {
                button.style.position = 'absolute';
                button.style.top = '340px';
                button.style.left = '200px';
                button.style.width = '500px';
                button.style.height = '290px';
            } else if (button.classList.contains('celeste-button')) {
                button.style.position = 'absolute';
                button.style.top = '340px';
                button.style.left = '720px';
                button.style.width = '500px';
                button.style.height = '290px';
            } else if (button.classList.contains('purple-button')) {
                button.style.position = 'absolute';
                button.style.top = '650px';
                button.style.left = '200px';
                button.style.width = '240px';
                button.style.height = '265px';
            } else if (button.classList.contains('green-button')) {
                button.style.position = 'absolute';
                button.style.top = '650px';
                button.style.left = '463px';
                button.style.width = '500px';
                button.style.height = '265px';
            } else if (button.classList.contains('blue-button')) {
                button.style.position = 'absolute';
                button.style.top = '650px';
                button.style.left = '980px';
                button.style.width = '240px';
                button.style.height = '265px';
            } else if (button.classList.contains('yellow-button')) {
                button.style.position = 'absolute';
                button.style.top = '160px';
                button.style.left = '1240px';
                button.style.width = '240px';
                button.style.height = '330px';
            } else if (button.classList.contains('teal-button')) {
                button.style.position = 'absolute';
                button.style.top = '160px';
                button.style.left = '1505px';
                button.style.width = '240px';
                button.style.height = '330px';
            } else if (button.classList.contains('brown-button')) {
                button.style.position = 'absolute';
                button.style.top = '510px';
                button.style.left = '1240px';
                button.style.width = '505px';
                button.style.height = '290px';
            }

            // Asegurarse de que los botones sean visibles
            button.style.display = 'block';

            // Eliminar estilos residuales
            button.style.transform = ''; // Eliminar transformaciones
            button.style.zIndex = ''; // Restablecer z-index
            button.style.opacity = ''; // Restablecer opacidad

            // Eliminar clases adicionales
            button.classList.remove('hide-description', 'shrink-title', 'shrink-logo');
        });

        // Restaurar el estado inicial
        selectedButton = null;
        isFirstClick = true;
    } else {
        // Si estamos en view2, mover los botones a sus posiciones en view2
        moveAllButtonsToView2();
    }
}

function hideGrayButton() {
    const grayButton = document.querySelector('.gray-button');

    if (grayButton) {
        // Aplicar una transición suave solo para la opacidad
        grayButton.style.transition = 'opacity 0.5s ease-in-out';
        grayButton.style.opacity = '0'; // Desvanecer el botón

        // Ocultar el botón completamente después de la transición
        setTimeout(() => {
            grayButton.style.display = 'none';
        }, 500); // Tiempo igual a la duración de la transición
    } else {
        console.error('El botón .gray-button no existe en el DOM.');
    }
}

function showGrayButton() {
    const grayButton = document.querySelector('.gray-button');

    if (grayButton) {
        // Asegurarse de que el botón esté visible pero completamente transparente
        grayButton.style.display = 'block';
        grayButton.style.opacity = '0';

        // Forzar un reflow para reiniciar la animación
        grayButton.offsetWidth; // Esto fuerza un "reflow" en el navegador

        // Aplicar una transición suave para la opacidad
        grayButton.style.transition = 'opacity 0.5s ease-in-out';
        grayButton.style.opacity = '1'; // Hacer el botón completamente visible
    } else {
        console.error('El botón .gray-button no existe en el DOM.');
    }
}