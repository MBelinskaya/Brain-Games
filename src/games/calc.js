import getRandomNumber from '../utils.js';
import runEngine from '../index.js';

const rules = 'What is the result of the expression?';

const calculate = (operator, number1, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown operators: '${operator}'!`);
  }
};

const getRound = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const operators = ['+', '-', '*'];
  const randomIndex = getRandomNumber(0, operators.length - 1);
  const operator = operators[randomIndex];
  const answer = calculate(operator, number1, number2).toString();
  const question = `${number1} ${operator} ${number2}`;
  return [question, answer];
};

const runCalc = () => runEngine(rules, getRound);

export default runCalc;
