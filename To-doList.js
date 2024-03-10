const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container")
function AddButton(){
    if(inputBox.value === ''){
        alert('Please enter a task!');
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputBox.value = '';
    saveDate();
}
// Function to check and delete the todo item from the list
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveDate();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveDate();
    }
},false);
//to save the data in local storage so list wont get erased when refreshed
function saveDate(){
    localStorage.setItem("data",listContainer.innerHTML)
}
function showList(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showList();