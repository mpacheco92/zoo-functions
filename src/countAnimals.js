const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (!animal) {
    return data.species.reduce((acc, specie) => {
      acc[specie.name] = specie.residents.length;
      return acc;
    }, {});
  } if (Object.keys(animal).length === 1) {
    return data.species.find((specie) => specie.name === Object.values(animal)[0]).residents.length;
  } if (Object.keys(animal).length > 1) {
    return data.species.find((specie) => specie.name === Object.values(animal)[0]).residents
      .filter((cur) => cur.sex === Object.values(animal)[1]).length;
  }
};

module.exports = countAnimals;
