class Game {
    constructor() {
        this.missed = 0;
        this.phrases = ['big sun', 'perfect storm', 'shitstorm', 'zebra', 'running sushi'];
        this.activePhrase = null; // This is the Phrase object currently in play. null as default. 
    }

    startGame() {
        this.activePhrase = getRandomPhrase(); // activePhrase property will be set to the Phrase object returned from a call to the getRandomPhrase() method.
        phrase.addPhraseToDisplay(this.activePhrase);
    }

    getRandomPhrase() {
        // A random phrase is seleceted. 
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