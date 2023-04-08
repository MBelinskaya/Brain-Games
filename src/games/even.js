import readlineSync from 'readline-sync';
import getRandomInt from '../random.js';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!\nAnswer "yes" if the number is even, otherwise answer "no".`);

const congratulations = `Congratulations, ${userName}!`;
const roundCount = 3;

const parityСheck = () => {
  let i = 1;
  while (i <= roundCount) {
    const randomNumber = getRandomInt();
    console.log(`Question: ${randomNumber}`);
    const userAnsver = readlineSync.question('Your answer: ');
    if (randomNumber % 2 === 0) {
      if (userAnsver === 'yes') {
        console.log('Correct!');
      } else if (userAnsver === 'no') {
        console.log(`'${userAnsver}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`);
        break;
      }
    } else if (randomNumber % 2 !== 0) {
      if (userAnsver === 'no') {
        console.log('Correct!');
      } else if (userAnsver === 'yes') {
        console.log(`'${userAnsver}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
        break;
      }
    }
    i += 1;
    if (i === 4) {
      console.log(congratulations);
    }
  }
};
parityСheck();
