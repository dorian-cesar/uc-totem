// Variable global para almacenar el color seleccionado
let selectedColor = null;
let availableButtons = [];

// Función para manejar el clic en los botones de view1
function handleButtonClick(button) {
    // Buscar el dato asociado al botón presionado
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
    }
}

// Función para mostrar la imagen y el texto en el left-panel2
function displayImageAndText(panel, imageSrc) {
    // Limpiar el contenido previo
    panel.innerHTML = '';

    // Crear un elemento <img> para la imagen
    const img = document.createElement('img');
    img.src = imageSrc;
   
    img.classList.add('dynamic-image'); // Clase para estilizar la imagen

    // Agregar la imagen y el texto al panel
    panel.appendChild(img);
    
}

/* --------------------- View 2 ------------------------------------------------ */
// Función para cambiar el color del left-panel2
function changePanelColor(color) {
    const leftPanel = document.querySelector('.left-panel2');
    leftPanel.style.backgroundColor = color;
}

function updateRightPanelButtons() {
    const rightPanel2 = document.getElementById('right-panel2');
    rightPanel2.innerHTML = ''; // Clear existing buttons

    const buttons = buttonData.filter(item => item.id !== selectedColor.replace('-content', '-button1'));
    availableButtons = buttons.slice(0, 7); // Store available buttons
    availableButtons.forEach(button => {
        const btn = document.createElement('button');
        btn.id = button.id.replace('-button1', '-button2');
        btn.className = button.id.replace('-button1', '-button2');
        btn.onclick = () => showContent(button.id.replace('-button1', '-content'));
        rightPanel2.appendChild(btn);
    });
}

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

// Array con las imágenes y textos asociados a cada botón
const buttonData = [
    { id: 'red-button1', image: 'img/CAJA_R.png'},
    { id: 'celeste-button1', image: 'img/CAJA_C.png'},
    { id: 'purple-button1', image: 'img/CAJA_P.png'},
    { id: 'green-button1', image: 'img/CAJA_G.png'},
    { id: 'blue-button1', image: 'img/CAJA_B.png'},
    { id: 'yellow-button1', image: 'img/CAJA_Y.png'},
    { id: 'teal-button1', image: 'img/CAJA_T.png'},
    { id: 'brown-button1', image: 'img/CAJA_BR.png'},
    { id: 'gray-button1', image: 'img/CAJA_GR.png'}
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
