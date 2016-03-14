$(document).ready(function() {

$('#new-entry').submit(function(event){
  event.preventDefault();
  var title = $('#title').val();
  var text = $('#text').val();
  var date = $('#date').val();

  var newEntry = new Entry(title, text, date);
  newEntry.forEach(function(element) {
    $('.entries').append("<strong>" + element.title + "</strong><br><em>" + element.date + "</em><br>" + element.bodyText);
  });
});


});
