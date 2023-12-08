const data = require('../data/zoo_data');

const foundEmployee = (obj) => data.employees.find((employee) =>
  employee.id === obj.id || employee.firstName === obj.name || employee.lastName === obj.name);

const returnArrayBySpecie = (employee, specieProperty) => data.species
  .reduce((arr, specie) => {
    if (employee.responsibleFor.includes(specie.id)) {
      arr.push(specie[specieProperty]);
    }
    return arr;
  }, []);

const createObj = () => (
  data.employees.map((employee) => ({
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: returnArrayBySpecie(employee, 'name'),
    locations: returnArrayBySpecie(employee, 'location'),
  })));

const getEmployeesCoverage = (obj) => {
  if (!obj) return createObj();
  const employee = foundEmployee(obj);
  if (!employee) {
    throw new Error('Informações inválidas');
  }

  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: returnArrayBySpecie(employee, 'name'),
    locations: returnArrayBySpecie(employee, 'location'),
  };
};

module.exports = getEmployeesCoverage;
