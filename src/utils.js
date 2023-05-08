const getRandomNumber = (min, max) => {
  const randomInt = Math.floor(Math.random() * (max - min)) + min;
  return randomInt;
};

export default getRandomNumber;
