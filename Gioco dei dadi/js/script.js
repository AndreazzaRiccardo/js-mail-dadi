const numberPlayer = Math.round(Math.random() * 5) + 1;
const numberBot = Math.round(Math.random() * 5) + 1;;
let message = "";

if (numberPlayer < numberBot) {
    message = "Mi dispiace, hai perso"
} else if (numberPlayer > numberBot) {
    message = "Complimenti, mi hai battuto!!!"
} else if (numberPlayer === numberBot) {
    message = "Questa volta siamo pari, tiriamo ancora!"
}

document.querySelector("h1").innerHTML = message;
const dicePlayer = document.getElementById("player");
const diceBot = document.getElementById("bot");

if(numberBot === 1) {
    diceBot.classList.add("one")
} else if (numberBot === 2) {
    diceBot.classList.add("two")
} else if (numberBot === 3) {
    diceBot.classList.add("three")
} else if (numberBot === 4) {
    diceBot.classList.add("four")
} else if (numberBot === 5) {
    diceBot.classList.add("five")
} else if (numberBot === 6) {
    diceBot.classList.add("six")
}

if(numberPlayer === 1) {
    dicePlayer.classList.add("one")
} else if (numberPlayer === 2) {
    dicePlayer.classList.add("two")
} else if (numberPlayer === 3) {
    dicePlayer.classList.add("three")
} else if (numberPlayer === 4) {
    dicePlayer.classList.add("four")
} else if (numberPlayer === 5) {
    dicePlayer.classList.add("five")
} else if (numberPlayer === 6) {
    dicePlayer.classList.add("six")
}

const play = document.getElementById("go");

play.addEventListener("click", function(){
    window.location.reload();
})

