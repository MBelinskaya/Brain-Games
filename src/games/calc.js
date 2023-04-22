import getRandomInt from '../random.js';

const rules = 'What is the result of the expression?';
const randomOperation = [' + ', ' - ', ' * '];

const getRound = () => {
  const randomNumberFirst = getRandomInt();
  const randomNumberSecond = getRandomInt();
  const randomIndex = Math.floor(Math.random() * (3 - 0));
  const question = randomNumberFirst + randomOperation[randomIndex] + randomNumberSecond;

  let correctAnsver = 0;
  switch (randomOperation[randomIndex]) {
    case (' + '):
      correctAnsver = (randomNumberFirst + randomNumberSecond).toString();
      break;
    case (' - '):
      correctAnsver = (randomNumberFirst - randomNumberSecond).toString();
      break;
    case (' * '):
      correctAnsver = (randomNumberFirst * randomNumberSecond).toString();
      break;
    default:
      return question.toString();
  }
  return [question, correctAnsver];
};

export { rules, getRound };
