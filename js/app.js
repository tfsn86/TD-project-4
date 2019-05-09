/**
 * Creates a new instance of the 'Game' class and add event listeners for the start button and onscreen keyboard buttons.
 */


let game;

let startGameBtn = document.getElementById('btn__reset');
startGameBtn.addEventListener('click', function () {
   game = new Game();
   game.startGame();
});

let phrase = new Phrase();


