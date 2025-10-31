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

const lowercases = 'abcdefghijklmnopqrstuvwxyz123456789' ;
const uppercases = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789' ;
const punctuationMarks = '`"!?,.;:()[]{}-—*_/><+=$#@%&`~...<>>';

const lwCases = splitStr(lowercases);
const upCases = splitStr(uppercases);
const marks = splitStr(punctuationMarks); 

function lengthOf(str) {
  let count = 0;
  while (str[count] !== undefined) {
    count++;
  }
  return count;
};

function separeteBy(str, value) {
  let newArr = [];
  let result = [];

  for (let i = 0; i < lengthOf(splitStr(str))-1; i++) {
    
    if ( str[i] !== value ) {
      newArr[lengthOf(newArr)] = str[i];
    } else if ( str[i] === value ) {
        result[lengthOf(result)] = combineArrToString(newArr);
        newArr = [];
    }
  }

  return result;
}

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

function combineArrToString( arr ) {
    let strVar = '';
    for ( let i = 0; arr[i] !== undefined; i++ ) {
        strVar = `${strVar}${arr[i]}` 
    } 
    return strVar
};

function removeCharacters( str, regex ) {
  
  let charToCheck = splitStr(str);
  let newArr = [];
  
  for (let i = 0; i < lengthOf(charToCheck)-1; i++) {
    let j = 0;
    do {
      if ( charToCheck[i] === regex[j] ) {

        charToCheck[i] = null;
      }
        j++
    } while (regex[j] !== undefined )
  }

  for (let i = 0; i < lengthOf(charToCheck)-1; i++) {
    
    if ( charToCheck[i] !== null ) {

      newArr[lengthOf(newArr)] = charToCheck[i]
    }
  }

  let evaluatedStr = combineArrToString(newArr);
  return evaluatedStr
}

function replaceToLowercases(str) {
  let charToCheck = splitStr(str)
  for (let i = 0; i < lengthOf(charToCheck)-1; i++) {
    let j = 0;
    do {
        if ( charToCheck[i] === upCases[j]) {
          charToCheck[i] = lowercases[j]
        };
      j++
    } while ( upCases[j] !== undefined )
  }
  let newString = combineArrToString(charToCheck);
  return newString;
}

// function removeDuplicates(str) {
//   let arrCopy = separeteBy(str, ' ');
  
  
//   let newArr = [];

//   for (let i = 0; i < lengthOf(arrCopy); i++) {    

//     let j = 0;
//     console.log(lengthOf(newArr));
//     let check = true
    
//     do {
//       if ( check === true ) {
        
//         let limit = lengthOf(newArr);
//         do {
//           console.log(arrCopy[i], newArr[j]);
//           console.log({j});
//           console.log(lengthOf(newArr));
//           if ( limit <= lengthOf(newArr)) { limit++}
//           if ( arrCopy[i] !== newArr[j]) {
//             check = false;
//           }
//             j++
//          } while(j < limit)

//       }
        
//       if ( check === false) {
//         newArr[lengthOf(newArr)] = arrCopy[i]
//         console.log({ newArr });
//       }
      
//       continue
//     } while ( check === true );     
    
//   }

//   let result = combineArrToString(newArr);
//   return result;
// }

function removeDuplicates(str) {
  let arrCopy = separeteBy(str, ' ');
  let newArr = [];

  for (let i = 0; i < lengthOf(arrCopy); i++) {
    let j = 0;
    let exists = false;

    
    while (j < lengthOf(newArr)) {
      if (arrCopy[i] === newArr[j]) {
        exists = true;
        break;
      }
      j++;
    }
    
    if (exists === false) {
      newArr[lengthOf(newArr)] = arrCopy[i];
    }
  }

  for (let i = 1; i < lengthOf(newArr); i++) {
    newArr[i] = ` ${newArr[i]}`
  }
  let result = combineArrToString(newArr);
  return result;
}

let yourText = 'Hello World, Around the world. ! @'

const textCleaned = removeDuplicates(replaceToLowercases(removeCharacters(yourText, marks)));

