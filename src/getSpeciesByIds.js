const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  if (ids.length === 0) return [];
  return data.species.filter((specie) => ids.includes(specie.id));
};

getSpeciesByIds();

module.exports = getSpeciesByIds;
