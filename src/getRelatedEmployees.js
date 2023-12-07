const data = require('../data/zoo_data');

const isManager = (id) => {
  if (data.employees.find((employee) => employee.managers.includes(id))) {
    return true;
  } return false;
};

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId)) {
    const arraySubOfManager = [];
    data.employees.forEach((employee) => {
      if (employee.managers.includes(managerId)) {
        arraySubOfManager.push(`${employee.firstName} ${employee.lastName}`);
      }
    });
    return arraySubOfManager;
  } throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

module.exports = { isManager, getRelatedEmployees };
