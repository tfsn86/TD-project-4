/**
 * Handles the creation of phrases.
 */

class Phrase {
    constructor (phrase) {
        this.phrase = phrase.toLowerCase(); // this is the actual phrase the Phrase object is representing. This property should be set to the phrase parameter, but converted to all lower case.
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
        let liPhrase = document.querySelectorAll('#phrase ul li');
        
        for (let i = 0; i < liPhrase.length; i++) {
            if (liPhrase[i].textContent === letterGuess) {
                this.showMatchedLetter(liPhrase[i]);
            }
            
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


// const displayKeyboard = document.getElementsByClassName('key');
//         for (let i = 0; i < displayKeyboard.length; i++) {
//         displayKeyboard[i].addEventListener("click", function(event) {
//         console.log(event.target.textContent);
//         });
//         }


