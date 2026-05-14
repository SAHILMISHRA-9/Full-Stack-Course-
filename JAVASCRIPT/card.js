
let sum=0
let cards=[]

let hasBlackJack=false
let isAlive=false

let message=document.getElementById("message-el")
let sumel=document.getElementById("sum-el")
let cardel=document.getElementById("cards-el")

let player={
    name:"Sahil",
    chips:145
}

let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name+": $"+player.chips


function getRandomCard(){
    let randomNumber= Math.floor(Math.random()*13)+1
    if(randomNumber==1) return 11
    else if(randomNumber>10) return 10
    else return randomNumber
    
}

function startGame(){
    isAlive=true
    let fristCrad=getRandomCard()
    let secondCard=getRandomCard()
    cards=[fristCrad,secondCard]
    sum=fristCrad+secondCard
    renderGame()
}
function renderGame(){
    sumel.textContent= "Sum :" + sum
    cardel.textContent="Cards :" 
    for(let i=0;i<cards.length;i++){
        cardel.textContent+=cards[i] + " "
    }
    if(sum<21){
        message.textContent="Do you want yo draw a new card?"  
    }else if(sum===21){
        message.textContent="You've got a Blackjack!"
        hasBlackJack=true
    }else{
        message.textContent="you are out of the game"
        isAlive=false
    }    
}
function newCard(){
    if(isAlive && hasBlackJack==false){
        let card= getRandomCard()
        sum+=card
        cards.push(card)
        renderGame()
    }
    
}
