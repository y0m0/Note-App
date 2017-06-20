//'use strict';

(function(exports) {
  
  function featureTestDisplayNoteHeader(h1Name) {
    var h1 = document.getElementById("header").innerHTML;
    
    if (h1 !== h1Name) {
      throw new Error( h1Name + " is not on the page" );
    }
    else {
      console.log(arguments.callee.name + " test passed!")
    }
  }
  
  function featureTestCreateNote() {
    var note = document.getElementById("note-body");
    var button = document.getElementById("create-note");
    var li = document.getElementsByTagName("li");

    note.innerHTML = "Some content for this note.";
    
    // Simulate clicking on the specified element.
    triggerEvent( button, 'click' );
    
    if ( li.length !== 1) {
      throw new Error( "Note is not on the page" );
    }
    else {
      console.log(arguments.callee.name + " test passed!")
    }
  }
  
  //this test needs to be corrected after merge
  function featureTestCreateMultipleNotes() {
    var note = document.getElementById("note-body");
    var button = document.getElementById("create-note");
    var ulChildren = document.getElementsByTagName("ul")[0].children;

    note.innerHTML = "Some content for this note.";
    triggerEvent( button, 'click' );
    note.innerHTML = "Another thext.";
    triggerEvent( button, 'click' );
    note.innerHTML = "One more note.";
    triggerEvent( button, 'click' );
    
    if ( ulChildren.length !== 1) {
      throw new Error( "Wrong number of notes in the list" );
    }
    else {
      console.log(arguments.callee.name + " test passed!")
    }
  }
  
  
  /**
  * Trigger the specified event on the specified element.
  * @param  {Object} elem  the target element.    
  * @param  {String} event the type of the event (e.g. 'click').
  */
  function triggerEvent( elem, event ) {
    var clickEvent = new Event( event ); // Create the event.      elem.dispatchEvent( clickEvent );    // Dispatch the event.   
  }
  
  // Run the feature tests
  featureTestDisplayNoteHeader("Notes");
  featureTestCreateNote();
  featureTestCreateMultipleNotes();
})(this);
 