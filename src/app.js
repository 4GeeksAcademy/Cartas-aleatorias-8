import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const symbols = ["♦", "♥", "♠", "♣"];
    const numbers = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

    const randomSymbolIndex = Math.floor(Math.random() * symbols.length); // este codigo genera un numero aleatorio entre 0 y 3
    const randomNumberIndex = Math.floor(Math.random() * numbers.length); // este codigo genera un numero aleatorio entre 0 y 12

    const resultFinal = numbers[randomNumberIndex]; // este codigo genera un numero aleatorio entre 0 y 12

    document.getElementById("card").innerHTML = symbols[randomSymbolIndex]; // este codigo realiza la seleccion de la carta aleatoria
    document.getElementById("theCard").className = ""; // este codigo limpia la clase de la carta
    document.getElementById("theCard").classList.add(".card") // este codigo agrega la clase de la carta
    document.getElementById("theCard").classList.add(getSymbolsClases(resultFinal)) // este codigo agrega la clase de la carta
}

    const getSymbolsClases = (resultFinal) => {
      if (resultFinal === "Diamonds") {
        return "suit-diamonds";
      } else if (resultFinal === "Spades") {
        return "suit-spades";
      } else if (resultFinal === "Hearts") {
        return "suit-hearts";
      } else if (resultFinal === "Clubs") {
        return "suit-clubs";
      }
};
