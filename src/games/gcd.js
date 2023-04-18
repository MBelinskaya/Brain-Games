const rules = 'Find the greatest common divisor of given numbers.';

const getRound = () => {
  const randomNumberFirst = Math.floor(Math.random() * (101 - 1)) + 1;
  const randomNumberSecond = Math.floor(Math.random() * (101 - 1)) + 1;
  let correctAnsver = 0;

  for (let j = 1; j <= randomNumberFirst && j <= randomNumberSecond; j += 1) {
    if (randomNumberFirst % j === 0 && randomNumberSecond % j === 0) {
      correctAnsver = j.toString();
    }
  }
  const question = `${randomNumberFirst} ${randomNumberSecond}`;
  return [question, correctAnsver];
};

export { rules, getRound };
