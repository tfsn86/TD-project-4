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
        let activePhraseArray = Array.from(game.activePhrase);

        activePhraseArray.forEach(letter => {
            let li = document.createElement('li'); 
            document.querySelector('#phrase ul').appendChild(li);
            li.innerHTML += letter;
            
            let letterRgx = /^[A-Za-z]+$/;
            if (letter.match(letterRgx)) {
                li.className += `hide letter ${letter}`;
            } else if (li.innerHTML === ' ') {
                li.className += 'hide space';
            }
        });
    }

    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter (letterGuess) {
        let liPhrase = document.querySelectorAll('#phrase ul li');
        
        liPhrase.forEach(liLetter => {
            if (liLetter.textContent === letterGuess) {
                return true;
            } else {
                return false;
            }
        });
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


// const displayKeyboard = document.getElementsByClassName('key');
//         for (let i = 0; i < displayKeyboard.length; i++) {
//         displayKeyboard[i].addEventListener("click", function(event) {
//         console.log(event.target.textContent);
//         });
//         }


