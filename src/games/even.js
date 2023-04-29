import { getRandomInt } from '../utils.js';
import runEngine from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const minNumber = 1;
const maxNumber = 100;

const getRound = () => {
  const question = getRandomInt(minNumber, maxNumber);
  const isEven = () => question % 2 === 0;
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runEven = () => runEngine(rules, getRound);

export default runEven;
