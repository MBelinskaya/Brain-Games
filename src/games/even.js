const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRound = () => {
  const question = Math.floor(Math.random() * (101 - 1)) + 1;
  const correctAnsver = (question % 2 === 0) ? 'yes' : 'no';
  return [question, correctAnsver];
};

export { rules, getRound };
