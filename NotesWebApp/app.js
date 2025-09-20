const dispayNotes = () =>{
    const inputField = document.getElementById("noteInput");
    const inputFieldValue = inputField.value.trim();
    console.log(inputFieldValue);
    const errorBlock = document.getElementById("error");
   if(!inputFieldValue){
    errorBlock.classList.remove("hidden");
    errorBlock.classList.remove("opacity-0");
    errorBlock.classList.add("opacity-100");
    return;
   
   }
   else{
    document.getElementById("error").classList.add("hidden");
   }
   const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
   //new note object 
   const newNote = {
     Id:Date.now(),
     text:inputFieldValue,
   }
   savedNotes.push(newNote);
   localStorage.setItem("notes",JSON.stringify(savedNotes));
   //sending the newNote to the addNoteToTable function//
   addNoteToTable(newNote);
    inputField.value = "";
}
    

const addNoteToTable = (note) =>{
    const notes = document.getElementById("notes");
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="p-3 text-gray-700">${note.text}</td>
      <td class="p-3 flex gap-2">
        <button  data-id="${note.Id}"id="editBtn"class="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500 transition edit ">Edit</button>
        <button data-id="${note.Id} id="deleteBtn" class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition delete">Delete</button>
      </td>
    `;
    notes.appendChild(tr);   
};

//when delete button is clicked
document.getElementById("clearall").addEventListener("click", ()=>{
    const clearLocalStorage = localStorage.clear("notes");
    console.log(clearLocalStorage);
    const notes = document.getElementById("notes");
    notes.innerHTML = "";
});

//Delete item from local storage 
document.getElementById("notes").addEventListener("click", (e) => {
    console.log(e.target.classList.contains("delete"));
    if (e.target.classList.contains("delete")) {
      const noteIdToDelete = parseInt(e.target.getAttribute("data-id")); 
      console.log(noteIdToDelete);
      // Get notes
      let notes = JSON.parse(localStorage.getItem("notes")) || [];
      // Filter out deleted one
      notes = notes.filter(note => note.Id !== noteIdToDelete);
      // Save back
      localStorage.setItem("notes", JSON.stringify(notes));
      // Remove from DOM
      e.target.closest("tr").remove();
    }
  });
  //Edit item and update the local storage 
//   document.getElementById("notes").addEventListener("click", (e)=>{
//     if(e.target.classList.contains("edit")){
//         const noteIdToEdit = parseInt(e.target.getAttribute("data-id"));
//         let notes  = JSON.parse(localStorage.getItem("notes")) || [];
//         const inputField = document.getElementById("noteInput");
        
//     }
//   })
//when window loads
window.addEventListener("DOMContentLoaded",()=>{
    let savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    savedNotes.forEach(note => {
        addNoteToTable(note);
    });
});
//when save button is clicked
const saveBtn = document.getElementById("savebtn")
saveBtn.addEventListener("click", dispayNotes);