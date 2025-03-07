// Variable global para el color activo
let activeColor = null;

document.querySelectorAll('.right-panel2 button').forEach(button => {
    button.addEventListener('click', function () {
        this.classList.add('hidden', 'inactive');
        setTimeout(() => {
            this.classList.remove('hidden', 'inactive');
            resetRightPanelButtons();
        }, 1000);
    });
});

function handleButtonClick(button) {
    const selectedButton = buttonData.find(item => item.id === button.id);
    if (selectedButton) {
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
    } else {
        leftPanel2.innerHTML = '';
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
    const leftPanel = document.querySelector('.left-panel2');
    leftPanel.style.backgroundColor = color;
    
    if (activeColor) {
        const previousButton = document.getElementById(activeColor + '-button2');
        if (previousButton) {
            previousButton.classList.remove('inactive');
            moveButtonToEnd(previousButton);
        }
    }
    
    const currentButton = document.getElementById(color + '-button2');
    if (currentButton) {
        currentButton.classList.add('inactive');
        moveLastButtonToPosition(currentButton);
    }
    
    activeColor = color;
}

function moveLastButtonToPosition(buttonToHide) {
    const grid = document.querySelector('.right-panel2');
    grid.removeChild(buttonToHide);
    grid.appendChild(buttonToHide);
}

function moveButtonToEnd(button) {
    document.querySelector('.right-panel2').appendChild(button);
}

document.querySelectorAll('.right-panel2 button').forEach(button => {
    button.addEventListener('click', () => {
        updateLeftPanelImage(button.id);
    });
});

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
