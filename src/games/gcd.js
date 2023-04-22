import getRandomInt from '../random.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getRound = () => {
  const randomNumberFirst = getRandomInt();
  const randomNumberSecond = getRandomInt();
  let correctAnsver = 0;

  for (let i = 1; i <= randomNumberFirst && i <= randomNumberSecond; i += 1) {
    if (randomNumberFirst % i === 0 && randomNumberSecond % i === 0) {
      correctAnsver = i.toString();
    }
  }
  const question = `${randomNumberFirst} ${randomNumberSecond}`;
  return [question, correctAnsver];
};

export { rules, getRound };
