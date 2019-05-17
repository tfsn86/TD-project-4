/**
 * Handles the creation of phrases.
 */

class Phrase {
    constructor (phrase) {
        this.phrase = phrase.toLowerCase(); // This is the actual phrase the Phrase object is representing converted to lower case
    }

    /**
    * Display phrase on game board
    */
   addPhraseToDisplay() {
        const letters = this.phrase.split('');
        const ul = document.getElementById('phrase').firstElementChild;

        letters.forEach(char => {
        const li = document.createElement('li');
        li.textContent = char;
        if (char !== ' ') {
            li.className = `hide letter ${char}`;
        } else {
            li.className = `hide space`;
        }
        ul.append(li);
        }); 
    }

    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter (letterGuess) {
            if (this.phrase.includes(letterGuess)) {
                return true;
            } else {
                return false;
            }
    }

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter (letterGuess) {
        let liPhrase = document.querySelectorAll('#phrase ul li');
    
        liPhrase.forEach(liLetter => {
            if (liLetter.textContent === letterGuess) {
                let li = document.querySelector('.hide.letter.' + letterGuess);   
                li.className = `show letter ${letterGuess}`;
            }
        });
    }
}