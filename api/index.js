var uniq = require('lodash.uniq');

const getUniqueNumbers = () => {
  const randomNumbers = [0, 2, 5, 8, 98, 8, 55, 1, 2];
  const uniqueNumbers = uniq(randomNumbers);
  
  return uniqueNumbers;
};

module.exports = getUniqueNumbers;