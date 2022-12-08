const fs = require('fs'); // import the fs module

function alterFieldInJSONFiles(directory, fieldName, newValue) {
  // get a list of all files in the directory
  fs.readdir(directory, (err, files) => {
    if (err) {
      // handle the error
      return console.error(err);
    }

    // iterate over each file in the directory
    files.forEach(file => {
      // check if the file is a JSON file
      if (file.endsWith('.json')) {
        // read the file
        fs.readFile(`${directory}/${file}`, (err, data) => {
          if (err) {
            // handle the error
            return console.error(err);
          }

          // parse the JSON data
          let json = JSON.parse(data);

          // alter the specified field in the JSON data
          json[fieldName] = newValue;

          // write the altered JSON data back to the file
          fs.writeFile(`${directory}/${file}`, JSON.stringify(json), err => {
            if (err) {
              // handle the error
              return console.error(err);
            }
          });
        });
      }
    });
  });
}
