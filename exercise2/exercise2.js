// import readline from 'node:readline/promises';
// import { stdin as input, stdout as output } from 'node:process';

// const rl = readline.createInterface({ input, output });

// async function uniqueWordsCounter() {
//   const str = await rl.question( 'Introduce text to count your unique words: ');
  
//   function removePunctuationAndCAPS(text) {
//     const cleanedText = text.replace(/[^a-zA-Z0-9\s]/g, '');
//     return cleanedText.toLowerCase();
//   }

//   const uniqueWordsResults = new Set( 
//     removePunctuationAndCAPS(str).split(" ") 
//   );

//   console.log(`This written has ${[...uniqueWordsResults].length} `);
//   rl.close();
// }

// uniqueWordsCounter();

let text = 'Hello World, Around the world, around the world, Around the world, around the world, Around the world, around the world '

function lengthOf(str) {
  let count = 0;
  while (str[count] !== undefined) {
    count++;
  }
  return count;
};

function splitStr(str, ignore) {
    let splitResult= []
    
    for ( let i = 0; str[i] !== undefined ;i++) {

        if ( ignore === str[i] ) { 
            continue 
        }
        splitResult[lengthOf(splitResult)] = str[i];

    }
    return splitResult
};

function removeCharacters( str ) {
  
}