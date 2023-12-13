const data = require('../data/zoo_data');

const addResidents = (options, specie) => {
  const residents = [];
  specie.residents.forEach((resident) => {
    if (!options.sex || options.sex === resident.sex) {
      residents.push(resident.name);
    }
  });

  if (options.sorted === true) {
    residents.sort((a, b) => a.localeCompare(b));
  }
  return residents;
};

const getAnimalMap = (options) => {
  const objLocations = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };

  data.species.forEach((specie) => {
    if (!options || !options.includeNames || options.includeNames === false) {
      objLocations[specie.location].push(specie.name);
    } else {
      const specieObj = {};
      specieObj[specie.name] = addResidents(options, specie);
      objLocations[specie.location].push(specieObj);
    }
  });
  return objLocations;
};

module.exports = getAnimalMap;
