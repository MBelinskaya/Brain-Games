import getRandomNumber from '../utils.js';
import runEngine from '../index.js';

const rules = 'What is the result of the expression?';

const calculate = (operators, randomIndex, number1, number2) => {
  switch (operators[randomIndex]) {
    case (' + '):
      return (number1 + number2);
    case (' - '):
      return (number1 - number2);
    case (' * '):
      return (number1 * number2);
    default:
      throw new Error(`Unknown operators: '${operators}'!`);
  }
};

const getRound = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const randomIndex = getRandomNumber(0, 3);
  const operators = [' + ', ' - ', ' * '];
  const correctAnswer = calculate(operators, randomIndex, number1, number2).toString();
  const question = number1 + operators[randomIndex] + number2;
  return [question, correctAnswer];
};

const runCalc = () => runEngine(rules, getRound);

export default runCalc;
