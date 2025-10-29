   import chalk from 'chalk';

//! Dejo esto comentado como algo que hice primero porque no entendi bien la tarea, es más un organizador de un array que junta dos valores proximos. 

//const chainedValues = [ '(', ')', '{', '}', '[', ']' ]

// const results = [];

// const validateParentheses = ( item ) => { 
//     let i = 0;

//     do {
//         let newValues = `${chainValues[i++] + (chainValues[i++])}`;
//         item.push(newValues);
//     } while (i < chainValues.length)

//     return item;
// }
// const parentheses = validateParentheses(results)
// console.table({ parentheses })

const validateParentheses = (input) => {
    const values = [];
    const chainedValues = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for ( let char of input) {
        if ( ['(', '{', '['].includes(char)) {
            values.push(char);
        } else if ( chainedValues[char] ) {
            console.table({ values, char });            
            if (values.pop() !== chainedValues[char]) {
                console.log(chalk.red( 'Parentheses are in incorrect order') );
                return false;
            }
        }
    }

    if ( values.length === 0 ) {
        console.log(chalk.green( 'Parentheses are valid' ) );
        return true;
    }
};

console.log(validateParentheses("{}[]()"))
console.log(validateParentheses("([{}])"))
console.log(validateParentheses(")({}]["))
console.log(validateParentheses("({][(}"))