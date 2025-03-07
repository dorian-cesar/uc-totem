
// Variable global para almacenar el color seleccionado
let selectedColor = null;
let availableButtons = [];

// Función para manejar el clic en los botones de view1
function handleButtonClick(button) {
    // Buscar el dato asociado al botón presionado
=======
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

        // Guardar el color seleccionado
        selectedColor = selectedButton.id.replace('-button1', '-content');
        // Cargar el contenido HTML correspondiente en el left-panel2
        loadHTMLContent(`${button.id}.html`);
    }
}

// Función para cargar contenido HTML en el left-panel2
function loadHTMLContent(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            const leftPanel2 = document.getElementById('left-panel2');
            leftPanel2.innerHTML = data;
            toggleView();
        })
        .catch(error => console.error('Error loading HTML content:', error));
}

// Función para cambiar entre vistas
function toggleView() {
    const view1 = document.querySelector('.view1');
    const view2 = document.querySelector('.view2');

    if (view1.classList.contains('active')) {
        // Cambiar a view2
        view1.classList.remove('active');
        view2.classList.add('active');
        // Mostrar el contenido seleccionado
        if (selectedColor) {
            showContent(selectedColor);
            updateRightPanelButtons();
        }
    } else {
        // Cambiar a view1
        view2.classList.remove('active');
        view1.classList.add('active');

        changePanelColor(button.id.replace('-button2', ''));
        toggleView(selectedButton.image);
    }
}



    }
}

function displayImage(panel, imageSrc) {
    panel.innerHTML = '';
    const img = document.createElement('img');
    img.src = imageSrc;
    img.classList.add('dynamic-image');
    panel.appendChild(img);
}

/* --------------------- View 2 ------------------------------------------------ */


function changePanelColor(color) {
    const leftPanel = document.getElementById('left-panel2');

    // Restaurar el botón previamente oculto
    if (activeColor) {
        const previousButton = document.getElementById(activeColor + '-button2');
        if (previousButton) {
            previousButton.classList.remove('hidden', 'inactive');
        }
    }


    // Ocultar el botón recién seleccionado
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


function showContent(contentId) {
    const leftPanel2 = document.getElementById('left-panel2');
    const selectedButton = buttonData.find(item => item.id.replace('-button1', '-content') === contentId);

    if (selectedButton) {
        // Load the new content in the left panel
        loadHTMLContent(`${selectedButton.id.replace('-button1', '-button2')}.html`);

        // Update the selected color
        selectedColor = contentId;

        // Animate the buttons in the right panel
        animateButtons();
    }
}

function animateButtons() {
    const rightPanel2 = document.getElementById('right-panel2');
    rightPanel2.innerHTML = ''; // Clear existing buttons

    const buttons = buttonData.filter(item => item.id !== selectedColor.replace('-content', '-button1'));
    availableButtons = buttons.slice(0, 7); // Store available buttons

    availableButtons.forEach((button, index) => {
        const btn = document.createElement('button');
        btn.id = button.id.replace('-button1', '-button2');
        btn.className = button.id.replace('-button1', '-button2');
        btn.style.transition = 'all 0.5s ease'; // Add transition for animation
        btn.style.transform = `translateY(${index * 170}px)`; // Position the button
        btn.onclick = () => showContent(button.id.replace('-button1', '-content'));
        rightPanel2.appendChild(btn);
    });
}

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

