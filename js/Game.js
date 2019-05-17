/**
 * Methods for starting and ending the game, handling interactions, getting a random phrase, checking for a win, and removing a life from the scoreboard.
 */

class Game {
    constructor() {
        this.missed = 0; // This works as a counter for missed letter guesses
        this.phrases = ['All in', 
                        'Win or lose', 
                        'No pain no gain', 
                        'Winning', 
                        'Kind regards'];
        this.activePhrase = null; // This is the Phrase object currently in play.
    }

    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        document.querySelector('#overlay').style.display = 'none';
        document.querySelector('#btn__reset').style.display = 'none';
        this.activePhrase = new Phrase(this.getRandomPhrase());
        this.activePhrase.addPhraseToDisplay();
    }

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        let randomPhraseNumber = Math.floor(Math.random() * this.phrases.length);
        if (randomPhraseNumber === 0) {
            return this.phrases[0];
        } else if (randomPhraseNumber === 1) {
            return this.phrases[1];
        } else if (randomPhraseNumber === 2) {
            return this.phrases[2];
        } else if (randomPhraseNumber === 3) {
            return this.phrases[3];
        } else if (randomPhraseNumber === 4) {
            return this.phrases[4];
        }
    }

    /**
    * Handles display keyboard and computer keyboard guesses
    * @param - The button element
    */
    handleInteraction(button) {
        let guess = button.textContent;
        if (this.activePhrase.checkLetter(guess) === true) {
            this.activePhrase.showMatchedLetter(guess);
            button.className = 'chosen';
            if (this.checkforWin()) {
                this.gameOver(true);
            }
        } else if (this.activePhrase.checkLetter(guess) === false) {
            button.className = 'wrong';
            this.removeLife();
        }
        button.disabled = true;
    };

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        let heartLives = document.getElementsByClassName('tries');
        this.missed += 1;
        
        if (this.missed >= heartLives.length) {
            this.gameOver(false);
        }
        
        for (let i = 0; i < this.missed; i++) {
            heartLives[i].children[0].src = "images/lostHeart.png";
        }
    }

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkforWin() {
        let letterLis = document.getElementsByClassName('letter');
        let winTrack = [];

        for (let i = 0; i < letterLis.length; i++) {
            if(letterLis[i].classList.contains('hide')) {
              winTrack.push(letterLis[i]);
            }
          }

        if (winTrack.length === 0) {
            this.gameOver(true);
            return true;
        } else if (winTrack.length !== 0) {
            return false;
        }
    }

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(bool) {
        document.getElementById('overlay').style.display = '';
        let overlayDiv = document.getElementById('overlay');
        let gameOverMsg = document.getElementById('game-over-message');
        
        if (bool) {
            overlayDiv.className = 'win';
            gameOverMsg.textContent = 'You have won the game!';
        } else if (this.missed >= 5) {
            overlay.className = 'lose';
            gameOverMsg.textContent = 'You have lost the game!';
        }

        /**
         * Resets the game when one game is played on "Start game" i clicked
         */
        this.missed = 0;
        document.querySelector('#btn__reset').style.display = 'block';

        const ul = document.querySelector('#phrase ul');
        const totalLis = ul.childElementCount;
        for (let i = 0; i < totalLis; i++) {
            ul.removeChild(ul.firstElementChild);
        }
        
        const heartLivesReset = Array.from(document.querySelectorAll('.tries'));
        heartLivesReset
            .filter(item =>  !item.children[0].src.includes('liveHeart.png'))
            .map(item => item.children[0].src = item.children[0].src.replace('lostHeart.png','liveHeart.png'));
        
        const displayKeyboardReset = Array.from(document.querySelectorAll('#qwerty button'));
        displayKeyboardReset
            .filter(item => item.className !== 'key')
            .map(item => {
                item.className = 'key';
                item.disabled = false;
                });
    }
}