import readlineSync from 'readline-sync';
import getRandomInt from '../random.js';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!\nWhat is the result of the expression?`);

const congratulations = `Congratulations, ${userName}!`;
const randomOperation = [' + ', ' - ', ' * '];

const calculator = () => {
  let i = 1;
  while (i <= 3) {
    const randomNumberFirst = getRandomInt();
    const randomNumberSecond = getRandomInt();
    const randomIndex = Math.floor(Math.random() * (3 - 0)) + 0;
    const qestion = randomNumberFirst + randomOperation[randomIndex] + randomNumberSecond;
    console.log(`Question: ${qestion}`);
    const userAnsver = readlineSync.question('Your answer: ');
    let result = 0;

    switch (randomOperation[randomIndex]) {
      case (' + '):
        result = (randomNumberFirst + randomNumberSecond).toString();
        break;
      case (' - '):
        result = (randomNumberFirst - randomNumberSecond).toString();
        break;
      case (' * '):
        result = (randomNumberFirst * randomNumberSecond).toString();
        break;
      default:
        return result.toString();
    }

    if (result === userAnsver) {
      console.log('Correct!');
    } else if (result !== userAnsver) {
      console.log(`'${userAnsver}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${userName}!`);
      break;
    }
    i += 1;
    if (i === 4) {
      console.log(congratulations);
    }
  }
};

calculator();
