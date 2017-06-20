(function(exports) {
  function testNoteTextDefaultsToEmptyString() {
    var note = new Note();

    if (note.noteText !== "") {
      throw new Error("Note text is not an empty string");
    }
  };

  function testNoteMethodWriteText() {
    var note = new Note();

    note.writeText("This is a test text");
    if (note.noteText !== "This is a test text") {
      throw new Error("Note text is not what was entered");
    }
  };

  function testNoteMethodReadText() {
    var note = new Note();

    note.writeText("This is another test text");
    if (note.readText() !== "This is another test text") {
      throw new Error("The text was not read correctly");
    }
  };

  function testNoteMethodPreviewText() {
    var note = new Note();

    note.writeText("This is yet another test text");
    if (note.previewText() !== "This is yet another...") {
      throw new Error("This preview was not correct");
    }
  };

  function testNoteMethodAssignID() {
    var note = new Note();

    note.assignID(2);
    if (note.ID !== 2) {
      throw new Error("This is not the correct ID");
    }
  };

  testNoteTextDefaultsToEmptyString();
  testNoteMethodWriteText();
  testNoteMethodReadText();
  testNoteMethodPreviewText();
  testNoteMethodAssignID();
})(this);
