'use strict';
const fs = require('fs');

const home = require('os').homedir()
const filename = `${home}/.thoughts`;

const getRandomThought = (filename, callback) => {
  try {
    const data = fs.readFileSync(filename, 'utf8');
    const lines = data.split("\n");
    const lineNo = Math.floor(Math.random() * lines.length);

    if(+lineNo > lines.length){
      callback('File end reached without finding line');
    }

    callback(null, lines[+lineNo]);
  } catch (err) {
    callback('No thoughts found...');
    return;
  }
}

exports.add = thought => {
  const fileExists = fs.existsSync(filename);
  const newLineCharacter = fileExists ? '\n' : '';

  fs.appendFile(filename, `${newLineCharacter}${thought}`, err => {
    if (err) return console.log(err);
  });
  return 'Thought saved!';
};

exports.random = () => {
  var output;
  getRandomThought(filename, (err, line) => {
    if (err) {
      output = err;
      return;
    }
    output = line;
  });
  return output;
};
