const fs = require('fs');
const http = require('http');
const url = require('url');

fs.readFile('chain.json', serve);

function serve(err, raw_data) {
  if (err) {
    throw err;
  }
  var data = JSON.parse(raw_data);

  http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    parts = url.parse(request.url, true);
    if (parts.query.hasOwnProperty('max_len')) {
      max_len = parseInt(parts.query['max_len'], 10);
      if (max_len == max_len) {
        response.end(sentence(data, max_len));
        return;
      }
    }
    response.end(sentence(data, 14));
  }).listen(8080);
}

function sentence(data, max_len) {
  function select(array) {
    return array[Math.floor(array.length * Math.random())];
  }
  var string = [select(data.seeds)];
  do {
    if (string.length == max_len - 1) {
      string.push(select(data.terms));
      break;
    }
    word = select(data.chain[string[string.length - 1]]);
    string.push(word);
    if (data.terms.indexOf(word) >= 0) {
      break;
    }
  } while (data.chain.hasOwnProperty(word));
  return string.join(' ');
}
