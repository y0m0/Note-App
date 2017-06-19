(function(exports) {
  function Note() {
    this.noteText = "";
  };

  Note.prototype.addText = function (text) {
    this.noteText = text;
  };
  exports.Note = Note;
})(this);
