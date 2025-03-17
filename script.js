const colunas = document.querySelectorAll(".cards-colunas");
const cartão = document.querySelectorAll(".card")

let draggedcard;

const dragstart = (event) => {
    draggedcard = event.target;
    console.log(draggedcard)
    
}

const dragover = (event) => {
    event.preventDefault()
}

cartão.forEach((cartão) => {
    cartão.addEventListener("dragstart", dragstart());
});

colunas.forEach((colunas => {
    colunas.addEventListener("dragover", )}))