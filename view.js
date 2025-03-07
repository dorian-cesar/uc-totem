// Variable global para el color activo
let activeColor = null;

document.querySelectorAll('.right-panel2 button').forEach(button => {
    button.addEventListener('click', function () {
        handleButtonClick(this); // Llamamos a la función que maneja el clic
    });
});

function handleButtonClick(button) {
    const selectedButton = buttonData.find(item => item.id === button.id);
    if (selectedButton) {
        // Si hay un color activo, moverlo a la posición del botón presionado
        if (activeColor) {
            moveActiveButtonToPosition(button.id);
        }

        // Cambiar el color activo
        changePanelColor(button.id.replace('-button2', ''));
        toggleView(selectedButton.image);
    }
}

function moveActiveButtonToPosition(targetButtonId) {
    // Encuentra la posición del botón activo en buttonOrder
    const activeButtonIndex = buttonOrder.findIndex(id => id === activeColor + '-button2');

    // Encuentra la posición del botón presionado en buttonOrder
    const targetButtonIndex = buttonOrder.findIndex(id => id === targetButtonId);

    // Si encontramos ambos botones, los intercambiamos
    if (activeButtonIndex !== -1 && targetButtonIndex !== -1) {
        // Intercambiar los valores en buttonOrder
        [buttonOrder[activeButtonIndex], buttonOrder[targetButtonIndex]] = [buttonOrder[targetButtonIndex], buttonOrder[activeButtonIndex]];

        // Reorganizar los botones en view2
        rearrangeButtonsInView2();
    }
}

function toggleView(imageSrc) {
    const view1 = document.querySelector('.view1');
    const view2 = document.querySelector('.view2');
    const leftPanel2 = document.getElementById('left-panel2');

    view1.classList.toggle('active');
    view2.classList.toggle('active');

    if (view2.classList.contains('active')) {
        displayImage(leftPanel2, imageSrc);
        hideActiveButton(); // Oculta el botón correspondiente en right-panel2
        rearrangeButtonsInView2(); // Reorganiza los botones en el orden especificado
    } else {
        leftPanel2.innerHTML = '';
        showAllButtons(); // Restaura los botones cuando se vuelve a view1
    }
}

function displayImage(panel, imageSrc) {
    panel.innerHTML = '';
    const img = document.createElement('img');
    img.src = imageSrc;
    img.classList.add('dynamic-image');
    panel.appendChild(img);
}

function hideActiveButton() {
    if (activeColor) {
        const buttonToHide = document.getElementById(activeColor + '-button2');
        if (buttonToHide) {
            buttonToHide.classList.add('hidden', 'inactive');
        }
    }
}

function showAllButtons() {
    document.querySelectorAll('.right-panel2 button').forEach(button => {
        button.classList.remove('hidden', 'inactive');
    });

    // Reorganizar los botones cuando se muestran todos
    rearrangeButtonsInView2();
}

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

// Inicialización de los botones activos en el arreglo `buttonOrder`
const buttonOrder = [
    'red-button2',
    'celeste-button2',
    'purple-button2',
    'green-button2',
    'blue-button2',
    'yellow-button2',
    'teal-button2',
    null,  // Mantener posición 6 vacía
    'brown-button2',
];

function rearrangeButtonsInView2() {
    const rightPanel = document.querySelector('.right-panel2');

    // Crear un arreglo de botones según el orden definido en buttonOrder,
    // asegurándose de que la posición 6 esté vacía y no ocupe ningún botón
    const orderedButtons = buttonOrder
        .map(id => {
            if (id === null || id === undefined) return null;
            return document.getElementById(id);
        })
        .filter(button => button !== null); // Filtrar cualquier botón nulo o indefinido

    // Limpiar el panel antes de agregar los botones ordenados
    rightPanel.innerHTML = '';

    // Añadir los botones en el orden especificado en buttonOrder
    orderedButtons.forEach(button => {
        if (button) {
            rightPanel.appendChild(button);
        }
    });
}

function changePanelColor(color) {
    const leftPanel = document.getElementById('left-panel2');

    // Restaurar el botón previamente oculto en right-panel2
    if (activeColor) {
        const previousButton = document.getElementById(activeColor + '-button2');
        if (previousButton) {
            previousButton.classList.remove('hidden', 'inactive');
        }
    }

    // Ocultar el botón recién seleccionado en right-panel2
    const currentButton = document.getElementById(color + '-button2');
    if (currentButton) {
        currentButton.classList.add('hidden', 'inactive');
    }

    // Actualizar color activo
    activeColor = color;

    // Actualizar la imagen en left-panel2
    const buttonDataEntry = buttonData.find(item => item.id === color + '-button1');
    if (buttonDataEntry) {
        leftPanel.innerHTML = '';
        const img = document.createElement('img');
        img.src = buttonDataEntry.image;
        img.classList.add('dynamic-image');
        leftPanel.appendChild(img);
    }

    // Reorganizar los botones al cambiar el color activo
    rearrangeButtonsInView2();
}
