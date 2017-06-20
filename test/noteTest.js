var assert = new Assert();

  function testNoteTextDefaultsToEmptyString() {
    var note = new Note();

    assert.isTrue(note.noteText === "", arguments.callee.name)
  };

  function testNoteMethodWriteText() {
    var note = new Note();

    note.writeText("This is a test text");
    assert.isTrue(note.noteText === "This is a test text", arguments.callee.name)
  };

  function testNoteMethodReadText() {
    var note = new Note();

    note.writeText("This is another test text");
    assert.isTrue(note.readText() === "This is another test text", arguments.callee.name)
  };

  function testNoteMethodPreviewText() {
    var note = new Note();

    note.writeText("This is yet another test text");
    assert.isTrue(note.previewText() === "This is yet another...", arguments.callee.name)
  };

  function testNoteMethodAssignID() {
    var note = new Note();

    note.assignID(2);
    assert.isTrue(note.ID === 2, arguments.callee.name)
  };

  testNoteTextDefaultsToEmptyString();
  testNoteMethodWriteText();
  testNoteMethodReadText();
  testNoteMethodPreviewText();
  testNoteMethodAssignID();
