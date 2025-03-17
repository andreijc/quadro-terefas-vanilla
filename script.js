const colunas = document.querySelectorAll(".cards-colunas");
const cartão = document.querySelectorAll(".card")

let draggedcard;

const dragstart = (event) => {
    draggedcard = event.target;
    event.dataTransfer.effectAllowed = 'move';
    
}

const dragover = (event) => {
    event.preventDefault()
}

const dragEnter = ({ target }) => {
    console.log(target)
}

cartão.forEach((cartão) => {
    cartão.addEventListener("dragstart", dragstart);
});

colunas.forEach((colunas) => {
    colunas.addEventListener("dragover", dragover)
    colunas.addEventListener("dragenter", dragover)
}
);
