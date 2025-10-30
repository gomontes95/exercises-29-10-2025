// import readline from 'node:readline/promises';
// import { stdin as input, stdout as output } from 'node:process';

// const rl = readline.createInterface({ input, output });

// const reverseTheValue = async() => {
    
//     const valueToReverse = await rl.question( 'Enter what you want to reverse: ' );
//     console.log(valueToReverse.split('').reverse().join(''));
//     rl.close();
    
// }

// reverseTheValue();


let word = "hola mundo";

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

function reverseArray( arr ) {
    let reversedArray = [];
    let arrLength = lengthOf(arr);
        
    for ( let i = 0; arr[i] !== undefined; i++) {
         reversedArray[i] = arr[arrLength-1-i];
    }

    return reversedArray;
};

function combineArrToString( arr ) {
    let strVar = '';
    for ( let i = 0; arr[i] !== undefined; i++ ) {
        strVar = `${strVar}${arr[i]}` 
    } 
    return strVar
};

function consolePrint( str ) {
    process.stdout.write( str + '\n' )
};


consolePrint(word)
consolePrint(combineArrToString(reverseArray(splitStr(word))));

































consolePrint('');
consolePrint('Sorry i cant make console.log with out the built in function .write if i want to do that i need to create my hown version of js');
consolePrint('and create my own built in versions of console.log that access the terminal send the bits to interpret the text on the console');
consolePrint('for now i think this is ok 💻☕');