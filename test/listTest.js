(function(exports) {
  function testListNotesDefaultsToEmptyArray() {
    var list = new List();
    if (!(Array.isArray(list.notes)) || list.notes.length !== 0) {
      throw new Error("Notes is not an empty array");
    }
  };

  testListNotesDefaultsToEmptyArray();
})(this);
