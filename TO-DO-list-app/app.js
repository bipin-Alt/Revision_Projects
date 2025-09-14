
const addButton = document.querySelector(".add-btn"); // add button select
const addedSection = document.querySelector(".added-section");//added section
 
const addTask = ()=>{
    let inputField = document.querySelector(".input-field").value; //input field body
    const tableBody = document.querySelector(".table-body");//table bodu/tasks/

    const warning = document.querySelector(".warning");//warning div select//
    if(inputField===""){   // if trhe input field field is empty
        warning.innerHTML="Please Enter a valid Task!"   // the wraning div innertask is ://
    }
    else{
        warning.innerHTML="";  // if input field contains some value first we have to clear out that "Please enteer a valid task"
        const tablebodyitems = document.createElement("tr"); // create new element tr/
        tablebodyitems.innerHTML= `<td>${inputField}</td><button class="delete-btn">Delete</button><button class="Edit-btn">Edit</button>`
         tableBody.appendChild(tablebodyitems);//appending the tasks to the tbody//
         document.querySelector(".input-field").value=""; //adter adding clearing the input field
         document.querySelector(".input-field").focus(); // after adding the focus is removes by defalut to make the focus on input field
    }
};
addButton.addEventListener("click", addTask); //event listener
document.querySelector(".input-field").addEventListener("keydown",(event)=>{
    if(event.key === "Enter"){
        addTask();     //when enter key is pressed then addTask runs hence it add the task//
    }
})

document.querySelector(".table-body").addEventListener("click",(e)=>{  //event listener to the tablebody so that each element caould be deleted // if not we had to selecte each tr and delete all those using loop//
    if(e.target.classList.contains("delete-btn")){
           e.target.closest("tr").innerHTML = ""; //when the delete button is pressed then the delete button containing tr is empty  .closest method to find the closest tr on the even// 
           document.querySelector(".input-field").focus();//when the task is deleted still input should have focus to add another task//
    }
    else if(e.target.classList.contains("Edit-btn")){
        document.querySelector(".input-field").value = e.target.closest("tr").querySelector("td").textContent; 
        e.target.closest("tr").innerHTML = "";  
        document.querySelector(".input-field").focus();
    }
}) 
            