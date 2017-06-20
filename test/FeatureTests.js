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
  
  featureTestDisplayNoteHeader("Notes");
  
})(this);
 