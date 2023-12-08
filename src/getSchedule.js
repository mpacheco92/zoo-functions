const data = require('../data/zoo_data');

const getExhibition = (day) => data.species.reduce((arr, specie) => {
  if (specie.availability.includes(day)) {
    arr.push(specie.name);
  }
  return arr;
}, []);

const closedMonday = (arg) => {
  if (arg === 'Monday') {
    return {
      Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
    };
  }
};

const noParam = () => Object.keys(data.hours).reduce((acc, day) => {
  acc[day] = {
    officeHour: `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`,
    exhibition: getExhibition(day),
  };
  if (day === 'Monday') {
    acc[day] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  }
  return acc;
}, {});

const paramIsADay = (param) => Object.keys(data.hours).reduce((obj, day) => {
  if (day === param) {
    return {
      ...obj,
      [day]: {
        officeHour: `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`,
        exhibition: getExhibition(day),
      },
    };
  }
  return obj;
}, {});

const findSpecies = (speciesName) => data.species.find((specie) => specie.name === speciesName);

const ifObjs = (scheduleTarget) => {
  if (!Object.keys(data.hours).includes(scheduleTarget) || !scheduleTarget) {
    return noParam();
  }

  if (Object.keys(data.hours).includes(scheduleTarget)) {
    return paramIsADay(scheduleTarget);
  }
};

const getSchedule = (scheduleTarget) => {
  if (findSpecies(scheduleTarget)) {
    return findSpecies(scheduleTarget).availability;
  }

  if (closedMonday(scheduleTarget)) {
    return closedMonday(scheduleTarget);
  }

  if (ifObjs(scheduleTarget)) {
    return ifObjs(scheduleTarget);
  }
};

module.exports = getSchedule;
