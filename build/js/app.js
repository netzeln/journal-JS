(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./journal.js":2}],2:[function(require,module,exports){
exports.Entry = function (title, bodyText, date) {
  this.title = title;
  this.bodyText = bodyText;
  this.date = date;
}

exports.Entry.prototype.countWords = function(){
  return this.bodyText.split(" ").length;
}

},{}]},{},[1]);
