var Entry = require('./journal.js').Entry;

$(document).ready(function() {

  $('form#new-entry').submit(function(event){
    event.preventDefault();
    var title = $('input#title').val();
    var text = $('input#text').val();
    var date = $('input#date').val();
    console.log(title);
    console.log(text);
    console.log(date);

    var newEntry = new Entry(title, text, date);

      $('.entries').append("<p><strong>" + newEntry.title + "</strong><br><em>" + newEntry.bodyText + "</em><br>" + newEntry.date + "</p>");

  });
});
