export const getRandomInt = (min, max) => {
  const randomInt = Math.floor(Math.random() * (max - min)) + min;
  return randomInt;
};

export const calculate = (randomIndex, number1, number2) => {
  const operators = [' + ', ' - ', ' * '];
  switch (operators[randomIndex]) {
    case (' + '):
      return (number1 + number2).toString();
    case (' - '):
      return (number1 - number2).toString();
    case (' * '):
      return (number1 * number2).toString();
    default:
      throw new Error(`Unknown operators: '${operators}'!`);
  }
};

export const gcd = (number1, number2) => {
  let correctAnswer = 0;
  for (let i = 1; i <= number1 && i <= number2; i += 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      correctAnswer = i.toString();
    }
  }
  return correctAnswer;
};
