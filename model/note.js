(function(exports) {
  function Note() {
    this.noteText = "";
  };

  Note.prototype.addText = function (text) {
    this.noteText = text;
  };

  Note.prototype.readText = function () {
    return this.noteText;
  };
  
  exports.Note = Note;
})(this);
