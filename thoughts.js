'use strict';
const fs = require('fs');

const filename = 'thoughts.txt';

const getRandomThought = (filename, callback) => {
  const data = fs.readFileSync(filename, 'utf8');
  const lines = data.split("\n");
  const lineNo = Math.floor(Math.random() * lines.length);

  if(+lineNo > lines.length){
    throw new Error('File end reached without finding line');
  }

  callback(null, lines[+lineNo]);
}

exports.add = thought => {
  fs.appendFile(filename, `\n${thought}`, err => {
    if (err) return console.log(err);
  })
  return 'Thought saved!';
};

exports.random = () => {
  var a;
  getRandomThought(filename, (err, line) => {
    if (err) return console.log(err);
    a = line;
  });
  return a;
};
