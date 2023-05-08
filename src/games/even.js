import getRandomNumber from '../utils.js';
import runEngine from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRound = () => {
  const question = getRandomNumber(1, 100);
  const isEven = () => question % 2 === 0;
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runEven = () => runEngine(rules, getRound);

export default runEven;
