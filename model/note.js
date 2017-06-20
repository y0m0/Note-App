(function(exports) {
  function Note() {
    this.noteText = "";
    this.ID;
  };

  Note.prototype.writeText = function (text) {
    this.noteText = text;
  };

  Note.prototype.readText = function () {
    return this.noteText;
  };

  Note.prototype.previewText = function () {
    if (this.noteText.length > 20) {
      return (this.noteText.slice(0,20).trim() + "...");
    } else {
      return this.noteText;
    }
  };

  Note.prototype.assignID = function (id) {
    this.ID = id;
  };

  exports.Note = Note;
})(this);
