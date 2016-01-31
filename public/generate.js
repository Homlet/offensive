const fs = require('fs');

fs.readFile('chain.json', generate);

function generate(err, raw_data) {
  if (err) {
    throw err;
  }
  data = JSON.parse(raw_data)

  function sentence(max_len) {
    function select(array) {
      return array[Math.floor(array.length * Math.random())];
    }
    var string = [select(data.seeds)];
    do {
      word = select(data.chain[string[string.length - 1]]);
      string.push(word);
      if (data.terms.indexOf(word) >= 0) {
        break;
      }
      if (string.length == max_len - 1) {
        string.push(select(data.terms));
        break;
      }
    } while (data.chain.hasOwnProperty(word));
    return string.join(' ');
  }

  console.log(sentence(20));
}
