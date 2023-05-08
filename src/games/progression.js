import getRandomNumber from '../utils.js';
import runEngine from '../index.js';

const rules = 'What number is missing in the progression?';

const minCounter = 2;
const maxCounter = 4;
const maxLength = 19;

const getProgression = (start, length, step) => {
  const result = [];
  let i = start;
  while (i <= length) {
    result.push(i);
    i += step;
  }
  return result;
};

const getRound = () => {
  const start = getRandomNumber(1, 100);
  const length = (start + maxLength);
  const step = getRandomNumber(minCounter, maxCounter);
  const misingElement = '..';
  const progression = getProgression(start, length, step);
  const randomIndex = getRandomNumber(1, progression.length - 1);
  const correctAnswer = progression[randomIndex].toString();
  progression[randomIndex] = misingElement;
  const question = progression.join(' ');

  return [question, correctAnswer];
};

const runProgression = () => runEngine(rules, getRound);

export default runProgression;
