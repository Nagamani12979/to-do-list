const inputType = document.getElementById("input-type");
const listContainer = document.getElementById("list-container");

function addTask(){
    if (inputType.value === '') {
        alert("You must write something");
    }
     else {
        let li = document.createElement("li");
        li.textContent = inputType.value; 
        listContainer.appendChild(li);
        inputType.value = '';  
    }
}    