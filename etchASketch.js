let input;

const container = document.getElementById('container');
const reset = document.querySelector('#reset');
const grid = document.getElementById('grid');
const gridItem = document.querySelector('div');
const random = document.querySelector('#color');


const createGrid = function (row) {
    let column = row
    container.style.setProperty('--row', row);
    container.style.setProperty('--column', column);

    for (let i = 0; i < row * column; i++) {
        const grids = document.createElement('div');
        grids.classList.add('notFilled');
        grids.setAttribute('id', 'grid');
        container.appendChild(grids);
    };
}


const userInput = () => {
    input = prompt(`Enter the size of the new grid between 4 - 100!`)
    if (input === null){
        createGrid(16);
        return;
    }else if (input < 4 || input > 100){
        input = prompt(`That's not a vaild number, please choose between 4-100!`);
    }
}

function fill(e) {
    if (!e.target.matches('#grid')) return;
    e.target.style.backgroundColor = 'black';
    mousedown = true;
    console.log(e);
}


function remove() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}


function resetGrid() {
    remove();
    userInput();

    for (let j = 0; j < input * input; j++) {
        container.style.setProperty('--row', input);
        container.style.setProperty('--column', input);
        const grids = document.createElement('div');
        grids.classList.add('notFilled');
        grids.setAttribute('id', 'grid');
        container.appendChild(grids);
    };

}

reset.addEventListener('click', resetGrid);

let mousedown = false;

gridItem.addEventListener('click', fill);
gridItem.addEventListener('mousemove', (e) => mousedown && fill(e));
gridItem.addEventListener('mousedown', () => mousedown = true);
gridItem.addEventListener('mouseup', () => mousedown = false);



createGrid(16);
