import getRandomInt from '../random.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRound = () => {
  const question = getRandomInt();
  const correctAnsver = (question % 2 === 0) ? 'yes' : 'no';
  return [question, correctAnsver];
};

export { rules, getRound };
