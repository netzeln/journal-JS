exports.Entry = function (title, bodyText, date) {
  this.title = title;
  this.bodyText = bodyText;
  this.date = date;
};

exports.Entry.prototype.countWords = function(){
  return this.bodyText.split(" ").length;
};
