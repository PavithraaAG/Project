console.log("hello world!");
let notes = [];
    let noteForm=document.getElementById('note-form')
    let newNoteBtn=document.getElementById("new-note-btn")
    let popup = document.getElementById("popup")
    let popupbg = document.querySelector(".popupbg")
    newNoteBtn.addEventListener("click",() => {
            popup.style.display="block"
            popupbg.style.display="block"
        })
    noteForm.addEventListener('submit', function(event) {
    event.preventDefault();
    popup.style.display="none"
    popupbg.style.display="none"
    var noteTitle = document.getElementById('note-title').value;
    var noteContent = document.getElementById('note-content').value;

    var newNote = {
      title: noteTitle,
      content: noteContent
    };

    notes.push(newNote);
    document.getElementById('note-title').value = '';
    document.getElementById('note-content').value = '';
    displayNotes();
  });
  function displayNotes() {
    var noteList = document.getElementById('note-list');
    noteList.innerHTML = '';

    notes.forEach(function(note, index) {
    var noteItem = document.createElement('div');
    noteItem.innerHTML = '<h1>' + note.title + '</h1><p>' + note.content + '</p>';

    var deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.addEventListener('click', function() {
        notes.splice(index, 1);
        displayNotes();
    });
    var editButton = document.createElement('button');
      editButton.innerHTML = 'Edit';
      editButton.addEventListener('click', function() {
        popup.style.display="block"
        popupbg.style.display="block"
        displayNotes();
    })


      noteItem.appendChild(deleteButton);
      noteItem.appendChild(editButton);
      noteList.appendChild(noteItem);
    });
  }
