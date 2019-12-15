const fs = require("fs");

const readFile = function (filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", function(err, data) {
      if (err) {
        reject(Error("Can't read the input file."));
      }
      resolve(data);
    });
  });
};

module.exports = { readFile };
