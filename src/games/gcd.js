import { getRandomInt, gcd } from '../utils.js';
import runEngine from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';
const minNumber = 1;
const maxNumber = 100;

const getRound = () => {
  const number1 = getRandomInt(minNumber, maxNumber);
  const number2 = getRandomInt(minNumber, maxNumber);
  const correctAnswer = gcd(number1, number2);
  const question = `${number1} ${number2}`;
  return [question, correctAnswer];
};

const runGcd = () => runEngine(rules, getRound);

export default runGcd;
