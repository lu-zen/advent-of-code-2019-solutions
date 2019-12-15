const api = require("./solution");
const fs = require("fs");

new Promise((resolve, reject) => {
  fs.readFile("./input.txt", "utf-8", function(err, data) {
    if (err) {
      reject(Error("Can't read the input file."));
    }
    resolve(data);
  });
})
  .then(data => {
    const inputData = data.split("\n").map(value => Number(value));
    console.log(api.getRequiredFuelFromArrOfMass(inputData));
  })
  .catch(e => console.warn(e.message));
