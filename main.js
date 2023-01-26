// let firstCard= getRandomCard();
// let secondCard= getRandomCard();
// let cardsArr= [firstCard, secondCard];
// let sum= firstCard + secondCard;
let player={
    name: "Sammy",
    chips: 170
}
let cardsArr= [];
let sum= 0;
let hasBlackJack= false;
let isalive= false;
let message= "";

// let sumEL= document.getElementById("sum-el");
let messageEl= document.querySelector("#message-el");
let sumEL= document.querySelector("#sum-el");
let cardsEl= document.querySelector("#cards-el");
let playerEl= document.getElementById("player-el");
playerEl.textContent= player.name + ": $ " + player.chips;

console.log(cardsArr);

function getRandomCard(){
    let randomNumber= Math.floor( Math.random()*13) + 1;
    if(randomNumber > 10){
        return 10;
    }else if(randomNumber ===1){
        return 11;
    }else{
        return randomNumber;
    }
}

function startGame(){
    isalive= true;
    let firstCard= getRandomCard();
    let secondCard= getRandomCard();
    cardsArr= [firstCard, secondCard];
    sum= firstCard + secondCard;
    playGame();
}

function playGame(){
    cardsEl.textContent = "cards: "  
        //for loop array
        for(let i=0; i < cardsArr.length; i++){
            cardsEl.textContent += cardsArr[i] + " "; 
        }
        console.log(cardsArr);
        sumEL.textContent = "sum: " + sum;

    if(sum <= 20){
        message= "Do you want to draw a new card?";
    }else if(sum ===21){
        message= "You have a blackjack";
        hasBlackJack= true;
    }else{
        message="You lost the game!"
        isalive= false;
    }
    console.log(message);
    messageEl.textContent= message;
}

function newCard(){
    if(isalive === true && hasBlackJack === false){
        let card= getRandomCard();
        sum += card;
        cardsArr.push(card);
        // console.log(card);
        playGame();
    }
    
}