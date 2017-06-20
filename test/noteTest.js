(function(exports) {
  function testNoteTextDefaultsToEmptyString() {
    var note = new Note();

    if (note.noteText !== "") {
      throw new Error("Note text is not an empty string");
    } else {
      console.log(arguments.callee.name + " test passed!")
    }
  };

  function testNoteMethodWriteText() {
    var note = new Note();

    note.writeText("This is a test text");
    if (note.noteText !== "This is a test text") {
      throw new Error("Note text is not what was entered");
    } else {
      console.log(arguments.callee.name + " test passed!")
    }
  };

  function testNoteMethodReadText() {
    var note = new Note();

    note.writeText("This is another test text");
    if (note.readText() !== "This is another test text") {
      throw new Error("The text was not read correctly");
    } else {
      console.log(arguments.callee.name + " test passed!")
    }
  };

  testNoteTextDefaultsToEmptyString();
  testNoteMethodWriteText();
  testNoteMethodReadText();
})(this);
