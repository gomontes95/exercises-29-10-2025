import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const reverseTheValue = async() => {
    
    const valueToReverse = await rl.question( 'Enter what you want to reverse: ' );
    console.log(valueToReverse.split('').reverse().join(''));
    rl.close();
    
}

reverseTheValue();
