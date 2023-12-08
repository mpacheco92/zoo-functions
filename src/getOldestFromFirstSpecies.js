const data = require('../data/zoo_data');

const foundEmployee = (id) => data.employees.find((employee) => employee.id === id);

const getOldestFromFirstSpecies = (id) => {
  const foundEmpl = foundEmployee(id);
  const firstSpecie = foundEmpl.responsibleFor[0];
  return data.species
    .find((specie) => specie.id === firstSpecie).residents
    .reduce((arr, resident) => {
      if (!arr || arr.length === 0 || resident.age > arr[2]) {
        return [resident.name, resident.sex, resident.age];
      }
      return arr;
    }, []);
};

module.exports = getOldestFromFirstSpecies;
