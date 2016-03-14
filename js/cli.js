var Entry = require('./journal.js').Entry;
var prompt = require('prompt');
prompt.start();

// var entry = new Entry();

prompt.get(['title','text'], function(err, result) {
  var entry = new Entry();
  entry.title = result.title;
  entry.bodyText = result.text;
  console.log(entry.title);
  console.log(entry.bodyText)
});

// prompt.get('what should we say', function(err, result2) {
//   var entry = new Entry();
//   entry.bodyText = result2;
//   console.log(entry.bodyText);
// });

// prompt.get('when did we say it', function(err, result) {
//   var entry = new Entry();
//   entry.date = result;
//   console.log(entry.date);
// });

// console.log(entry.countWords());
// console.log('title');
// var journal = new Entry('This is a title', 'This is text', '03/14/16');
//
//   console.log(journal.title);
//   console.log(journal.bodyText);
//   console.log(journal.date);
//   console.log(journal.countWords());
