const getRandomNumber = (min, max) => {
  const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomInt;
};

export default getRandomNumber;
