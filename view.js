// Variable global para el color activo
let activeColor = null;

document.querySelectorAll('.right-panel2 button').forEach(button => {
    button.addEventListener('click', function () {
        changePanelColor(this.id.replace('-button2', ''));
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
        changePanelColor(button.id.replace('-button1', '')); 
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

function rearrangeButtonsInView2() {
    const container = document.querySelector('.right-panel2'); // Ajusta al contenedor correcto
    buttonOrder.forEach(buttonId => {
        const button = document.getElementById(buttonId);
        if (button) {
            container.appendChild(button); // Reorganiza los botones en el DOM
        }
    });
}

function changePanelColor(color) {
    const leftPanel = document.getElementById('left-panel2');

    if (activeColor) {
        const previousButton = document.getElementById(activeColor + '-button2');
        if (previousButton) {
            previousButton.classList.remove('hidden', 'inactive');
        }
    }

    const currentButton = document.getElementById(color + '-button2');
    if (currentButton) {
        currentButton.classList.add('hidden', 'inactive');
    }

    activeColor = color;

    const buttonDataEntry = buttonData.find(item => item.id === color + '-button1');
    if (buttonDataEntry) {
        leftPanel.innerHTML = '';
        const img = document.createElement('img');
        img.src = buttonDataEntry.image;
        img.classList.add('dynamic-image');
        leftPanel.appendChild(img);
    }

    rearrangeButtonsInView2();
}

const buttonOrder = [
    'red-button2', 'celeste-button2', 'purple-button2', 'green-button2',
    'blue-button2', 'yellow-button2', 'teal-button2', 'gray-button2','brown-button2'
];
