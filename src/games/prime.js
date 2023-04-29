import { getRandomInt } from '../utils.js';
import runEngine from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minNumber = 1;
const maxNumber = 100;

const isPrime = (question) => {
  for (let i = 2; i < question; i += 1) {
    if (question % i === 0) {
      return false;
    }
  }
  return true;
};

const getRound = () => {
  const question = getRandomInt(minNumber, maxNumber);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runPrime = () => runEngine(rules, getRound);

export default runPrime;
