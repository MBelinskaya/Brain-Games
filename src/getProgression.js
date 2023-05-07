const getProgression = (number1, number2, counter) => {
  let result = '';
  let i = number1;
  while (i <= number2) {
    result = `${result} ${i}`;
    i += counter;
  }
  return result;
};

export default getProgression;
