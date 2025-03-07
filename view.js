// Variable global para el color activo
let activeColor = null;

document.querySelectorAll('.right-panel2 button').forEach(button => {
    button.addEventListener('click', function () {
        changePanelColor(this.id.replace('-button2', ''));
    });
});

function handleButtonClick(button) {
    const selectedButton = buttonData.find(item => item.id === button.id);
    if (selectedButton) {
        changePanelColor(button.id.replace('-button2', ''));
        toggleView(selectedButton.image);
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
}

function updateLeftPanelImage(buttonId) {
    const associatedButtonId = buttonMapping[buttonId];
    const buttonDataEntry = buttonData.find(item => item.id === associatedButtonId);
    if (buttonDataEntry) {
        const leftPanel = document.getElementById('left-panel2');
        leftPanel.innerHTML = '';
        const img = document.createElement('img');
        img.src = buttonDataEntry.image;
        img.classList.add('dynamic-image');
        leftPanel.appendChild(img);
    }
}

// Oculta el botón activo en right-panel2 cuando se selecciona en view1
function hideActiveButton() {
    if (activeColor) {
        const buttonToHide = document.getElementById(activeColor + '-button2');
        if (buttonToHide) {
            buttonToHide.classList.add('hidden', 'inactive');
        }
    }
}

// Muestra todos los botones cuando se vuelve a view1
function showAllButtons() {
    document.querySelectorAll('.right-panel2 button').forEach(button => {
        button.classList.remove('hidden', 'inactive');
    });
}

// Agregar evento a los botones de left-panel1 y right-panel1
document.querySelectorAll('.left-panel1 button, .right-panel1 button').forEach(button => {
    button.addEventListener('click', function () {
        const buttonId = this.id.replace('-button1', '').replace('-button1', ''); 
        changePanelColor(buttonId);
        hideEquivalentButtonInView2(buttonId); // Oculta el botón en view2
    });
});


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
