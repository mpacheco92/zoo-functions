const data = require('../data/zoo_data');

const countEntrants = (entrants) => entrants
  .reduce((acc, person) => {
    let category;
    if (person.age < 18) {
      category = 'child';
    } else if (person.age >= 18 && person.age < 50) {
      category = 'adult';
    } else {
      category = 'senior';
    }
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, { child: 0, adult: 0, senior: 0 });

const calculateEntry = (entrants) => {
  if (!entrants || entrants.length < 1) return 0;

  const { child, adult, senior } = countEntrants(entrants);
  const { child: childPrice, adult: adultPrice, senior: seniorPrice } = data.prices;
  return child * childPrice + adult * adultPrice + senior * seniorPrice;
};

module.exports = { calculateEntry, countEntrants };
