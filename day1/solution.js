function getRequiredFuelFromMass(moduleMass) {
  return Math.trunc(moduleMass / 3) - 2;
}

function getRequiredFuelFromArrOfMass(massArr) {
  const requiredTotalFuel = massArr
    .map(value => getRequiredFuelFromMass(value))
    .reduce((prev, curr) => prev + curr);
  return requiredTotalFuel;
}

module.exports = { getRequiredFuelFromArrOfMass };
