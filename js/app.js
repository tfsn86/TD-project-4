/**
 * Creates a new instance of the 'Game' class and add event listeners for the start button and onscreen keyboard buttons.
 */
let game = new Game();
let startGameBtn = document.getElementById('btn__reset');
startGameBtn.addEventListener('click', function () {
   game.startGame();
});

/**
 * Listens for a click on any of the onscreen buttons.
 */
const displayKeyboard = document.getElementsByClassName('key');
    for (let i = 0; i < displayKeyboard.length; i++) {
        displayKeyboard[i].addEventListener("click", function(event) {
            game.handleInteraction(event.target);
            });
    }

/**
 * Listens for a click on the onscreen buttons to enter letter guess
 */
let buttonArray = Array.from(document.querySelectorAll('#qwerty button'));
buttonArray.forEach((item) => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        game.handleInteraction(event.target);
    })
});

/**
 * Listens for a keypress to enter letter guess
 */
let keyboard_letters = document;
keyboard_letters.addEventListener('keypress',function(event) {
        const guess = buttonArray.filter(item => item.textContent === event.key);
        if (guess[0].className == 'key') {
            game.handleInteraction(guess[0]);
        }
});