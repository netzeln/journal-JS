var Entry = require('./journal.js').Entry;


console.log('It works?');
var journal = new Entry('This is a title', 'This is text', '03/14/16');

  console.log(journal.title);
  console.log(journal.bodyText);
  console.log(journal.date);
  console.log(journal.countWords());
