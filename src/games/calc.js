import { getRandomInt, calculate } from '../utils.js';
import runEngine from '../index.js';

const rules = 'What is the result of the expression?';
const minNumber = 1;
const maxNumber = 100;
const minIndexNumber = 0;
const maxIndexNumber = 3;

const getRound = () => {
  const number1 = getRandomInt(minNumber, maxNumber);
  const number2 = getRandomInt(minNumber, maxNumber);
  const randomIndex = getRandomInt(minIndexNumber, maxIndexNumber);
  const operators = [' + ', ' - ', ' * '];
  const correctAnswer = calculate(randomIndex, number1, number2);
  const question = number1 + operators[randomIndex] + number2;
  return [question, correctAnswer];
};

const runCalc = () => runEngine(rules, getRound);

export default runCalc;
