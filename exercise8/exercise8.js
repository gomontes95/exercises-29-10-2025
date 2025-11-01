import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const bubbleSort = async() => {

    const inputToCreateArray = await rl.question('Introduce the numbers you want to sort: ');

    const beforeSorting = inputToCreateArray.split(" ").filter(input => input !== '').map(Number);
    
    if ( !beforeSorting.every(item => !isNaN( Number(item) ) ) ) { 
        console.log('The search value needs to be a number')
        return bubbleSort();
    }

    console.table({ beforeSorting });
    
    const sortedArray = beforeSorting.sort((a, b) => a - b);
    console.table({ sortedArray });
 
    rl.close();
}

bubbleSort();