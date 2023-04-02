const getRandomInt = () => {
  const randomInt = Math.floor(Math.random() * (101 - 1)) + 1;
  return randomInt;
};

export default getRandomInt;
