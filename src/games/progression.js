import { getRandomInt } from '../utils.js';
import runEngine from '../index.js';

const rules = 'What number is missing in the progression?';
const minNumber = 1;
const maxNumber = 100;
const minIndexNumber = 1;
const maxIndexNumber = 9;
const minCounter = 2;
const maxCounter = 4;
const maxLength = 19;

const getRound = () => {
  const number1 = getRandomInt(minNumber, maxNumber);
  const number2 = (number1 + maxLength);
  const randomIndex = getRandomInt(minIndexNumber, maxIndexNumber);
  const counter = getRandomInt(minCounter, maxCounter);
  const misingElement = '..';

  const getProgression = () => {
    let result = '';
    let i = number1;
    while (i <= number2) {
      result = `${result} ${i}`;
      i += counter;
    }
    return result;
  };
  const progression = getProgression(number1, number2);
  const splitResult = progression.split(' ');

  const correctAnswer = splitResult.at(randomIndex);
  splitResult[randomIndex] = misingElement;
  const question = splitResult.join(' ').trim();

  return [question, correctAnswer];
};

const runProgression = () => runEngine(rules, getRound);

export default runProgression;
