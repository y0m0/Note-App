var assert = new Assert();

  function testListNotesDefaultsToEmptyArray() {
    var list = new List();
    assert.isTrue(((Array.isArray(list.notes)) && list.notes.length === 0), arguments.callee.name)
  }

  function testListMethodAddNote() {

    function NoteSpy() {
    }

    var list = new List();
    var noteSpy = new NoteSpy();

    list.addNote(noteSpy);

    assert.isTrue(list.notes[0] === noteSpy, arguments.callee.name)
  }

  function testListMethodRetrieveAllNotes() {
    function NoteSpy() {
    }

    var list = new List();
    var noteSpyOne = new NoteSpy();
    var noteSpyTwo = new NoteSpy();

    list.addNote(noteSpyOne);
    list.addNote(noteSpyTwo);

    assert.isTrue((list.retrieveNotes()[0] === noteSpyOne  && list.retrieveNotes()[1] === noteSpyTwo ), arguments.callee.name)
  }

  function testListMethodAssignNoteID() {
  function NoteSpy() {
    this.ID;
  }

  var list = new List();
  var noteSpyOne = new NoteSpy();
  var noteSpyTwo = new NoteSpy();

  list.addNote(noteSpyOne);
  list.addNote(noteSpyTwo);

  assert.isTrue(list.retrieveNotes()[0].ID === 1  && list.retrieveNotes()[1].ID === 2 , arguments.callee.name)
}



  testListNotesDefaultsToEmptyArray();
  testListMethodAddNote();
  testListMethodRetrieveAllNotes();
  testListMethodAssignNoteID();
