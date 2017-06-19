'use strict';

(function(exports) {
  
  function testListNotesDefaultsToEmptyArray() {
    var list = new List();
    if (!(Array.isArray(list.notes)) || list.notes.length !== 0) {
      throw new Error("Notes is not an empty array");
    }
  }
  
    function testListMethodAddNote() {
    
    function NoteSpy() {
    }
      
    var list = new List();
    var noteSpy = new NoteSpy();
      
    list.addNote(noteSpy);
      
    if (list.notes[0] !== noteSpy) {
      throw new Error("Note is not added to the list");
    }
  }

  testListNotesDefaultsToEmptyArray();
  testListMethodAddNote();
  
})(this);
