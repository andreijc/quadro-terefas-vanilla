const colunas = document.querySelectorAll('.cards-coluna');
const cards = document.querySelectorAll('.card');

let cardpego = null;

const dragStart = (event)=>{
    cardpego = event.target;
    event.dataTransfer.effectAllowed = "move";

};

const dragOver = (event)=> {
    event.preventDefault()

}

const dragEnter = ({target}) => {
    if (target.classList.contains("card-coluna")){
        target.classList.add("foco-coluna")
        console.log("foi")
    }

}

cards.forEach((card)=> {
    card.addEventListener("dragstart", dragStart)
    })

colunas.forEach((coluna) => {
    coluna.addEventListener("dragover", dragOver)
    coluna.addEventListener("dragenter", dragEnter)

})
