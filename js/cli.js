var Entry = require('./journal.js').Entry;
var prompt = require('prompt');
prompt.start();

// var entry = new Entry();

prompt.get(['title','text', 'date'], function(err, result) {
  var entry = new Entry();
  entry.title = result.title;
  entry.bodyText = result.text;
  entry.date = result.date;
  console.log(entry.title);
  console.log(entry.bodyText);
  console.log(entry.date);
});
