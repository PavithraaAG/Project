// console.log("hello world!");
document.addEventListener("DOMContentLoaded", () => {
  const storedNotes = localStorage.getItem("notes");
  if (storedNotes) {
    notes = JSON.parse(storedNotes);
    displayNotes();
  }
});

let notes = [];
let temp=0;
let noteForm = document.getElementById('note-form')
let newNoteBtn = document.getElementById("new-note-btn")
let popup = document.getElementById("popup")
let popupbg = document.querySelector(".popupbg")
let submit=document.getElementById("submit")
newNoteBtn.addEventListener("click", () => {
  popup.style.display = "block"
  popupbg.style.display = "block"
})
noteForm.addEventListener("submit",(event) =>{
  event.preventDefault();
  
  console.log("hello world!");
  popup.style.display = "none"
  popupbg.style.display = "none"
  var noteTitle = document.getElementById('note-title').value;
  var noteContent = document.getElementById('note-content').value;
 
  if(submit.innerText!=="update"){
  var newNote = {
    title: noteTitle,
    content: noteContent
  };
 

  notes.push(newNote);
  localStorage.setItem("notes", JSON.stringify(notes));
}
else{
  console.log("yess")
  notes[temp]['title']=noteTitle
  notes[temp]['content']=noteContent
  submit.innerText="submit"
}
  document.getElementById('note-title').value = '';
  document.getElementById('note-content').value = '';
  displayNotes();

});
function displayNotes() {
  var noteList = document.getElementById('note-list');
  noteList.innerHTML = '';

  notes.forEach(function (note, index) {
    var noteItem = document.createElement('div')
    
    noteItem.innerHTML = '<h1 id="head">' + note.title + '</h1><p>' + note.content + '</p>';
    
    var deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.addEventListener('click', function () {
      notes.splice(index, 1);
      displayNotes();
    });
    var editButton = document.createElement('button');
    editButton.innerHTML = 'Edit';
    editButton.addEventListener('click', function () {
       console.log(notes)
      //  console.log(newNote)
      document.getElementById('note-title').value =note.title ;
      document.getElementById('note-content').value =note.content ;
      popup.style.display = "block"
      popupbg.style.display = "block"
      submit.innerText="update"
      temp=index
      console.log(index)

    })
    localStorage.setItem("notes", JSON.stringify(notes));

    noteItem.appendChild(deleteButton);
    noteItem.appendChild(editButton);
    noteItem.style.border = "1px solid black";
    noteItem.style.backgroundColor="black";
    noteItem.style.color="white";
    noteItem.style.borderRadius="10px";
    noteItem.style.padding="20px";
    noteItem.style.justifyContent="center";
    noteList.appendChild(noteItem);
  });
}
