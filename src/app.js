import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
    const symbols = ["♦", "♥", "♠", "♣"];
    const numbers = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

    const randomSymbolIndex = Math.floor(Math.random() * symbols.length); 
    const randomNumberIndex = Math.floor(Math.random() * numbers.length); 
     
    const randomSymbol = symbols[randomSymbolIndex]
    const randomNumber = numbers[randomNumberIndex]; 

    document.getElementById("cardContent").innerHTML = randomNumber;

    const theCardE1 = document.getElementById("theCard")
    theCardE1.className = "";
    theCardE1.classList.add("card-body") 
    theCardE1.classList.add(getSymbolsClases(randomSymbol))

}

    // esta funcion
    const getSymbolsClases = (symbol) => {
      if (symbol === "♦") {
        return "suit-diamonds";
      } else if (symbol === "♠") {
        return "suit-spades";
      } else if (symbol === "♥") {
        return "suit-hearts";
      } else if (symbol === "♣") {
        return "suit-clubs";
      }
    };
