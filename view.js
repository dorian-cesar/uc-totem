// Variable global para el color activo
let activeColor = null;

document.querySelectorAll('.right-panel2 button').forEach(button => {
    button.addEventListener('click', function () {
        // Añadimos la animación de fade-out primero
        button.classList.add('fade-out-button');
        
        // Cambiamos el color del panel
        changePanelColor(this.id.replace('-button2', ''));

        // Después de un pequeño retraso, aplicamos el fade-in
        setTimeout(() => {
            button.classList.remove('fade-out-button'); 
            button.classList.add('fade-in-button'); 
        }, 600); 
    });
});


document.querySelectorAll('.left-panel1 button, .right-panel1 button').forEach(button => {
    button.addEventListener('click', function () {
        const buttonId = this.id.replace('-button1', ''); 
        changePanelColor(buttonId);        
    });
});

function handleButtonClick(button) {
    const selectedButton = buttonData.find(item => item.id === button.id);
    if (selectedButton) {
        changePanelColor(button.id.replace('-button1', '')); // Para cambiar el color
        toggleView(selectedButton.image, button.id);        
    }
}

function toggleView() {
    const view1 = document.querySelector('.view1');
    const view2 = document.querySelector('.view2');
    const leftPanel2 = document.getElementById('left-panel2'); 
    view1.classList.toggle('active');
    view2.classList.toggle('active');
    leftPanel2.innerHTML = '';     
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
    ;
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
];

const buttonMapping = {
    'red-button2': 'red-button1',
    'celeste-button2': 'celeste-button1',
    'purple-button2': 'purple-button1',
    'green-button2': 'green-button1',
    'blue-button2': 'blue-button1',
    'yellow-button2': 'yellow-button1',
    'teal-button2': 'teal-button1',   
    'brown-button2': 'brown-button1',    
};

function changePanelColor(color) {
    const leftPanel = document.getElementById('left-panel2');
    const currentButton = document.getElementById(color + '-button2');

    // Ocultar el botón actual y el anterior
    if (activeColor) {
        const previousButton = document.getElementById(activeColor + '-button2');
        if (previousButton) {
            previousButton.classList.remove('hidden', 'inactive');
        }
    }

    if (currentButton) {
        currentButton.classList.add('hidden', 'inactive');
    }

    activeColor = color;

    const buttonDataEntry = buttonData.find(item => item.id === color + '-button1');
    if (buttonDataEntry) {
        leftPanel.innerHTML = '';  // Limpiar el contenido anterior del panel
        const img = document.createElement('img');
        img.src = buttonDataEntry.image;
        img.classList.add('dynamic-image');  // Añadir la animación
        leftPanel.appendChild(img);  // Agregar la nueva imagen
    }
}