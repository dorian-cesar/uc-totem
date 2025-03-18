const iconMap = {
    'red-button1': 'img/ICON_RED.svg',
    'celeste-button1': 'img/ICON_BLUE.svg',
    'purple-button1': 'img/ICON_PURPLE.svg',
    'green-button1': 'img/ICON_GREEN.svg',
    'blue-button1': 'img/ICON_DARKBLUE.svg',
    'yellow-button1': 'img/ICON_YELLOW.svg',
    'teal-button1': 'img/ICON_TEAL.svg',
    'brown-button1': 'img/ICON_BROWN.svg'
};

let currentIconElement = null; // Variable para almacenar el ícono actual
let currentButtonId = null; // Variable para almacenar el ID del botón actual

// Definimos las posiciones de cada botón en ambas vistas
const positions = {
    'red-button1': { 
        view1: { top: '286px', left: '100px', width: '545px', height: '300px' }, 
        view2: { 
            top: '100px', 
            left: '1230px', 
            width: '260px', 
            height: '140px' ,
            icon: {
                top: '220px',
                left: '1430px',
                width: '70px',
                height: '70px'
            }
        },
        view3: { top: '-10px', left: '-10px', width: '1019px', height: '585px' } // Nueva vista
    },
    'celeste-button1': { 
        view1: { top: '286px', left: '670px', width: '545px', height: '300px' }, 
        view2: { 
            top: '100px', 
            left: '1525px', 
            width: '260px', 
            height: '140px',
            icon: {
                top: '225px',
                left: '1725px',
                width: '70px',
                height: '70px'
            } },
        view3: { top: '-10px', left: '-10px', width: '1019px', height: '585px' } // Nueva vista
    },
    'green-button1': { 
        view1: { top: '610px', left: '385px', width: '545px', height: '305px' }, 
        view2: { 
            top: '270px', 
            left: '1230px', 
            width: '260px', 
            height: '140px',
            icon: {
                top: '391px',
                left: '1432px',
                width: '70px',
                height: '70px'
            } },
        view3: { top: '-10px', left: '-10px', width: '1019px', height: '585px' } // Nueva vista
    },
    'blue-button1': { 
        view1: { top: '610px', left: '955px', width: '260px', height: '305px' }, 
        view2: { 
            top: '440px', 
            left: '1230px', 
            width: '260px', 
            height: '140px',
            icon: {
                top: '555px',
                left: '1432px',
                width: '70px',
                height: '70px'
            } },
        view3: { top: '-10px', left: '-10px', width: '1019px', height: '585px' } // Nueva vista
    },
    'purple-button1': { 
        view1: { top: '610px', left: '100px', width: '260px', height: '305px' }, 
        view2: { 
            top: '270px', 
            left: '1525px', 
            width: '260px', 
            height: '140px',
            icon: {
                top: '390px',
                left: '1725px',
                width: '70px',
                height: '70px'
            } 
        },
        view3: { top: '-10px', left: '-10px', width: '1019px', height: '585px' } // Nueva vista
    },
    'yellow-button1': { 
        view1: { top: '100px', left: '1240px', width: '260px', height: '330px' }, 
        view2: { 
            top: '440px', 
            left: '1525px', 
            width: '260px', 
            height: '140px',
            icon: {
                top: '555px',
                left: '1725px',
                width: '70px',
                height: '70px'
            } },
        view3: { top: '-10px', left: '-10px', width: '1019px', height: '580px' } // Nueva vista
    },
    'teal-button1': { 
        view1: { top: '100px', left: '1525px', width: '260px', height: '330px' }, 
        view2: { top: '610px', 
            left: '1525px', 
            width: '260px', 
            height: '140px',
            icon: {
                top: '728px',
                left: '1725px',
                width: '70px',
                height: '70px'
            } 
        },
        view3: { top: '-10px', left: '-10px', width: '1019px', height: '585px' } // Nueva vista
    },
    'brown-button1': { 
        view1: { top: '455px', left: '1240px', width: '545px', height: '300px' }, 
        view2: { 
            top: '610px', 
            left: '1525px', 
            width: '260px', 
            height: '140px',
            icon: {
                top: '725px',
                left: '1725px',
                width: '70px',
                height: '70px'
            } },
        view3: { top: '-10px', left: '-10px', width: '1019px', height: '585px' } // Nueva vista
    },
    'gray-content1': { 
        view1: { top: '690px', left: '1240px', width: '545px', height: '135px', image: 'img/Rectángulo 2.png' }, // Imagen original
        view2: { top: '520px', left: '1230px', width: '260px', height: '320px', image: 'img/IMG_0.png' }, // Nueva imagen para view2
    },
};

const buttonData = [
    { id: 'red-button1', url: 'buttons/red-panel.html' },
    { id: 'celeste-button1', url: 'buttons/celeste-panel.html' },
    { id: 'purple-button1', url: 'buttons/purple-panel.html' },
    { id: 'green-button1', url: 'buttons/green-panel.html' },
    { id: 'blue-button1', url: 'buttons/blue-panel.html' },
    { id: 'yellow-button1', url: 'buttons/yellow-panel.html' },
    { id: 'teal-button1', url: 'buttons/teal-panel.html' },
    { id: 'brown-button1', url: 'buttons/brown-panel.html' }
];

// Mapeo de botones que deben moverse cuando se hace clic en otros botones
const buttonMoveMap = {
    'red-button1': 'brown-button1',
    'celeste-button1': 'brown-button1',
    'green-button1': 'brown-button1',
    'blue-button1': 'brown-button1',
    'yellow-button1': 'brown-button1',
    'purple-button1': 'teal-button1',
    'teal-button1': 'brown-button1',
    'brown-button1': 'teal-button1',
};

// Mapeo de botones que deben ocupar la posición de teal-button1 si este no está en su lugar
const tealReplacementMap = {
    'red-button1': 'purple-button1',
    'celeste-button1': 'purple-button1',
    'green-button1': 'purple-button1',
    'blue-button1': 'purple-button1',
    'yellow-button1': 'purple-button1',
    'purple-button1': 'brown-button1',
    'teal-button1': 'brown-button1',
    'brown-button1': 'purple-button1',
};

let selectedButton = null;
let isFirstClick = true;

//Funcion para eliminar el icono creado para mostrar en el iframe, revierte la posicion del icono a su posicion original 
function moveIconToOriginal(button) {
    const allActiveIcons = document.querySelectorAll(".dynamicIcon");
    allActiveIcons.forEach((current) => {
        const data = JSON.parse(current.dataset.original);
        current.style.setProperty("top", `${data.top}`, "important");
        current.style.setProperty("left", `${data.left}`, "important");
        current.style.setProperty("width", `${data.width}`, "important");
        current.style.setProperty("height", `${data.height}`, "important");
        // current.style.setProperty("opacity", "0", "important");

        // Crea un Listener para capturar el evento transitionend y al terminar la transicion elimina el icono dinamico
        current.addEventListener("transitionend", function() {
            current.remove();
            console.log("Elemento removido después de la transición.");
        }, button);
    })
}

function moveIconToIframe(button) {
    const iconSrc = iconMap[button.id]; // Obtener la ruta del ícono correspondiente
    if (!iconSrc) return; // Si no hay ícono correspondiente, salir

    // Limpiar cualquier ícono existente antes de crear uno nuevo
    moveIconToOriginal(button);
    
    // Obtener las posiciones del botón en view2 desde el objeto positions
    const buttonPosition = positions[button.id]?.view2;
    if (buttonPosition) { // Asegurarse de que exista la posición del botón en view2
    
        const { top:iconTop, left:iconLeft, width:iconLWidth, height:iconLHeight } = buttonPosition.icon;

        // Crear el nuevo ícono
        const iconElement = document.createElement('img');
        iconElement.className = "dynamicIcon";
        iconElement.src = iconSrc;
        iconElement.style.position = 'absolute';
        iconElement.style.width = iconLWidth; 
        iconElement.style.height = iconLHeight;
        iconElement.style.top = iconTop;
        iconElement.style.left = iconLeft;
        iconElement.style.transition = 'all 0.5s ease-in-out';
        iconElement.dataset.original = `{"top": "${iconTop}", "left": "${iconLeft}", "width": "${iconLWidth}", "height": "${iconLHeight}"  }`;

        // Añadir el ícono al cuerpo del documento
        document.body.appendChild(iconElement);

        // Posición final del ícono (dentro del iframe)
        const iframeContainer = document.getElementById('iframe-container');
        if (iframeContainer) { // Asegurarse de que el iframe exista
            const iframeRect = iframeContainer.getBoundingClientRect();

            // Mover el ícono a la posición final dentro del iframe
            iconElement.style.top = `${iframeRect.top - 214}px`; // Ajustar la posición dentro del iframe
            iconElement.style.left = `${iframeRect.left + 121}px`;
            iconElement.style.width = `120px`;
            iconElement.style.height = `120px`;
            
        }

        // Actualizar el ícono actual y el ID del botón actual
        currentIconElement = iconElement;
        currentButtonId = button.id;
        
    }
}

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
    fadeIn(volverButton);
    volverButton.style.display = 'block';
}

// Función para manejar el clic en el botón "Volver"
function handleVolverClick() {
    const leftPanel2 = document.querySelector('.left-panel2');
    const rightPanel = document.querySelector('.right-panel');
    const volverButton = document.getElementById('volver-button');
    const textImagesContainer = document.querySelector('.text-images-container'); // Seleccionar el contenedor

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

    // Restaurar el .text-images-container a su estado original
    if (textImagesContainer) {
        // Restaurar las propiedades originales del contenedor
        textImagesContainer.style.position = 'absolute';
        textImagesContainer.style.top = '825px';
        textImagesContainer.style.left = '1480px';
        textImagesContainer.style.width = 'auto';
        textImagesContainer.style.height = 'auto';
        textImagesContainer.style.display = 'flex';
        textImagesContainer.style.flexDirection = 'column';
        textImagesContainer.style.justifyContent = 'space-between';
        textImagesContainer.style.alignItems = 'flex-end';
        textImagesContainer.style.paddingRight = '20px';
        textImagesContainer.style.boxSizing = 'border-box';
        textImagesContainer.style.opacity = '0'; // Iniciar con opacidad 0
        textImagesContainer.classList.remove('hidden'); // Asegurarse de que no esté oculto

        // Aplicar el efecto de fade in
        fadeIn(textImagesContainer);
    }

    // Restaurar el estado inicial
    selectedButton = null;
    isFirstClick = true;
    // moveIconToOriginal();
}


// Función para reorganizar "gray-content1"
function reorganizeRightPanel() {
    const rightPanel = document.querySelector('.right-panel');   

    // Incluir "gray-content1" en la reorganización si no está en el right-panel
    const grayContent = document.getElementById("gray-content1");
    if (grayContent && !rightPanel.contains(grayContent)) {
        rightPanel.appendChild(grayContent);    }    

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

function handleButtonClick(button) {
    const leftPanel2 = document.querySelector('.left-panel2');
    const volverButton = document.getElementById('volver-button');
    const textImagesContainer = document.querySelector('.text-images-container');
    
    moveIconToIframe(button);

    setTimeout(() => {
        fadeOut(textImagesContainer);
    }, 0);

    if (isFirstClick) {
        moveAllButtonsToView2(); // Mueve todos los botones a view2
        isFirstClick = false;
    }

    // Si hay un botón previamente seleccionado, lo "minimiza"
    if (selectedButton) {
        selectedButton.classList.add('hide-description', 'shrink-title', 'shrink-logo');
        selectedButton.style.display = 'block';
        reorganizeRightPanel();
    }

    // Obtener el ID del botón cliqueado
    const buttonId = button.id;

    // Obtener el botón que debe moverse según el mapeo
    const buttonToMoveId = buttonMoveMap[buttonId];
    const buttonToMove = document.getElementById(buttonToMoveId);

    // Mover el botón correspondiente
    if (positions[buttonId] && positions[buttonId].view2 && button !== buttonToMove) {
        const newPosition = positions[buttonId].view2;

        // Verificar si purple-button1 necesita moverse
        const purpleButton = document.getElementById('purple-button1');
        const purpleOriginalPosition = positions['purple-button1'].view2;

        // Si purple-button1 está en la posición que buttonToMove va a ocupar, moverlo
        if (
            purpleButton.style.top === newPosition.top &&
            purpleButton.style.left === newPosition.left
        ) {
            // Encontrar una posición libre para purple-button1
            const freePosition = findFreePosition(positions, buttonId, buttonToMoveId);
            if (freePosition) {
                purpleButton.style.transition = 'all 0.5s ease-in-out';
                purpleButton.style.top = freePosition.top;
                purpleButton.style.left = freePosition.left;
                purpleButton.style.width = freePosition.width;
                purpleButton.style.height = freePosition.height;
            }
        }

        // Mover el botón correspondiente a la posición que debió ocupar el botón presionado
        buttonToMove.style.transition = 'all 0.5s ease-in-out';
        buttonToMove.style.top = newPosition.top;
        buttonToMove.style.left = newPosition.left;
        buttonToMove.style.width = newPosition.width;
        buttonToMove.style.height = newPosition.height;
    }

    // Verificar si teal-button1 no está en su posición original y mover un botón de reemplazo
    const tealButton = document.getElementById('teal-button1');
    const tealOriginalPosition = positions['teal-button1'].view2;

    if (
        tealButton.style.top !== tealOriginalPosition.top ||
        tealButton.style.left !== tealOriginalPosition.left
    ) {
        // Teal no está en su posición original, mover un botón de reemplazo
        const tealReplacementId = tealReplacementMap[buttonId];
        const tealReplacementButton = document.getElementById(tealReplacementId);

        if (tealReplacementButton) {
            tealReplacementButton.style.transition = 'all 0.5s ease-in-out';
            tealReplacementButton.style.top = tealOriginalPosition.top;
            tealReplacementButton.style.left = tealOriginalPosition.left;
            tealReplacementButton.style.width = tealOriginalPosition.width;
            tealReplacementButton.style.height = tealOriginalPosition.height;
        }
    }

    // Verificar si teal-button1 está oculto y mover purple-button1 a su posición
    const purpleButton = document.getElementById('purple-button1');
    if (tealButton.style.display === 'none') {
        // Teal está oculto, mover purple-button1 a la posición de teal-button1
        purpleButton.style.transition = 'all 0.5s ease-in-out';
        purpleButton.style.top = tealOriginalPosition.top;
        purpleButton.style.left = tealOriginalPosition.left;
        purpleButton.style.width = tealOriginalPosition.width;
        purpleButton.style.height = tealOriginalPosition.height;
    }

    // Cargar contenido en el panel izquierdo
    leftPanel2.innerHTML = '';
    button.style.display = 'none';
    selectedButton = button;
    selectedButton.classList.remove('hide-description', 'shrink-title', 'shrink-logo');

    // Obtener la URL correspondiente al botón
    const selectedButtonData = buttonData.find(item => item.id === button.id);
    if (selectedButtonData) {
        const iframe = document.createElement('iframe');
        iframe.src = selectedButtonData.url;
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.border = 'none';
        leftPanel2.appendChild(iframe);
    }

    reorganizeRightPanel();

    if (isFirstClick) {
        fadeIn(volverButton);
        volverButton.style.display = 'block';
    }
}

// Función para encontrar una posición libre
function findFreePosition(positions, currentButtonId, buttonToMoveId) {
    for (const [id, position] of Object.entries(positions)) {
        // Ignorar las posiciones del botón actual y el botón que se está moviendo
        if (id === currentButtonId || id === buttonToMoveId) continue;

        const buttonElement = document.getElementById(id);
        if (!buttonElement) continue;

        // Verificar si la posición está libre
        if (
            buttonElement.style.top !== position.view2.top ||
            buttonElement.style.left !== position.view2.left
        ) {
            return position.view2; // Retornar la posición libre
        }
    }
    return null; // No se encontró ninguna posición libre
}


// Asignar eventos a los botones
// document.querySelectorAll('button').forEach(button => {
//     button.addEventListener('click', () => handleButtonClick(button));
//     button.addEventListener('touchstart', () => handleButtonClick(button), { passive: true });
// });

// Inicializar la vista
document.addEventListener('DOMContentLoaded', () => {
    // No es necesario llamar a animateButtons() aquí, ya que se maneja en handleButtonClick
});

// Selecciona el contenedor de imágenes y el botón
const textImagesContainer = document.getElementById('textImagesContainer');

// Función para aplicar el efecto de fade out
function fadeOut(element) {
    let opacity = 1; // Opacidad inicial (completamente visible)
    const interval = 20; // Intervalo de tiempo entre cada paso (en ms), más rápido para un efecto suave
    const step = 0.05; // Cambio en la opacidad por paso

    element.style.transition = 'none'; // Desactivar transiciones CSS para evitar conflictos
    element.style.opacity = opacity; // Asegurar que la opacidad inicial esté establecida

    const fadeEffect = setInterval(() => {
        if (opacity > 0) {
            opacity -= step; // Reducir la opacidad gradualmente
            element.style.opacity = opacity; // Aplicar la nueva opacidad
        } else {
            clearInterval(fadeEffect); // Detener el intervalo cuando la opacidad llega a 0
            element.style.display = 'none'; // Ocultar completamente el elemento
            element.classList.add('hidden'); // Opcional: añadir clase para ocultarlo
        }
    }, interval);
}
// Función para aplicar el efecto de fade in
function fadeIn(element) {
    let opacity = 0; // Opacidad inicial (completamente invisible)
    const interval = 20; // Intervalo de tiempo entre cada paso (en ms)
    const step = 0.05; // Cambio en la opacidad por paso

    element.style.opacity = opacity; // Asegurar que la opacidad inicial esté establecida
    element.style.display = 'flex'; // Restaurar el display original (flex en este caso)
    element.style.transition = 'none'; // Desactivar transiciones CSS para evitar conflictos

    const fadeInEffect = setInterval(() => {
        if (opacity < 1) {
            opacity += step; // Aumentar la opacidad gradualmente
            element.style.opacity = opacity; // Aplicar la nueva opacidad
        } else {
            clearInterval(fadeInEffect); // Detener el intervalo cuando la opacidad llega a 1
            element.style.opacity = 1; // Asegurar que la opacidad final sea exactamente 1
        }
    }, interval);
}