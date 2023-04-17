const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRound = () => {
  const question = Math.floor(Math.random() * (101 - 1));
  let correctAnsver = '';

  for (let j = 2; j < question; j += 1) {
    if (question % j === 0) {
      correctAnsver = 'no';
      break;
    } else {
      correctAnsver = 'yes';
    }
  }
  return [question, correctAnsver];
};

export { rules, getRound };
