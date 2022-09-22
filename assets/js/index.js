/* Variables declaration */
let player1current = 0;
let player2current = 0;
let player1global = 0;
let player2global = 0;
let tab = ["/assets/img/1.JPG", "/assets/img/2.JPG", "/assets/img/3.JPG", "/assets/img/4.JPG", "/assets/img/5.JPG", "/assets/img/6.JPG"];
var player = "p1";

/* Variables of DOM objects declaration */
var new_game = document.getElementById('reset');
var roll = document.getElementById('roll');
var hold = document.getElementById('hold');
var win = document.getElementById('win');
var pointP1 = document.getElementById('point-p1');
var pointP2 = document.getElementById('point-p2');
var globalP1 = document.getElementById('global-p1');
var globalP2 = document.getElementById('global-p2');
var currentP1 = document.getElementById('current-p1');
var currentP2 = document.getElementById('current-p2');
var dice = document.getElementById('dice');

const music = new Audio('/assets/sounds/win.wav');

/* functions used in the script */
function generateRandomInt() {
    return Math.floor(Math.random() * 6 + 1);
  } 

function newGame() {
    player1current = 0;
    player2current = 0;
    player1global = 0;
    player2global = 0;
    currentP1.innerHTML = "0";
    globalP1.innerHTML = "0";
    currentP2.innerHTML = "0";
    globalP2.innerHTML = "0";
    pointP1.style.display = "block";
    pointP2.style.display = "none";
    player = "p1";
    win.style.display = "none";
    roll.style.display = "block";
    hold.style.display = "block";
}

function victory() {
    win.style.display = "block";
    if (player === "p1") {
        win.innerHTML = 'Player 1 win! Press NEW GAME to restart';
    } else if(player === "p2") {
        win.innerHTML = 'Player 2 win! Press NEW GAME to restart';
    }
    roll.style.display = "none";
    hold.style.display = "none";
    music.play();
} 

/* click functions */

new_game.addEventListener("click", () => {
    newGame();
})

roll.addEventListener("click", () => {
    
    generatedInt = generateRandomInt();
    dice.src = tab[generatedInt - 1];

    if (player === "p1") {

        if (generatedInt === 1) {
            player1current = 0;
            currentP1.innerHTML = "0";
            pointP1.style.display = "none";
            pointP2.style.display = "block";
            player = "p2";
        } else {
            player1current = player1current + generatedInt;
            currentP1.innerHTML = player1current;
        }

    } 
    else if(player === "p2") {

        if (generatedInt === 1) {
            player2current = 0;
            currentP2.innerHTML = "0";
            pointP1.style.display = "block";
            pointP2.style.display = "none";
            player = "p1";
        } else {
            player2current = player2current + generatedInt;
            currentP2.innerHTML = player2current;
        } 
    }
})

hold.addEventListener("click", () => {
    if (player === "p1") {
        player1global = player1global + player1current;
        globalP1.innerHTML = player1global;
        player1current = 0;
        currentP1.innerHTML = "0";
        pointP1.style.display = "none";
        pointP2.style.display = "block";
        if (player1global >= 100) {
            victory();
        }
        player = "p2";
    } 
    else if(player === "p2") {
        player2global = player2global + player2current;
        globalP2.innerHTML = player2global;
        player2current = 0;
        currentP2.innerHTML = "0";
        pointP1.style.display = "block";
        pointP2.style.display = "none";
        if (player2global >= 100) {
            victory();
        }
        player = "p1";
    }
})

