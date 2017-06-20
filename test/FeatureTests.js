//'use strict';

(function(exports) {

  function featureTestDisplayNoteHeader(h1Name) {
    var h1 = document.getElementById("header").innerHTML;

    if (h1 !== h1Name) {
      throw new Error( h1Name + " is not on the page" );
    }
    else {
      console.log(arguments.callee.name + " test passed!");
    }
  }

  function featureTestCreateNote() {
    var note = document.getElementById("note-body");
    var button = document.getElementById("createButton");
    var ulChildren;

    note.value = "Some content for this note.";

    // Simulate clicking on the specified element.
    triggerEvent( button, 'click' );
    ulChildren = document.getElementById("noteList").children;

    if ( ulChildren.length !== 1) {
      throw new Error( "Note is not on the page" );
    }
    else {
      console.log(arguments.callee.name + " test passed!");
    }
  }

  function featureTestCreateMultipleNotes() {
    var note = document.getElementById("note-body");
    var button = document.getElementById("createButton");
    var ulChildren;

    note.value = "First content for this note.";
    triggerEvent( button, 'click' );
    note.value = "Another text.";
    triggerEvent( button, 'click' );
    note.value = "One more note.";
    triggerEvent( button, 'click' );

    ulChildren = document.getElementById("noteList").children;

    if ( ulChildren.length !== 4) {
      throw new Error( "Wrong number of notes in the list" );
    }
    else {
      console.log(arguments.callee.name + " test passed!");
    }
  }

  function featureTestVeryLongNote() {
    var note = document.getElementById("note-body");
    var button = document.getElementById("createButton");
    var ulChildren;

    note.value = ("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");

    // Simulate clicking on the specified element.
    triggerEvent( button, 'click' );
    ulChildren = document.getElementById("noteList").children;
    if ( ulChildren[ulChildren.length-1].innerText !== "Lorem ipsum dolor si...") {
      throw new Error( "Note is longer the 20 chars" );
    }
    else {
      console.log(arguments.callee.name + " test passed!");
    }
  }


  /*
  * Trigger the specified event on the specified element.
  * @param  {Object} elem  the target element.    
  * @param  {String} event the type of the event (e.g. 'click').
  */
  function triggerEvent( elem, event ) {
    var clickEvent = new Event( event );
    elem.dispatchEvent( clickEvent );    // Dispatch the event.   
  }

  // Run the feature tests
  window.onload = function() {
    featureTestDisplayNoteHeader("Notes");
    featureTestCreateNote();
    featureTestCreateMultipleNotes();
    featureTestVeryLongNote();
  };
})(this);

