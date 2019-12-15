const api = require("./solution");
const utils = require("../utils");

utils
  .readFile("./input.txt")
  .then(data => {
    const inputData = data.split("\n").map(value => Number(value));
    console.log(api.getRequiredFuelFromArrOfMass(inputData));
  })
  .catch(e => console.warn(e.message));
