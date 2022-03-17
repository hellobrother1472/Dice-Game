var a = Math.random() * 6;
var diceOne = Math.floor(a + 1);
var img1 = "images/dice" + diceOne + ".png";

var b = Math.random() * 6;
var diceTwo = Math.floor(b + 1);
var img2 = "images/dice" + diceTwo + ".png";

document.querySelector("#one").src = img1; 
document.querySelector("#two").src = img2;

if (diceOne > diceTwo) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
}
else if(diceTwo > diceOne) {
    document.querySelector("h1").innerHTML = "🚩 Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML = "Tie, Try Again";
}