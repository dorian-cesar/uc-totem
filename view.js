const iconMap = {
    'red-button1': 'img/ICON_UB_SALAS.svg',
    'celeste-button1': 'img/ICON_INFO_CARRER.svg',
    'purple-button1': 'img/ICON_CALEN.svg',
    'green-button1': 'img/ICON_CONST_H.svg',
    'blue-button1': 'img/ICON_OTRAS_C.svg',
    'yellow-button1': 'img/ICON_EMERG_TRI.svg',
    'teal-button1': 'img/ICON_PROOV.svg',
    'brown-button1': 'img/ICON_PRACT.svg'
};

let currentIconElement = null; // Variable para almacenar el ícono actual
let currentButtonId = null; // Variable para almacenar el ID del botón actual

// Definimos las posiciones de cada botón en ambas vistas
const positions = {
    'red-button1': { 
        view1: { top: '286px', left: '110px', width: '545px', height: '300px' }, 
        view2: { 
            top: '90px', 
            left: '1255px', 
            width: '275px', 
            height: '150px',
            icon: {
                top: '220px',
                left: '1470px',
                width: '70px',
                height: '70px'
            }
        },
        view3: { top: '-10px', left: '-10px', width: '1019px', height: '585px' } // Nueva vista
    },
    'celeste-button1': { 
        view1: { top: '286px', left: '680px', width: '545px', height: '300px' }, 
        view2: { 
            top: '90px', 
            left: '1550px', 
            width: '275px', 
            height: '150px',
            icon: {
                top: '220px',
                left: '1770px',
                width: '70px',
                height: '70px'
            } },
        view3: { top: '-10px', left: '-10px', width: '1019px', height: '585px' } // Nueva vista
    },
    'green-button1': { 
        view1: { top: '610px', left: '395px', width: '545px', height: '305px' }, 
        view2: { 
            top: '260px', 
            left: '1255px', 
            width: '275px', 
            height: '150px',
            icon: {
                top: '390px',
                left: '1470px',
                width: '70px',
                height: '70px'
            } },
        view3: { top: '-10px', left: '-10px', width: '1019px', height: '585px' } // Nueva vista
    },
    'blue-button1': { 
        view1: { top: '610px', left: '965px', width: '260px', height: '305px' }, 
        view2: { 
            top: '430px', 
            left: '1255px', 
            width: '275px', 
            height: '150px',
            icon: {
                top: '560px',
                left: '1470px',
                width: '70px',
                height: '70px'
            } },
        view3: { top: '-10px', left: '-10px', width: '1019px', height: '585px' } // Nueva vista
    },
    'purple-button1': { 
        view1: { top: '610px', left: '110px', width: '260px', height: '305px' }, 
        view2: { 
            top: '260px', 
            left: '1550px', 
            width: '275px', 
            height: '150px',
            icon: {
                top: '390px',
                left: '1770px',
                width: '70px',
                height: '70px'
            } 
        },
        view3: { top: '-10px', left: '-10px', width: '1019px', height: '585px' } // Nueva vista
    },
    'yellow-button1': { 
        view1: { top: '80px', left: '1260px', width: '260px', height: '350px' }, 
        view2: { 
            top: '430px', 
            left: '1550px', 
            width: '275px', 
            height: '150px',
            icon: {
                top: '560px',
                left: '1770px',
                width: '70px',
                height: '70px'
            } },
        view3: { top: '-10px', left: '-10px', width: '1019px', height: '580px' } // Nueva vista
    },
    'teal-button1': { 
        view1: { top: '80px', left: '1545px', width: '260px', height: '350px' }, 
        view2: { 
            top: '600px', 
            left: '1550px', 
            width: '275px', 
            height: '150px',
            icon: {
                top: '725px',
                left: '1770px',
                width: '70px',
                height: '70px'
            } 
        },
        view3: { top: '-10px', left: '-10px', width: '1019px', height: '585px' } // Nueva vista
    },
    'brown-button1': { 
        view1: { top: '455px', left: '1260px', width: '545px', height: '300px' }, 
        view2: { 
            top: '600px', 
            left: '1550px', 
            width: '275px', 
            height: '150px',
            icon: {
                top: '725px',
                left: '1770px',
                width: '70px',
                height: '70px'
            } },
        view3: { top: '-10px', left: '-10px', width: '1019px', height: '585px' } // Nueva vista
    },
    'gray-content1': { 
        view1: { top: '690px', left: '1010px', width: '1000px', height: '135px', image: 'img-textos/Rectangulo2.svg' }, // Imagen original
        view2: { top: '510px', left: '1255px', width: '275px', height: '320px', image: 'img/IMG_0.png' }, // Nueva imagen para view2
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
let currentAudio = null; // Track the currently playing primary audio
let currentSecondaryAudio = null; // Track the currently playing secondary audio

//Funcion para eliminar el icono creado para mostrar en el iframe, revierte la posicion del icono a su posicion original 
function moveIconToOriginal() {
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
        }, { once: true });
    })
}

function removeAllIcons(){
    const allActiveIcons = document.querySelectorAll(".dynamicIcon");
    allActiveIcons.forEach((current) => {
        current.remove();
    })
}

function moveIconToIframe(button) {
    const iconSrc = iconMap[button.id];
    if (!iconSrc) return;

    // Limpiar ícono existente antes de crear uno nuevo
    moveIconToOriginal();
    
    const buttonPosition = positions[button.id]?.view2;
    if (!buttonPosition) return;

    const { top: iconTop, left: iconLeft, width: iconLWidth, height: iconLHeight } = buttonPosition.icon;

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
    iconElement.dataset.original = JSON.stringify({
        top: iconTop,
        left: iconLeft,
        width: iconLWidth,
        height: iconLHeight
    });

    document.body.appendChild(iconElement);

    // Obtener el contenedor del iframe
    const iframeContainer = document.getElementById('iframe-container');
    if (!iframeContainer) return;

    const iframeRect = iframeContainer.getBoundingClientRect();
    let targetTop, targetLeft;

    // Condicional para el ícono especial ICON_OTRAS_C
    if (button.id === "blue-button1") {
        // Posición personalizada para ICON_OTRAS_C
        targetTop = iframeRect.top - (-30);  // Equivale a iframeRect.top + 30
        targetLeft = iframeRect.left + (-210);  // Equivale a iframeRect.left - 210
    } else {
        // Posición por defecto para los demás íconos (valores originales)
        targetTop = iframeRect.top - 250;
        targetLeft = iframeRect.left + 170;
    }

    // Aplicar cambios de posición y tamaño
    iconElement.style.top = `${targetTop}px`;
    iconElement.style.left = `${targetLeft}px`;
    iconElement.style.width = '120px';
    iconElement.style.height = '120px';

    // Actualizar referencia global
    currentIconElement = iconElement;
    currentButtonId = button.id;
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
    // Stop any currently playing audio
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    }

    // Stop all audio elements in the document
    const allAudioElements = document.querySelectorAll('audio');
    allAudioElements.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });

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
        textImagesContainer.style.top = '795px';
        textImagesContainer.style.left = '1455px';
        textImagesContainer.style.width = '325px';
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
    removeAllIcons();
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

    const audioElement1 = button.querySelector('audio:nth-of-type(1)'); // Get the first audio element
    const audioElement2 = button.querySelector('audio:nth-of-type(2)'); // Get the second audio element

    // Stop any currently playing primary audio
    if (currentAudio && currentAudio !== audioElement1) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    // Stop any currently playing secondary audio
    if (currentSecondaryAudio && currentSecondaryAudio !== audioElement2) {
        currentSecondaryAudio.pause();
        currentSecondaryAudio.currentTime = 0;
    }

    // Play the new primary audio
    if (audioElement1) {
        currentAudio = audioElement1;
        currentAudio.currentTime = 0;
        currentAudio.play().catch(error => {
            console.error("Error al reproducir el audio primario:", error);
        });

        // Play the secondary audio after the primary audio ends
        if (audioElement2) {
            currentAudio.addEventListener('ended', () => {
                currentSecondaryAudio = audioElement2;
                currentSecondaryAudio.currentTime = 0;
                currentSecondaryAudio.play().catch(error => {
                    console.error("Error al reproducir el audio secundario:", error);
                });
            }, { once: true });
        }
    }
}

// Asegurar que playAudio esté en el ámbito global
window.playAudio = function(event, audioId) {
    event.preventDefault();
    const button = event.currentTarget;
    const audioElement = button.querySelector(`#${audioId}`);

    if (!audioElement) {
        console.error(`Audio no encontrado: ${audioId}`);
        window.location.href = button.href; // Navegar si no hay audio
        return;
    }

    // Detener audio previo
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    // Reproducir nuevo audio
    currentAudio = audioElement;
    audioElement.currentTime = 0;
    audioElement.play()
        .then(() => {
            // Navegar después de que termine el audio
            audioElement.addEventListener('ended', () => {
                window.location.href = button.href;
            }, { once: true });
        })
        .catch(error => {
            console.error("Error al reproducir:", error);
            window.location.href = button.href; // Navegar si falla la reproducción
        });
};

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

function handleCelesteButtonClick(event, button, htmlPath) {
    event.preventDefault();
    const audioElement = button.querySelector('audio');
    const leftPanel2 = window.parent.document.querySelector('.left-panel2'); // Ensure it targets the parent document

    // Stop any currently playing audio
    if (currentAudio && currentAudio !== audioElement) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    // Play the selected audio
    if (audioElement) {
        currentAudio = audioElement;
        currentAudio.currentTime = 0;
        currentAudio.play().catch(error => {
            console.error("Error al reproducir el audio:", error);
        });
    }

    // Load the corresponding HTML in the left panel
    if (leftPanel2) {
        leftPanel2.innerHTML = `<iframe src="${htmlPath}" style="width: 100%; height: 100%; border: none;"></iframe>`;
    }
}