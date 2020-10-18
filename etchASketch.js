let input;

const container = document.getElementById('container');
const reset = document.querySelector('#reset');
const grid = document.getElementById('grid')



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
    input = prompt(`Enter the size of the new grid between 1 - 100!`)
    if (input < 1){
       input =  prompt(`That number is too small please enter a number between 1 - 100`);
    }else if (input > 100){
        input = prompt (`That number is too big please choose a number between 1 - 100`)
    }
}

const gridItem = document.querySelector('div');
gridItem.addEventListener('mouseover', function (event) {
    event.target.classList.replace('notFilled', 'filled');
});


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


createGrid(16);
