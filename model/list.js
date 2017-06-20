'use strict';

(function(exports) {
  function List() {
    this.notes = [];
  }

  List.prototype.assignID = function(note) {
    note.ID = this.notes.length
  }

  List.prototype.addNote = function(note) {
    this.notes.push(note);
    this.assignID(note);
  }

  List.prototype.retrieveNotes = function() {
    return this.notes;
  }



  exports.List = List;
})(this);
