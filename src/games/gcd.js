import getRandomNumber from '../utils.js';
import runEngine from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const gcd = (number1, number2) => {
  let correctAnswer = 0;
  for (let i = 1; i <= number1 && i <= number2; i += 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      correctAnswer = i.toString();
    }
  }
  return correctAnswer;
};

const getRound = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const correctAnswer = gcd(number1, number2);
  const question = `${number1} ${number2}`;
  return [question, correctAnswer];
};

const runGcd = () => runEngine(rules, getRound);

export default runGcd;
