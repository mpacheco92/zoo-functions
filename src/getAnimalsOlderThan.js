const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => data.species
  .find((specie) => specie.name === animal).residents
  .every((item) => item.age > age);

module.exports = getAnimalsOlderThan;
