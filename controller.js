var list;

// window.onload = function() {
//   var lightbox = document.getElementById('outer')
//   document.getElementsByClass('note-link').addEventListener('click', function(){
//     lightbox.style.visibility = 'visible';
//   });
// };

window.onload = function() {
  list = new List();
};

var createNote = function(body) {
  var note = new Note();
  note.writeText(body);
  list.addNote(note);
  addNoteToList(note);
};

var retrieveBody = function() {
  var body = document.getElementById("note-body").value;
  createNote(body);
  document.getElementById("note-body").value = "";
};

var addNoteToList = function(note) {
  var ul = document.getElementById("noteList");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(note.previewText()));
  li.setAttribute("id", note.ID);
  li.setAttribute("class", "listItem")
  li.setAttribute("onclick", "openLightbox(this)");
  ul.appendChild(li);
};

 var openLightbox = function(element) {
     var itemNumber = element.id;
     var note = list.notes[itemNumber-1];
     document.getElementById('note-view').innerHTML = note.readText();
     document.getElementById('outer').style.visibility = 'visible';
     var lightbox = document.getElementById('outer');
     lightbox.onclick = function() {
       lightbox.style.visibility = 'hidden';
     };
 };
