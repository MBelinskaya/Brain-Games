import getRandomNumber from '../utils.js';
import runEngine from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (question) => {
  if (question <= 1) {
    return false;
  }
  for (let i = 2; i < question; i += 1) {
    if (question % i === 0) {
      return false;
    }
  }
  return true;
};

const getRound = () => {
  const question = getRandomNumber(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const runPrime = () => runEngine(rules, getRound);

export default runPrime;
