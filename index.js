class Card {
    constructor (suit,value){
        this.value = value;
        this.suit = suit;
       
    }
    describe(){
        return `${this.value} of ${this.suit}`
    }
}

class Deck {

    constructor(){  
    this.deck = [];   
    }

    createDeck(value,suits) {
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < value.length; j++) {
                
            this.deck.push(new Card(suits[i],value[j]).describe());
            }
            
         }
         return this.deck;
    }

    shuffleDeck(){
        let counter = this.deck.length, temp, i;
        while(counter) {
            i = Math.floor(Math.random()* counter--);
            temp = this.deck[counter];
            this.deck[counter] = this.deck[i];
            this.deck[i] = temp;
        }

	return this.deck
    }	

    deal(){ 

        let player1Name = window.prompt("Please enter your name?")

        window.alert(`Hello ${player1Name} you will be playing against the Computer today`)

        let player1Hand = [];
        let player2Hand = [];
        for (let i = 0; i < this.deck.length; i++){
          if( i % 2 == 0){
          player1Hand.push(this.deck[i])
          } else if (i % 2 == 1){
           player2Hand.push(this.deck[i])}
          }
         
        
        console.log(player1Hand)
        console.log(player2Hand)


       
            let player1HandValue = [];
            let player2HandValue = [];
            for (let i = 0; i < player1Hand.length; i++){
                if (player1Hand[i].startsWith("2")){
                    player1HandValue.push(2)
                } else if (player1Hand[i].startsWith("3")){
                    player1HandValue.push(3)
                } else if (player1Hand[i].startsWith("4")){
                    player1HandValue.push(4)
                } else if (player1Hand[i].startsWith("5")){
                    player1HandValue.push(5)
                } else if (player1Hand[i].startsWith("6")){
                    player1HandValue.push(6)
                } else if (player1Hand[i].startsWith("7")){
                    player1HandValue.push(7)
                } else if (player1Hand[i].startsWith("8")){
                    player1HandValue.push(8)
                } else if (player1Hand[i].startsWith("9")){
                    player1HandValue.push(9)
                } else if (player1Hand[i].startsWith("10")){
                    player1HandValue.push(10)
                } else if (player1Hand[i].startsWith("Jack")){
                    player1HandValue.push(11)
                } else if (player1Hand[i].startsWith("Queen")){
                    player1HandValue.push(12)
                } else if (player1Hand[i].startsWith("King")){
                    player1HandValue.push(13)
                } else if (player1Hand[i].startsWith("Ace")){
                    player1HandValue.push(14)
                } 
            }

            for (let j = 0; j < player2Hand.length; j++){
                if (player2Hand[j].startsWith("2")){
                    player2HandValue.push(2)
                } else if (player2Hand[j].startsWith("3")){
                    player2HandValue.push(3)
                } else if (player2Hand[j].startsWith("4")){
                    player2HandValue.push(4)
                } else if (player2Hand[j].startsWith("5")){
                    player2HandValue.push(5)
                } else if (player2Hand[j].startsWith("6")){
                    player2HandValue.push(6)
                } else if (player2Hand[j].startsWith("7")){
                    player2HandValue.push(7)
                } else if (player2Hand[j].startsWith("8")){
                    player2HandValue.push(8)
                } else if (player2Hand[j].startsWith("9")){
                    player2HandValue.push(9)
                } else if (player2Hand[j].startsWith("10")){
                    player2HandValue.push(10)
                } else if (player2Hand[j].startsWith("Jack")){
                    player2HandValue.push(11)
                } else if (player2Hand[j].startsWith("Queen")){
                    player2HandValue.push(12)
                } else if (player2Hand[j].startsWith("King")){
                    player2HandValue.push(13)
                } else if (player2Hand[j].startsWith("Ace")){
                    player2HandValue.push(14)
                } 
            }
        
                
                let player1Score = 0;
                let player2Score = 0;
                for (let i = 0; i < player1HandValue.length; i++){
                    if (player1HandValue[i] > player2HandValue[i]){
                        player1Score ++
                        window.alert(`Hand ${i + 1} : ${player1Name} drew a ${player1Hand[i]} and 
                        the Computer drew a ${player2Hand[i]}. ${player1Name} wins`)
                    } else if (player1HandValue[i] < player2HandValue[i]){
                        player2Score ++
                        window.alert(`Hand ${i + 1} : ${player1Name} drew a ${player2Hand[i]} and 
                        the Computer drew a ${player1Hand[i]}. the Computer wins`)
                    } else if (player1HandValue[i] = player2HandValue[i]){
                        window.alert(`Hand ${i + 1} : ${player1Name} drew a ${player1Hand[i]} and 
                        the Computer drew a ${player2Hand[i]}. It's a tie.`)
                    }
                }
                if (player1Score > player2Score){
                    return window.alert(`${player1Name} wins with a score of ${player1Score} to ${player2Score}`)
                } else if (player1Score < player2Score){
                    return window.alert(`the Computer wins with a score of ${player2Score} to ${player1Score}`)
                } else return window.alert("It'sa tie!!!")
        
   }
}


   

 
const values = ["2","3","4","5","6","7","8","9","10","Jack","Queen","King","Ace"];
const suits = ["Hearts","Diamonds","Clubs","Spades"]

class game {
    constructor(deck) {
        this.deck = new Deck();
        this.deck.createDeck(values, suits);
        this.deck.shuffleDeck();
        this.deck.deal();
      
    }
}
new game(1);









