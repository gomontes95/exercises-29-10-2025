import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const primeNumberGenerator = async() => {

    const numberOfPrimes = await rl.question('How many prime numbers do you want to generate? ')

    function generateFirstNPrimes(n) {
      if (n < 1) return [];

      
      let limit = 30;
      let primes = [];

      while (primes.length < n) {
        primes = sieveOfEratosthenes(limit);
        limit *= 2;
      }

      return primes.slice(0, n);
    }

    function sieveOfEratosthenes(limit) {
      const sieve = new Array(limit + 1).fill(true);
      sieve[0] = sieve[1] = false;

      for (let i = 2; i * i <= limit; i++) {
        if (sieve[i]) {
          for (let j = i * i; j <= limit; j += i) {
            sieve[j] = false;
          }
        }
      }

      return sieve
        .map((isPrime, i) => (isPrime ? i : null))
        .filter(Boolean);
    }

    console.log(generateFirstNPrimes(Number(numberOfPrimes)));
    
    rl.close();

}

primeNumberGenerator();