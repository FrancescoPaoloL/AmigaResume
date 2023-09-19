const min = 1000000;
const max = 2050000;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

document.getElementById("random-number").textContent = randomNumber;