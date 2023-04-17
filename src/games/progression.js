const rules = 'What number is missing in the progression?';

const getRound = () => {
  const randomNumberFirst = Math.floor(Math.random() * (83 - 1)) + 1;
  const randomIndex = Math.floor(Math.random() * (9 - 2) + 2);
  const randomNumberSecond = (randomNumberFirst + 19);
  const counter = Math.floor(Math.random() * (4 - 2) + 2);
  let result = '';
  const element = ' .. ';

  let j = randomNumberFirst;
  while (j <= randomNumberSecond) {
    result = `${result} ${j}`;
    j += counter;
  }
  const resultArr = result.split(' ');
  const progression = resultArr.slice(0, randomIndex - 1) + element + resultArr.slice(randomIndex);
  const question = progression.replace(/,/g, ' ');
  const correctAnsver = resultArr[randomIndex - 1];

  return [question, correctAnsver];
};

export { rules, getRound };
