/**
 * Handles the creation of phrases.
 */

class Phrase {
    constructor (phrase) {
        this.phrase = phrase; // this is the actual phrase the Phrase object is representing. This property should be set to the phrase parameter, but converted to all lower case.
    }

    /**
    * Display phrase on game board
    */
    addPhraseToDisplay() {
        let randomPhraseArray = Array.from(game.getRandomPhrase());

        randomPhraseArray.forEach(letter => {
            let li = document.createElement('li'); 
            document.querySelector('#phrase ul').appendChild(li);
            li.innerHTML += letter;
            li.className += `hide letter ${letter}`;
        });
    }

    checkLetter () {

    }

    showMatchedLetter () {

    }
}