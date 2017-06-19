(function(exports) {
  function testNoteTextDefaultsToEmptyString() {
    var note = new Note();

    if (note.noteText !== "") {
      throw new Error("Note text is not an empty string");
    }
  }

  testNoteTextDefaultsToEmptyString();
})(this);
