(function(exports) {
  function testNoteTextDefaultsToEmptyString() {
    var note = new Note();

    if (note.noteText !== "") {
      throw new Error("Note text is not an empty string");
    }
  };

  function testNoteMethodAddText() {
    var note = new Note();

    note.addText("This is a test text");
    if (note.noteText !== "This is a test text") {
      throw new Error("Note text is not what was entered");
    }
  };

  function testNoteMethodReadText() {
    var note = new Note();

    note.addText("This is another test text");
    if (note.readText() !== "This is another test text") {
      throw new Error("The text was not read correctly");
    }
  };

  testNoteTextDefaultsToEmptyString();
  testNoteMethodAddText();
  testNoteMethodReadText();
})(this);
