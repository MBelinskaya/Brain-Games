import getRandomInt from '../random.js';

const rules = 'What number is missing in the progression?';

const getRound = () => {
  const randomNumberFirst = getRandomInt();
  const randomIndex = Math.floor(Math.random() * (9 - 2) + 2);
  const randomNumberSecond = (randomNumberFirst + 19);
  const counter = Math.floor(Math.random() * (4 - 2) + 2);
  let result = '';
  const misingElement = '..';

  let i = randomNumberFirst;
  while (i <= randomNumberSecond) {
    result = `${result} ${i}`;
    i += counter;
  }

  const splitResult = result.split(' ');
  const correctAnsver = splitResult.at(randomIndex);
  splitResult[randomIndex] = misingElement;
  const question = splitResult.join(' ').trim();

  return [question, correctAnsver];
};

export { rules, getRound };
