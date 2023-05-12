import getRandomNumber from '../utils.js';
import runEngine from '../index.js';

const rules = 'What number is missing in the progression?';

const getProgression = (start, length, step) => {
  const result = [];
  for (let i = start; result.length < length; i += step) {
    result.push(i);
  }
  return result;
};

const getRound = () => {
  const start = getRandomNumber(1, 100);
  const progressionLength = 10;
  const step = getRandomNumber(2, 4);
  const progression = getProgression(start, progressionLength, step);
  const hiddenIndex = getRandomNumber(1, progression.length - 1);
  const answer = progression[hiddenIndex].toString();
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

const runProgression = () => runEngine(rules, getRound);

export default runProgression;
