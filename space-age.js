//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const period_rate = {
  'earth' : 1,
  'mercury' : 0.2408467,
  'venus' : 0.61519726,
  'mars' : 1.8808158,
  'jupiter' : 11.862615,
  'saturn' : 29.447498,
  'uranus' : 84.016846,
  'neptune' : 164.7913
}

const earth_orbital_seconds = 31557600;

export const age = (planet,sec) => {
  const periods = Math.round(((period_rate[planet] * earth_orbital_seconds) + Number.EPSILON) * 100) / 100;
  return Number(parseFloat(sec / periods).toFixed(2));
};
