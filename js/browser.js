var Entry = require('./journal.js').Entry;

$(document).ready(function() {

  $('form#new-entry').submit(function(event){
    event.preventDefault();
    var title = $('input#title').val();
    var text = $('input#text').val();
    var date = $('input#date').val();



    var newEntry = new Entry(title, text, date);
    var words = newEntry.countWords();
      $('.entries').append("<p><strong>" + newEntry.title + "</strong><br><em>" + newEntry.bodyText + "</em><br>" + newEntry.date + "<br>" + words + " words in this entry</p>");

  });
});
