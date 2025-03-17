// Definimos las posiciones de cada botón en ambas vistas
const positions = {
    'red-button1': { 
        view1: { top: '286px', left: '100px', width: '545px', height: '300px' }, 
        view2: { top: '100px', left: '1230px', width: '260px', height: '140px' },
        view3: { top: '-10px', left: '-10px', width: '1019px', height: '585px' } // Nueva vista
    },
    'blue-button1': { 
        view1: { top: '286px', left: '670px', width: '545px', height: '300px' }, 
        view2: { top: '100px', left: '1525px', width: '260px', height: '140px' },
        view3: { top: '-10px', left: '-10px', width: '1019px', height: '585px' } // Nueva vista
    },
    'green-button1': { 
        view1: { top: '610px', left: '385px', width: '545px', height: '305px' }, 
        view2: { top: '270px', left: '1230px', width: '260px', height: '140px' },
        view3: { top: '-10px', left: '-10px', width: '1019px', height: '585px' } // Nueva vista
    },
    'dark_blue-button1': { 
        view1: { top: '610px', left: '955px', width: '260px', height: '305px' }, 
        view2: { top: '440px', left: '1230px', width: '260px', height: '140px' },
        view3: { top: '-10px', left: '-10px', width: '1019px', height: '585px' } // Nueva vista
    },
    'purple-button1': { 
        view1: { top: '610px', left: '100px', width: '260px', height: '305px' }, 
        view2: { top: '270px', left: '1525px', width: '260px', height: '140px' },
        view3: { top: '-10px', left: '-10px', width: '1019px', height: '585px' } // Nueva vista
    },
    'yellow-button1': { 
        view1: { top: '100px', left: '1240px', width: '260px', height: '330px' }, 
        view2: { top: '440px', left: '1525px', width: '260px', height: '140px' },
        view3: { top: '-10px', left: '-10px', width: '1019px', height: '580px' } // Nueva vista
    },
    'teal-button1': { 
        view1: { top: '100px', left: '1525px', width: '260px', height: '330px' }, 
        view2: { top: '610px', left: '1525px', width: '260px', height: '140px' },
        view3: { top: '-10px', left: '-10px', width: '1019px', height: '585px' } // Nueva vista
    },
    'brown-button1': { 
        view1: { top: '455px', left: '1240px', width: '545px', height: '300px' }, 
        view2: { top: '610px', left: '1525px', width: '260px', height: '140px' },
        view3: { top: '-10px', left: '-10px', width: '1019px', height: '585px' } // Nueva vista
    },
    'gray-content1': { 
        view1: { top: '690px', left: '1240px', width: '545px', height: '135px', image: 'img/Rectángulo 2.png' }, // Imagen original
        view2: { top: '520px', left: '1230px', width: '260px', height: '320px', image: 'img/IMG_0.png' }, // Nueva imagen para view2
    },
};

const buttonData = [
    { id: 'red-button1', url: 'buttons/red-panel.html' },
    { id: 'blue-button1', url: 'buttons/blue-panel.html' },
    { id: 'purple-button1', url: 'buttons/purple-panel.html' },
    { id: 'green-button1', url: 'buttons/green-panel.html' },
    { id: 'dark_blue-button1', url: 'buttons/dark_blue-panel.html' },
    { id: 'yellow-button1', url: 'buttons/yellow-panel.html' },
    { id: 'teal-button1', url: 'buttons/teal-panel.html' },
    { id: 'brown-button1', url: 'buttons/brown-panel.html' }
];

// Mapeo de botones que deben ocupar la posición de teal-button1 si este no está en su lugar
const tealReplacementMap = {
    'red-button1': 'purple-button1',
    'blue-button1': 'purple-button1',
    'green-button1': 'purple-button1',
    'dark_blue-button1': 'purple-button1',
    'yellow-button1': 'purple-button1',
    'purple-button1': 'brown-button1',
    'teal-button1': 'brown-button1',
    'brown-button1': 'purple-button1',
};

let selectedButton = null;
let isFirstClick = true;

// Posiciones del logo en View2
const logoPositions = {
    'red-button1': { top: '290px', left: '1110px' },
    'blue-button1': { top: '290px', left: '1110px' },
    'green-button1': { top: '290px', left: '1110px' },
    'purple-button1': { top: '290px', left: '1110px' },
    'dark_blue-button1': { top: '290px', left: '1110px' },
    'yellow-button1': { top: '290px', left: '1110px' },
    'teal-button1': { top: '290px', left: '1110px' },
    'brown-button1': { top: '290px', left: '1110px' },
};




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

function handleVolverClick() {
    const leftPanel2 = document.querySelector('.left-panel2');
    const rightPanel = document.querySelector('.right-panel');
    const volverButton = document.getElementById('volver-button');
    const textImagesContainer = document.querySelector('.text-images-container'); // Seleccionar el contenedor

    // Aplicar fade out al logo clonado si existe
    const logoClone = document.querySelector('.logo-clone');
    if (logoClone) {
        logoClone.style.transition = 'opacity 0.5s ease-in-out';
        logoClone.style.opacity = '0';

        // Eliminar el logo después del fade out
        setTimeout(() => {
            logoClone.remove();
        }, 500); // 500ms para coincidir con la duración del fade out
    }

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

    // Mapeo de botones que deben moverse cuando se hace clic en otros botones
    const buttonMoveMap = {
        'red-button1': 'brown-button1',
        'blue-button1': 'brown-button1',
        'green-button1': 'brown-button1',
        'dark_blue-button1': 'brown-button1',
        'yellow-button1': 'brown-button1',
        'purple-button1': 'teal-button1',
        'teal-button1': 'brown-button1',
        'brown-button1': 'teal-button1',
    };

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
    if (selectedButton) {
        // Aplicar fade out al left-panel2 antes de cambiar de contenido
        leftPanel2.style.opacity = '0';

        // Aplicar fade out al logo clonado si existe
        const logoClone = document.querySelector('.logo-clone');
        if (logoClone) {
            logoClone.style.transition = 'opacity 0.5s ease-in-out';
            logoClone.style.opacity = '0';

            // Eliminar el logo después del fade out
            setTimeout(() => {
                logoClone.remove();
            }, 500); // 500ms para coincidir con la duración del fade out
        }

        setTimeout(() => {
            leftPanel2.innerHTML = ''; // Limpiar el contenido anterior del left-panel2
            loadContentIntoLeftPanel2(button, leftPanel2);
        }, 500); // Esperar a que termine el fade out
    } else {
        loadContentIntoLeftPanel2(button, leftPanel2);
    }

    button.style.display = 'none';
    selectedButton = button;
    selectedButton.classList.remove('hide-description', 'shrink-title', 'shrink-logo');

    reorganizeRightPanel();

    if (isFirstClick) {
        fadeIn(volverButton);
        volverButton.style.display = 'block';
    }
}

function loadContentIntoLeftPanel2(button, leftPanel2) {
    // Obtener la URL correspondiente al botón
    const selectedButtonData = buttonData.find(item => item.id === button.id);
    if (selectedButtonData) {
        const iframe = document.createElement('iframe');
        iframe.src = selectedButtonData.url;
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.border = 'none';
        leftPanel2.appendChild(iframe);

        // Obtener el logo del botón seleccionado
        const logo = button.querySelector('.button-logo');
        if (logo) {
            // Eliminar el logo anterior si existe
            const existingLogoClone = document.querySelector('.logo-clone');
            if (existingLogoClone) {
                existingLogoClone.remove(); // Eliminar el logo anterior
            }

            // Clonar el logo y configurar su posición inicial y opacidad
            const logoClone = logo.cloneNode(true);
            logoClone.style.position = 'absolute';
            logoClone.style.top = logoPositions[button.id].top; // Posición inicial en View2
            logoClone.style.left = logoPositions[button.id].left; // Posición inicial en View2
            logoClone.style.width = '100px';
            logoClone.style.height = '100px';
            logoClone.style.transition = 'opacity 0.5s ease-in-out'; // Solo transición de opacidad
            logoClone.style.opacity = '0'; // Iniciar con opacidad 0 para el fade in
            document.querySelector('.container').appendChild(logoClone); // Añadir el logo al contenedor principal

            // Asignar una clase al nuevo logo para identificarlo
            logoClone.classList.add('logo-clone');

            // Aplicar fade in al logo
            setTimeout(() => {
                logoClone.style.opacity = '1'; // Aplicar fade in
            }, 0);

            // Esperar a que el iframe cargue completamente antes de mover el logo
            iframe.onload = () => {
                const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
                const logoContainer = iframeDocument.getElementById('dynamic-logo-container');
                if (logoContainer) {
                    logoContainer.appendChild(logoClone);
                }
            };
        }
    }

    // Aplicar fade in al left-panel2
    setTimeout(() => {
        leftPanel2.style.opacity = '1';
    }, 0);
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
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => handleButtonClick(button));
    button.addEventListener('touchstart', () => handleButtonClick(button), { passive: true });
});

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