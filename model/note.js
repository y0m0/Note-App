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
    return (this.noteText.slice(0,20) + "...");
  };

  Note.prototype.assignID = function (id) {
    this.ID = id;
  };

  exports.Note = Note;
})(this);
