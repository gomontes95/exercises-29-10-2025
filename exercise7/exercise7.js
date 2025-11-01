import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const binarieSearch = (arr, x) => {

    let start = 0, end = arr.length - 1;

    const numbArr = arr.map(Number);
    const search = Number(x);

    while (start <= end) {

        let mid = Math.floor((start + end) / 2);

        if (numbArr[mid] === search) return console.log( `found ${search} is on index ${numbArr.indexOf(search)}` );

        else if (numbArr[mid] < search)
            start = mid + 1;
        else
            end = mid - 1;
    }

    return console.log('not found');
    ;
}

const searchForXNumber = async() => {

    const searchValue = await rl.question('Introduce the value you want to found: ')

    if ( isNaN(searchValue) ) { 
        console.log('The search value needs to be a number')
        return searchForXNumber();
    }
    
    const inputToCreateArray = await rl.question('introduce the numbers you want to be the date base for the search: ');


    const inputCleaned = inputToCreateArray.replace(/[^0-9. ]/g, '').split(" ");
    const arrayInput = [ ...new Set(inputCleaned.filter(input => input !== '').sort((a, b) => a - b) ) ];
    console.log(arrayInput);
    
    binarieSearch(arrayInput, searchValue);

    
    rl.close();
}

searchForXNumber();