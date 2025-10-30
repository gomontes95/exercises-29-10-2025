import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const possibleOutcomes = [ '🪨', '📜', '✂️' ];

const rockPaperScissorsGame = async() => {

    let result;

    do {
        console.log(` 1) Rock 🪨 `);
        console.log(` 2) Paper 📜 `);
        console.log(` 3) Scissors ✂️ `);
        
        const userChoice = Number( await rl.question('Choice rock, paper or scissors: ') ) - 1 ;

        if ( possibleOutcomes[userChoice] === undefined ) {
            console.log('that is not an option, try again');
            return rockPaperScissorsGame();    
        }

        const userOutcome = possibleOutcomes[userChoice];
        console.log({ userOutcome });
        
        
        const computerOutcome = possibleOutcomes[Math.floor(Math.random() *  possibleOutcomes.length)];

        console.log({ computerOutcome });
        

        const winsAgainst = {
          '🪨': '✂️',
          '📜': '🪨',
          '✂️': '📜'
        };

        const whoWins = (user, comp) => {

            if (user === comp) {
                console.log('tie');
                return false;
            } else if (winsAgainst[user] === comp) {
                console.log('you win');
                return true;
            } else {
                console.log('you lose');
                return false;
            }
        };
        
        result = whoWins( userOutcome, computerOutcome )

    } while ( result !== true )
        
    rl.close();
};

rockPaperScissorsGame();