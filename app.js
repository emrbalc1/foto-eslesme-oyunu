const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }
]

cardArray.sort(() => 0.5 - Math.random())

let resultDisplay = document.getElementById('result')
const gridDisplay = document.querySelector("#grid")
let cardChosen = []
let cardChosenIds = []
const cardWon = []

function createBoard(){
    for(let i = 0; i<cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src','images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}
createBoard()

function checkMatch(){
    const cards = document.querySelectorAll('#grid img')

    const optionOneId = cardChosenIds[0]
    const optionTwoId = cardChosenIds[1]

    if(cardChosen[0] == cardChosen[1]){
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardWon.push(cardChosen)
        
    }else{
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        
    }

    resultDisplay.textContent = cardWon.length
    cardChosen = []
    cardChosenIds = []

    if(cardWon.length == cardArray.length/2){
        resultDisplay.innerHTML = 'Tebrikler hepsini buldunuz' 
    }
}

function flipCard(){
    const cardID = this.getAttribute('data-id')
    cardChosen.push(cardArray[cardID].name)
    cardChosenIds.push(cardID)
    this.setAttribute('src', cardArray[cardID].img)
    if(cardChosen.length === 2){
        setTimeout(checkMatch, 500)
    }
}