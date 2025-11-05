import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

let listOfTasks = [];

async function crud() {
  let exit = false;

  while (!exit) {
    console.log('🖥️ CRUD MANAGER 🖥️');
    console.log('1. Create new task');
    console.log('2. Report of tasks');
    console.log('3. Update a task');
    console.log('4. Delete a task');
    console.log('5. Close CRUD manager');

    const choice = await rl.question('Choose an option: ');

    switch (choice) {
        case '1':
            const newTask = await rl.question('Write down your new task: ')
            listOfTasks.push(newTask)
            console.log('TASK SAVED');
            break;

        case '2':
            if( listOfTasks.length === 0 ) {
                console.log('NO TASKS PENDING 🎉');
                break;
            } 
            console.log('Current Tasks: ');
            listOfTasks.forEach((t, i) => console.log(`${i + 1}) ${t}`));
            break;

        case '3':
            if( listOfTasks.length === 0 ) {
                console.log('NO TASKS PENDING 🎉');
                break;
            } 
            console.log('Current Tasks: ');
            listOfTasks.forEach((t, i) => console.log(`${i + 1}) ${t}`));

            const taskToUpdate = Number( await rl.question('Enter the number of the task that you want UPDATE: ') ) - 1;

            if (taskToUpdate >= 0 && taskToUpdate < listOfTasks.length) {
                        
                const updatedText = await rl.question('Write the updated information for the task: ')

                listOfTasks[taskToUpdate] = updatedText

                console.log(`TASK ${taskToUpdate + 1} UPDATED`);
                

            } else {
             console.log("❌ TASK DOES NOT EXIST");
            }

            break;  

        case '4':
            if( listOfTasks.length === 0 ) {
                console.log('NO TASKS PENDING 🎉');
                break;
            } 
            console.log('Current Tasks: ');
            listOfTasks.forEach((t, i) => console.log(`${i + 1}) ${t}`));
            
            const taskToDelete = Number( await rl.question('Enter the number of the task that you want DELETE: ') ) - 1;

            listOfTasks.splice(taskToDelete, 1)
            console.log('TASK DELETED');

            break;

        case '5':
            console.log('SHUT DOWN');
            exit = true;
            break;

      default:
        console.log('❌ INVALID OPTION, PLEASE TRY AGAIN');
    }
  }

  rl.close();
}

await crud();