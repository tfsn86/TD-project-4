/**
 * Methods for starting and ending the game, handling interactions, getting a random phrase, checking for a win, and removing a life from the scoreboard.
 */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = ['And so the adventure begins', 
                        'Take a risk or lose the chance', 
                        'Do it with passion or not at all', 
                        'A smooth sea never made a skillful sailor', 
                        'All you need is love'];
        this.activePhrase = null; // This is the Phrase object currently in play. The initial value is null. 
    }

    startGame() {
        this.activePhrase = getRandomPhrase(); // activePhrase property will be set to the Phrase object returned from a call to the getRandomPhrase() method.
        phrase.addPhraseToDisplay(this.activePhrase);
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

    handleInteraction() {

    }

    removeLife() {

    }

    checkforWin() {

    }

    gameOver() {

    }
}