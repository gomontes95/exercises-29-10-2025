import readline from 'node:readline/promises'; 
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const iterativeFactorial = ( num ) => {
    let n = num-1;
    let factorial = num * n--;
    do {
        factorial = factorial * n--
      }  while (n > 1)

    return console.log({factorial});
}

function fibonacciSequence(n) {
  const fibonacciSeq = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibonacciSeq[i] = fibonacciSeq[i - 1] + fibonacciSeq[i - 2];
  }
  fibonacciSeq.splice(1, 1)
  return console.table({ fibonacciSeq });
}


const factorialCalculator = async() => {
    const input = await rl.question ('Introducte the number you want to factorize: ')

    if (isNaN(input) ) { 
        console.log('You introduce something that is not a number please enter a number to continue');
        return factorialCalculator();
    }

    iterativeFactorial(input);
    fibonacciSequence(input);

    rl.close();
}
 
factorialCalculator();