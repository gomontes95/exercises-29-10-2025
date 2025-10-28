import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

function cesarCipher(text, shift) {
  return text
    .toUpperCase()
    .replace(/[A-Z]/g, letter =>
      String.fromCharCode(
        (letter.charCodeAt(0) - 65 + shift) % 26 + 65
      )
    );
}

async function cipherUserText() { 
    const userText = await rl.question( 'Enter your text to cipher: ');
    let userShift;
    do { 
        userShift = Number( await rl.question( 'Enter your quantity to shift the cipher: ') );
        if (isNaN(userShift) ) { 
            console.log('the shift needs to be a number') 
        };
    } while ( isNaN(userShift) )

    console.log( cesarCipher( userText, userShift) );
    rl.close();

}

cipherUserText();