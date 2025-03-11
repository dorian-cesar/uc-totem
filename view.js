// Definimos las posiciones de cada botón en ambas vistas
const positions = {
    'red-button1': { 
        view1: { top: '340px', left: '200px', width: '500px', height: '290px' }, 
        view2: { top: '100px', left: '1230px', width: '241px', height: '140px' },
        view3: { top: '-10px', left: '-10px', width: '1019px', height: '585px' } // Nueva vista
    },
    'celeste-button1': { 
        view1: { top: '340px', left: '720px', width: '500px', height: '290px' }, 
        view2: { top: '100px', left: '1505px', width: '241px', height: '140px' },
        view3: { top: '-10px', left: '-10px', width: '1019px', height: '585px' } // Nueva vista
    },
    'green-button1': { 
        view1: { top: '650px', left: '463px', width: '500px', height: '265px' }, 
        view2: { top: '270px', left: '1230px', width: '241px', height: '140px' },
        view3: { top: '-10px', left: '-10px', width: '1019px', height: '585px' } // Nueva vista
    },
    'blue-button1': { 
        view1: { top: '650px', left: '980px', width: '240px', height: '265px' }, 
        view2: { top: '440px', left: '1230px', width: '241px', height: '140px' },
        view3: { top: '-10px', left: '-10px', width: '1019px', height: '585px' } // Nueva vista
    },
    'purple-button1': { 
        view1: { top: '650px', left: '200px', width: '240px', height: '265px' }, 
        view2: { top: '270px', left: '1505px', width: '241px', height: '140px' },
        view3: { top: '-10px', left: '-10px', width: '1019px', height: '585px' } // Nueva vista
    },
    'yellow-button1': { 
        view1: { top: '160px', left: '1240px', width: '240px', height: '330px' }, 
        view2: { top: '440px', left: '1505px', width: '241px', height: '140px' },
        view3: { top: '-10px', left: '-10px', width: '1019px', height: '585px' } // Nueva vista
    },
    'teal-button1': { 
        view1: { top: '160px', left: '1505px', width: '240px', height: '330px' }, 
        view2: { top: '610px', left: '1505px', width: '241px', height: '140px' },
        view3: { top: '-10px', left: '-10px', width: '1019px', height: '585px' } // Nueva vista
    },
    'brown-button1': { 
        view1: { top: '510px', left: '1240px', width: '505px', height: '290px' }, 
        view2: { top: '790px', left: '1505px', width: '241px', height: '140px' },
        view3: { top: '-10px', left: '-10px', width: '1019px', height: '585px' } // Nueva vista
    },
    'gray-content1': { 
        view1: { top: '725px', left: '1240px', width: '505px', height: '100px', image: 'img/Rectángulo 2.png' }, // Imagen original
        view2: { top: '520px', left: '1230px', width: '241px', height: '320px', image: 'img/IMG_0.png' }, // Nueva imagen para view2
    },
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

// Función para mover todos los botones a View2 y aplicar "shrink"
function moveAllButtonsToView2() {
    document.querySelectorAll('button, #gray-content1').forEach(element => {
        if (positions[element.id]) {
            const position = positions[element.id].view2;
            element.style.transition = 'all 0.5s ease-in-out';
            element.style.top = position.top;
            element.style.left = position.left;
            element.style.width = position.width;
            element.style.height = position.height;

            // Cambiar la imagen de gray-content1 si está definida
            if (element.id === 'gray-content1' && position.image) {
                const imgElement = element.querySelector('img'); // Buscar el elemento <img> dentro de gray-content1
                if (imgElement) {
                    imgElement.src = position.image; // Cambiar la imagen
                }
            }

            // Aplicar shrink solo a los botones, NO a gray-content1
            if (element.tagName === 'BUTTON' && element.id !== 'gray-content1' && element !== selectedButton) {
                element.classList.add('hide-description', 'shrink-title', 'shrink-logo');
            }
        }
    });

    // Mostrar el botón "Volver" cuando se cambia a view2
    const volverButton = document.getElementById('volver-button');
    volverButton.style.display = 'block';
}

// Función para manejar el clic en el botón "Volver"
function handleVolverClick() {
    const leftPanel2 = document.querySelector('.left-panel2');
    const rightPanel = document.querySelector('.right-panel');
    const volverButton = document.getElementById('volver-button');

    // Restaurar los botones y gray-content1 a su posición original (View1)
    document.querySelectorAll('button, #gray-content1').forEach(element => {
        if (positions[element.id]) {
            const position = positions[element.id].view1;
            element.style.transition = 'all 0.5s ease-in-out';
            element.style.top = position.top;
            element.style.left = position.left;
            element.style.width = position.width;
            element.style.height = position.height;
            element.style.display = 'block';

            // Restaurar la imagen original de gray-content1
            if (element.id === 'gray-content1' && position.image) {
                const imgElement = element.querySelector('img'); // Buscar el elemento <img> dentro de gray-content1
                if (imgElement) {
                    imgElement.src = position.image; // Restaurar la imagen original
                }
            }

            // Quitar shrink para restaurar los botones, excepto gray-content1
            if (element.tagName === 'BUTTON' && element.id !== 'gray-content1') {
                element.classList.remove('hide-description', 'shrink-title', 'shrink-logo', 'hide-button');
            }
        }
    });

    // Limpiar el right-panel, excepto gray-content1
    rightPanel.querySelectorAll('button').forEach(button => {
        if (button.id !== 'gray-content1') {
            rightPanel.removeChild(button);
        }
    });

    // Limpiar el contenido del leftPanel2
    leftPanel2.innerHTML = '';

    // Ocultar el botón "Volver"
    volverButton.style.display = 'none';

    // Restaurar el estado inicial
    selectedButton = null;
    isFirstClick = true;
}


// Función para reorganizar los botones en el right-panel, incluyendo "gray-content1"
function reorganizeRightPanel() {
    const rightPanel = document.querySelector('.right-panel');
    const buttons = Array.from(rightPanel.querySelectorAll('button:not([style*="display: none"])')); // Ignorar botones ocultos

    // Incluir "gray-content1" en la reorganización si no está en el right-panel
    const grayContent = document.getElementById("gray-content1");
    if (grayContent && !rightPanel.contains(grayContent)) {
        rightPanel.appendChild(grayContent);
    }

    // Ordenar los botones por su posición vertical actual (top)
    buttons.sort((a, b) => {
        const aTop = parseInt(a.style.top);
        const bTop = parseInt(b.style.top);
        return aTop - bTop;
    });

    // Reorganizar los botones en una sola columna, llenando el espacio vacío
    buttons.forEach((button, index) => {
        const position = positions[button.id].view2;
        button.style.transition = 'all 0.5s ease-in-out';
        button.style.top = `${index * 170}px`; // Espaciado vertical entre botones
        button.style.left = position.left; // Mantener la posición horizontal original
        button.style.width = position.width;
        button.style.height = position.height;
    });

    // Asegurar que gray-content también se reubique correctamente
    if (grayContent) {
        const grayPosition = positions["gray-content1"].view2;
        grayContent.style.transition = 'all 0.5s ease-in-out';
        grayContent.style.top = grayPosition.top;
        grayContent.style.left = grayPosition.left;
        grayContent.style.width = grayPosition.width;
        grayContent.style.height = grayPosition.height;
    }
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
        // Restaurar shrink a los botones en el right-panel
        selectedButton.classList.add('hide-description', 'shrink-title', 'shrink-logo');
        selectedButton.style.display = 'block'; // Mostrar el botón previamente seleccionado
        reorganizeRightPanel();
    }

    leftPanel2.innerHTML = '';
    button.style.display = 'none'; // Ocultar el botón seleccionado en view2
    selectedButton = button;

    // Remover shrink del botón seleccionado
    selectedButton.classList.remove('hide-description', 'shrink-title', 'shrink-logo');

    // Clonar el botón para mostrarlo en leftPanel2
    const buttonClone = button.cloneNode(true);
    buttonClone.style.width = '100%';
    buttonClone.style.height = '100%';
    leftPanel2.appendChild(buttonClone);

    // Obtener la posición de view3
    const position = positions[button.id].view3;

    // Aplicar la transición al clon del botón
    buttonClone.style.transition = 'all 0.5s ease-in-out';
    buttonClone.style.position = 'absolute';
    buttonClone.style.top = position.top;
    buttonClone.style.left = position.left;
    buttonClone.style.width = position.width;
    buttonClone.style.height = position.height;

    // Cargar la imagen correspondiente en el left-panel2
    const selectedButtonData = buttonData.find(item => item.id === button.id);
    if (selectedButtonData) {
        const img = document.createElement('img');
        img.src = selectedButtonData.image;
        img.classList.add('dynamic-image');
        leftPanel2.appendChild(img);
    }

    reorganizeRightPanel();
    volverButton.style.display = 'block';
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