// import readlineSync from 'readline-sync';
// import { getEngine } from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRound = () => {
  const randomNumber = Math.floor(Math.random() * (101 - 1)) + 1;
  const correctAnsver = (randomNumber % 2 === 0) ? 'yes' : 'no';
  return [randomNumber, correctAnsver];
};

export { rules, getRound };
