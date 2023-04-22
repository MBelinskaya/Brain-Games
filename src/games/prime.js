import getRandomInt from '../random.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRound = () => {
  const question = getRandomInt();
  let correctAnsver = '';

  for (let i = 2; i < question; i += 1) {
    if (question % i === 0) {
      correctAnsver = 'no';
      break;
    } else {
      correctAnsver = 'yes';
    }
  }
  return [question, correctAnsver];
};

export { rules, getRound };
